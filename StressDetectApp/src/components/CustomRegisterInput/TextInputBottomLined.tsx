// components/TextInput.tsx
import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  StyleSheet,
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
import useTheme from '../../theme/useTheme';
const {colors} = useTheme;
/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  defaultValue?: string; //ADD DEFAULT VALUE TO PROPS
  style?: any;
}

export const TextInputBottomLined = (props: TextInputProps) => {
  /* GET THE FORMS CONTEXT */
  const formContext = useFormContext();

  /* DECONSTRUCT PROPS */
  const {style, label, name, rules, defaultValue, ...inputProps} = props;

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

  const {style, name, label, rules, defaultValue, ...inputProps} = props;

  const {field} = useController({name, rules, defaultValue});
  //const {fieldState} = useController({error});

  return (
    /* 
     ASSIGN PROPS ONCHANGETEXT, ONBLUR, AND VALUE TO
       CORRESPONDING FIELDS
  */

    <RNTextInput
      // name="email"
      style={[styles.TextInput, style]}
      placeholderTextColor={'grey'}
      // style={styles.input}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      {...inputProps}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    color: 'gray',
    fontSize: scale(22),
    marginVertical: 4,
    marginBottom: 8,
    marginTop: 4,
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
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(22),
    backgroundColor: 'white',
    height: 49,
    padding: 10,
    borderRadius: 0,
  },
  inputContainer: {
    backgroundColor: 'red',
    borderColor: '#ff00ff',
    height: 49,
    padding: 0,
    borderRadius: 4,
  },
  TextInput: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    // color: '#0E74BE',
    color: colors.SplashButtonBluecolor,
    // activeUnderlineColor: colors.SplashButtonBluecolor,
    backgroundColor: colors.PheoWhitecolor,
    // placeholderTextColor: '#000',
    height: moderateScale(35),
    // <<<<<<< HEAD
    width: moderateScale(60),
    fontSize: scale(25),
    // =======
    //     width: moderateScale(60),
    //     fontSize: scale(25),
    // >>>>>>> ffbec3184bfc3c41e01530e68147fc3fbb92fecb
    // backgroundColor: '#fff',
    paddingHorizontal: moderateScale(4),
    marginHorizontal: moderateScale(16),
    paddingVertical: moderateScale(4),
    marginVertical: moderateScale(0),
    // marginTop: moderateScale(-32),
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  error: {color: 'red', alignSelf: 'stretch', marginTop: scale(16)},
});
