import React from 'react';
import {Text, View, TextInput, NativeSyntheticEvent} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';

import styles from './CustomLoginInput.styles';
interface ICustomLoginInput {
  id?: any;
  control?: any;
  name?: any;
  placeholder?: any;
  secureTextEntry?: any;
  rules?: any;
  onTextInputChange?: any;
  valuee?: string;
}

const CustomLoginInput = ({
  id,
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  onTextInputChange,
  valuee,
}: ICustomLoginInput) => {
  const handleChange = (text: string) => {
    onTextInputChange(text);
  };

  const formContext = useFormContext();
  const {...methods} = formContext;

  return (
    <Controller
      control={control}
      name=""
      rules={rules}
      render={({
        field: {value, onChange, onBlur, ref, ...field},
        fieldState: {error},
      }) => (
        <View>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#757474'},
            ]}>
            <View>
              <Text style={styles.inputText}>{name}</Text>
            </View>
            <TextInput
              // inputRef={ref}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              defaultValue={valuee}
            />
          </View>
          {error && (
            <Text style={styles.error}>{error.message || 'Error'}</Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomLoginInput;
