import React from 'react';
import Vacinas from './Vacinas'

export default function PontosScreen() {
  return (
      <Vacinas />
  );
}

PontosScreen.navigationOptions = {
  title: 'Agendamento',
  headerStyle: {
    backgroundColor: "#0066cc",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "white"
  }
};

