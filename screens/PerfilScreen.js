import React from 'react';
import Perfil from './Perfil';

export default function PerfilScreen() {
  return <Perfil />;
}

PerfilScreen.navigationOptions = {
  title: 'Perfil',
  headerStyle: {
    backgroundColor: "#0066cc",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "white"
  }
};
