import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import App from '../screens/AppScreen'
import Vacinas from '../screens/Vacinas'
import HealthGame from '../screens/HealthGame'
import Agendamento from '../screens/Agendamento'

export default Routes = () => (
  <Router renderBackButton={false} backButtonBarStyle={{ color: "#fff" }} navigationBarStyle={{ backgroundColor: "#0066cc" }} titleStyle={{ color: "white" }}  >
    <Stack key="root">
      <Scene key="app" initial component={App} title="Home" />
      <Scene key="vacinas" barButtonTextStyle={{ color: "#fff" }} component={Vacinas} title="Vacinas" />
      <Scene key="health" barButtonTextStyle={{ color: "#fff" }} component={HealthGame} title="Health Game" />
      <Scene key="agendamento" barButtonTextStyle={{ color: "#fff" }} component={Agendamento} title="Agendamento" />
    </Stack>
  </Router>
);