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

/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  defaultValue?: string; //ADD DEFAULT VALUE TO PROPS
}

export const TextInputOutlined = (props: TextInputProps) => {
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
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    color: 'gray',
    fontSize: scale(16),
    marginVertical: 4,
    marginBottom: 0,
    marginTop: 0,
    textTransform: 'uppercase',
    letterSpacing: 1.0,
    //backgroundColor: 'red',
    height: 50,
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: scale(0),
    height: scale(0),
    paddingHorizontal: 3,
    backgroundColor: 'yellow',
    // height: 50,
  },
  input: {
    color: 'gray',
    // fontFamily: 'Bebas Neue Pro',
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(16),
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 0,
  },
  inputContainer: {
    //backgroundColor: 'red',
    borderColor: '#000',
    height: 42,
    padding: 0,
    marginTop: moderateScale(58),
    borderRadius: 0,
    borderWidth: 1,
  },
  error: {color: 'red', alignSelf: 'stretch', marginTop: scale(16)},
});
