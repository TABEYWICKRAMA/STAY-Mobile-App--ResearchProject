import React from "react";
import { TextInput } from "react-native-paper";

interface ITextInputCell {
  label?: string;
}

const TextInputCell = ({ label }: ITextInputCell) => {
  const [text, setText] = React.useState("");
  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={(text) => setText(text)}
      mode="outlined"
      outlineColor="#fffff"
    />
  );
};

export default TextInputCell;
