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
  Controller,
} from 'react-hook-form';
import {scale} from 'react-native-size-matters';
import {useTogglePasswordVisibility} from './TogglePwVisibility';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useTheme from '../../theme/useTheme';
/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  defaultValue?: string; //ADD DEFAULT VALUE TO PROPS
  error?: string;
}

export const TextInput = (props: TextInputProps) => {
  /* GET THE FORMS CONTEXT */
  const formContext = useFormContext();
  /* DECONSTRUCT PROPS */
  const {label, name, rules, defaultValue, error, ...inputProps} = props;

  /* 
        REGISTER THE CONTROLLER WITH VALUES 
        RECEIVED THROUGH PROPS
*/
  // const {field} = useController({name, rules, defaultValue});
  // const {...methods} = formContext;

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
  const {name, label, rules, defaultValue, error, ...inputProps} = props;
  // const {name, label, rules, defaultValue, ...inputProps} = props;
  const formContext = useFormContext();
  const {formState, control} = formContext;
  // const {  } = formContext

  // const {colors} = useTheme;

  const {field, fieldState} = useController({name, rules, defaultValue});
  // const {fieldState} = useController({error});
  const isError = Boolean(error);
  return (
    /* 
     ASSIGN PROPS ONCHANGETEXT, ONBLUR, AND VALUE TO
       CORRESPONDING FIELDS
  */
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <Controller
          name={name}
          control={control}
          render={({
            field: {onChange, value},
            fieldState: {error},
            formState,
          }) => (
            <RNTextInput
              {...inputProps}
              style={styles.input}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              // isError={isError}
              // secureTextEntry={passwordVisibility}
            />
          )}
        />

        {isError && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

const {colors} = useTheme;
const styles = StyleSheet.create({
  label: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    // color: 'gray',
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
  input: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(16),
    backgroundColor: 'white',
    borderColor: 'black',
    color: colors.DarkGreyColor,
    borderWidth: 1,
    height: 49,
    padding: 10,
    borderRadius: 4,
  },
  inputContainer: {
    backgroundColor: 'red',
    borderColor: '#ff00ff',
    height: 49,
    padding: 0,
    borderRadius: 4,
  },
  error: {color: 'red', alignSelf: 'stretch', marginTop: scale(16)},
});
