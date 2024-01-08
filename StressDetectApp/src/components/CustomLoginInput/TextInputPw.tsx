// components/TextInput.tsx
import React from 'react';

import useTheme from '../../theme/useTheme';
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
import {useTogglePasswordVisibility} from './TogglePwVisibility';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { rgba } from 'react-native-image-filter-kit';

/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  defaultValue?: string; //ADD DEFAULT VALUE TO PROPS
}

export const TextInputPw = (props: TextInputProps) => {
  /* GET THE FORMS CONTEXT */
  const formContext = useFormContext();

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
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

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const {name, label, rules, defaultValue, ...inputProps} = props;

  const {field} = useController({name, rules, defaultValue});
  //const {fieldState} = useController({error});

  return (
    /* 
     ASSIGN PROPS ONCHANGETEXT, ONBLUR, AND VALUE TO
       CORRESPONDING FIELDS
  */
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <RNTextInput
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

const {colors} = useTheme;
const styles = StyleSheet.create({
  label: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    color: colors.placeholder,
    fontSize: scale(16),
    marginVertical: 4,
    marginBottom: 8,
    marginTop: 4,
    // textTransform: 'uppercase',
    letterSpacing: 1.0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    borderColor: 'white',
    borderWidth: scale(1),
    height: scale(80),
    marginVertical: 4,
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
  input: {
    // fontFamily: 'Bebas Neue Pro',

    color: colors.DarkGreyColor,
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(16),
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: 49,
    padding: 10,
    borderRadius: 4,
  },
  inputContainer: {
    // flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'red',
    borderColor: '#ff00ff',
    height: 49,
    padding: 0,
    borderRadius: 4,
  },
  error: {color: 'red', alignSelf: 'stretch', marginTop: scale(16)},
});
