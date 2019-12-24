import React from "react";
import { StyleSheet } from "react-native";
import { Footer, FooterTab, Text } from 'native-base';
import { ButtonPrimary } from "../components/button";

const FooterBar = () => {
  return (
    <Footer>
      <FooterTab style={componentStyle.footerStyle}>
        <ButtonPrimary text="Célula" />
        <ButtonPrimary text="Relatório" />
        <ButtonPrimary text="Perfil" />
      </FooterTab>
    </Footer>
  )
};

const componentStyle = StyleSheet.create({
  footerStyle: {
    borderTopWidth: 0,
  },
})

export {
  FooterBar,
}