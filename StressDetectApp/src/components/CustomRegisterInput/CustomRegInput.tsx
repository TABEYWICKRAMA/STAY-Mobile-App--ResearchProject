import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

import styles from './CustomRegInput.styles';
interface ICustomRegInput {
  control?: any;
  name?: any;
  placeholder?: any;
  secureTextEntry?: any;
  rules?: any;
}

const CustomRegInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: ICustomRegInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={'grey'}
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

export default CustomRegInput;
