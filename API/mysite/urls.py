"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.conf.urls import url, include
from django.core.files.storage import FileSystemStorage
from django.shortcuts import render
import matplotlib.pyplot as plt
import numpy as np
import os
from keras.models import load_model
from pathlib import Path
import librosa
import librosa.display
from keras.preprocessing import image
from keras.applications.mobilenet import preprocess_input
import cv2 as cv2
from keras_preprocessing.image import  load_img ,img_to_array
from pydub import AudioSegment
 
 
voiceEmotionModel = load_model('models/stress_analyer_voice.h5')
bodyStressModel = load_model('models/stress_detector.h5')

@api_view(['POST'])
def bodyStress(request):
    print(request)
    print("video uploading************")
    fileObj=request.FILES['filePath']
    fs=FileSystemStorage()
    filePathName=fs.save(fileObj.name,fileObj)
    filePathName='media/'+filePathName
    melImage = extractFrame(filePathName)
    detected=detectStressLevel()
    print(detected)
    return Response({"response":detected})

def extractFrame(fileName):
    vidcap = cv2.VideoCapture(fileName)
    fname = os.path.basename(fileName).split('.')[0]
    success,image = vidcap.read()
    count = 0
    totalFrames=0
    while success:
        if count % 100 == 0:
            totalFrames +=1
            cv2.imwrite("./media/bodyStress/{}-{}.jpg".format(fname,str(count).zfill(4)),image)     # save frame as JPEG file      
        success,image = vidcap.read()
        count += 1
    return totalFrames

def detectStressLevel():
    path  = ('./media/bodyStress/')
    filenames = os.listdir(path)
    level1=0
    level2=0
    level3=0
    level4=0
    level5=0
    for file in filenames:
        print(file)
        img_path=path+file
        img =  load_img(img_path, target_size=(48,48))
        x =  img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)
        result1=bodyStressModel.predict(x)
        list1 = result1.tolist()
        finalresult=list1[0]
        max_value = max(finalresult)
        max_index = finalresult.index(max_value)
        print(max_index)
        if max_index==0:
            level1+=1
        elif max_index==1:
            level2+=1
        elif max_index==2:
            level3+=1
        elif max_index==3:
            level4+=1
        elif max_index==4:
            level5+=1
    valueDict={"level1":level1,"level2":level2,"level3":level3,"level4":level4,"level5":level5}
    max_variable = max(valueDict, key=valueDict.get)
    max_value = valueDict[max_variable]      
    path_list=['./media/bodyStress/']
    for path in path_list:
          for f in os.listdir(path):
            os.remove(os.path.join(path, f))
    return max_variable

@api_view(['POST'])
def voiceStress(request):
    print(request)
    print("image uploading************")
    fileObj=request.FILES['filePath']
    fs=FileSystemStorage()
    filePathName=fs.save(fileObj.name,fileObj)
    filePathName='media/'+filePathName
    melImage = createMelSpec(filePathName)
    detected=detectvoiceStress(melImage)
    print(detected)
    return Response({"response":detected})

def detectvoiceStress(img_path):
    img = image.load_img(img_path, target_size=(224,224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    result1=voiceEmotionModel.predict(x)
    list1 = result1.tolist()
    finalresult=list1[0]
    max_value = max(finalresult)
    max_index = finalresult.index(max_value)
    if max_index==0:
        return "level1"
    elif max_index==1:
        return "level2"
    elif max_index==2:
        return "level3"
    elif max_index==3:
        return "level4"
    elif max_index==4:
        return "level5"


# def createMelSpec(AUDIO_FILE):
#     print(AUDIO_FILE)
#     image=AUDIO_FILE.split('.wav')[0].split('/')[1]
#     print(image)
#     samples, sample_rate = librosa.load(AUDIO_FILE, sr=None)
#     sgram = librosa.stft(samples)
#     sgram_mag, _ = librosa.magphase(sgram)
#     mel_scale_sgram = librosa.feature.melspectrogram(S=sgram_mag, sr=sample_rate)
#     mel_sgram = librosa.amplitude_to_db(mel_scale_sgram, ref=np.min)
#     s=librosa.display.specshow(mel_sgram, sr=sample_rate, x_axis='time', y_axis='mel')
#     from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
#     plt.axis('off')
#     fig = plt.Figure()
#     canvas = FigureCanvas(fig)
#     ax = fig.add_subplot(111)
#     p = librosa.display.specshow(mel_sgram, ax=ax)
#     savedImg = 'media/'+image+'.jpg'
#     fig.savefig(savedImg,bbox_inches='tight' )
#     return savedImg

def createMelSpec(AUDIO_FILE):
    print(AUDIO_FILE)
    image=AUDIO_FILE.split('.m4a')[0].split('/')[1]
    print(image)
    output_file = "media/"+image+".wav"
    audio = AudioSegment.from_file(AUDIO_FILE, format="m4a")
    audio.export(output_file, format="wav")
    samples, sample_rate = librosa.load(output_file, sr=None)
    sgram = librosa.stft(samples)
    sgram_mag, _ = librosa.magphase(sgram)
    mel_scale_sgram = librosa.feature.melspectrogram(S=sgram_mag, sr=sample_rate)
    mel_sgram = librosa.amplitude_to_db(mel_scale_sgram, ref=np.min)
    s=librosa.display.specshow(mel_sgram, sr=sample_rate, x_axis='time', y_axis='mel')
    from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
    plt.axis('off')
    fig = plt.Figure()
    canvas = FigureCanvas(fig)
    ax = fig.add_subplot(111)
    p = librosa.display.specshow(mel_sgram, ax=ax)
    savedImg = 'media/'+image+'.jpg'
    fig.savefig(savedImg,bbox_inches='tight' )
    return savedImg


urlpatterns = [
 
    url(r'^voiceStress/$', voiceStress),
    url(r'^bodyStress/$', bodyStress),
 

]
    