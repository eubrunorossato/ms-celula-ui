import React from "react";
import { StyleSheet } from "react-native"
import { Button, Text } from 'native-base';

const ButtonPrimary = (props) => {
  return (
    <Button primary style={componentStyle.colorStyle}>
      <Text style={componentStyle.textStyle}>{props.text}</Text>
    </Button>
  )
};

const componentStyle = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "500",
  },
  colorStyle: {
    backgroundColor: "#1e1e1e",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  }
});

export {
  ButtonPrimary,
}