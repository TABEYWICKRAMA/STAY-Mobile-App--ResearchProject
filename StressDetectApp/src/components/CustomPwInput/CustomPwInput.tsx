import React from "react";
import { Text, View, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import styles from "./CustomPwInput.styles";
interface ICustomPwInput {
  control?: any;
  name?: any;
  placeholder?: any;
  secureTextEntry?: any;
  rules?: any;
}

const CustomPwInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: ICustomPwInput) => {
  return (
    <Controller
      control={control}
      name=""
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <View>
              <Text>{name}</Text>
            </View>
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
            <Text style={styles.error}>{error.message || "Error"}</Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomPwInput;
