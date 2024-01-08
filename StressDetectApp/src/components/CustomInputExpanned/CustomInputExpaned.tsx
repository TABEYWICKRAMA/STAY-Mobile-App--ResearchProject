import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

import styles from './CustomInputExpaned.styles';
interface ICustomInputExpaned {
  control?: any;
  name?: any;
  placeholder?: any;
  secureTextEntry?: any;
  rules?: any;
}

const CustomInputExpaned = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: ICustomInputExpaned) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View>
          <View
            style={[
              styles.container,
              { borderColor: error ? 'red' : '#757474' },
            ]}>
            {/* <View>
              <Text style={styles.inputText}>{name}</Text>
            </View> */}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
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

export default CustomInputExpaned;
