// components/TextInput.tsx
import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';

/* IMPORT HOOKS AND PROPS TYPES */
import {
  useController,
  useFormContext,
  ControllerProps,
  UseControllerProps,
} from 'react-hook-form';
import {moderateScale, scale} from 'react-native-size-matters';
import {useTogglePasswordVisibility} from '../CustomLoginInput/TogglePwVisibility';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  defaultValue?: string; //ADD DEFAULT VALUE TO PROPS
}

export const TextInputPw = (props: TextInputProps) => {
  /* GET THE FORMS CONTEXT */
  const formContext = useFormContext();

  /* DECONSTRUCT PROPS */
  const {label, name, rules, defaultValue, ...inputProps} = props;

  /* 
        REGISTER THE CONTROLLER WITH VALUES 
        RECEIVED THROUGH PROPS
*/
  const {field} = useController({name, rules, defaultValue});
  const {...methods} = formContext;

  /* 
        RETURN MESSAGE TO DEVELOPER
        WHEN FORMCONTEXT OR NAME IS MISSING
*/
  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    return null;
  }
  return <ControlledInput {...props} />;
};
const ControlledInput = (props: TextInputProps) => {
  const formContext = useFormContext();
  const {formState} = formContext;

  const {name, label, rules, defaultValue, ...inputProps} = props;

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const {field} = useController({name, rules, defaultValue});
  //const {fieldState} = useController({error});

  return (
    /* 
     ASSIGN PROPS ONCHANGETEXT, ONBLUR, AND VALUE TO
       CORRESPONDING FIELDS
  */
    <View style={styles.container}>
      {/* {label && <Text style={styles.label}>{label}</Text>} */}
      <View style={styles.inputContainer}>
        <RNTextInput
          placeholder={label}
          placeholderTextColor={'grey'}
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
          secureTextEntry={passwordVisibility}
        />
        <Pressable
          onPress={handlePasswordVisibility}
          style={styles.containerEye}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Bebas Neue Pro',
    color: 'gray',
    fontSize: scale(16),
    marginVertical: 4,
    marginBottom: 0,
    marginTop: 8,
    textTransform: 'uppercase',
    letterSpacing: 1.0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    height: scale(40),
    marginVertical: 3,
  },
  input: {
    color: 'gray',
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    // padding: scale(10),
    // color: '#525252',
    backgroundColor: 'white',
    height: 49,
    padding: 10,
    borderRadius: 0,
    marginTop: 0,
    fontSize: scale(16),
  },
  inputContainer: {
    backgroundColor: 'white',
    borderColor: '#ff00ff',
    height: 49,
    padding: 0,
    borderRadius: 4,
    paddingTop: 14,
  },
  containerEye: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    alignContent: 'center',
    // backgroundColor: 'red',
    // height: scale(80),
    // backgroundColor: rgba(255, 255, 255, 0),
    // backgroundColor: 'rgba(255, 255, 255, 0)',
    // marginVertical: moderateScale(10),
    paddingRight: moderateScale(8),
    // marginHorizontal: scale(8),
    // marginBottom: scale(4),
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  error: {color: 'red', alignSelf: 'stretch', marginTop: scale(16)},
});
