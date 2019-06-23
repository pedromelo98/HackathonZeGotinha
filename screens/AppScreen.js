import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux'

import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Card, ListItem, Avatar, Image } from 'react-native-elements';

import { MapView } from 'expo'


const listData = [
  { title: "Número de portadores do vírus febre amarela é maior este ano", subtitle: "18/06/2019", img: require("../assets/images/mosquito-picando.jpg") },
  { title: "As crianças da zika esquecidas em Alagoas, entre o futuro incerto e o medo da pneumonia", subtitle: "13/06/2019", img: require("../assets/images/zikavirus.jpeg") },
]

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props)
    this.state = {
      renderHome: true,
      renderMap: false
    }
  }

  render() {
    if (this.state.renderHome) {
      return (
        <View style={styles.container}>
          <Image
            source={require("../assets/images/teste.png")}
          />
          <ScrollView
            horizontal
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            {renderCard("Vacina e autismo?", require("../assets/images/mito.jpg"))}
            {renderCard("Zika Virus", require("../assets/images/zika-virus.jpg"))}
            {renderCard("Fake news", require("../assets/images/fake-news.jpeg"))}

          </ScrollView>



          <View style={styles.tabBarInfoContainer}>
            <Image
              source={require("../assets/images/footer.png")}
            />

            <View style={styles.bottomContainer} >
              <TouchableOpacity onPress={() => this.setState({ renderHome: false, renderMap: true })} >
                <Text style={styles.userName} >Serviços mais{"\n"}próximos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.vacinas()} >
                <Text style={styles.userName} >Vacinas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => false} >
                <Text style={styles.userName} >Health game</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    if (this.state.renderMap) {
      return (
        <View style={styles.container} >
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -15.78376717,
              longitude: -47.90011168,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MapView.Marker
              coordinate={{ latitude: -15.78376717, longitude: -47.90011168 }}
              title="Minha localização"
              description="Melhor feira de tecnologia da América Latina"
            />
          </MapView>
          <TouchableOpacity onPress={() => this.setState({ renderHome: true, renderMap: false })} style={{ position: "absolute", top: 40, left: 20, flexDirection: "row" }} >
            <Ionicons size={25} color="#0066cc" name={"md-arrow-round-back"} />
            <Text style={{ color: "#0066cc", fontWeight: "bold", fontSize: 20 }} >Voltar</Text>
          </TouchableOpacity>
        </View >
      )
    }

  }
}

const ListItems = () => {
  return (
    listData.map((item, index) => {
      return (
        <ListItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          chevron
          onPress={() => false}
          leftAvatar={{ source: item.img }}
        />
      )
    })
  )
}

const renderCard = (title, image, text) => {
  return (
    <Card
      containerStyle={styles.card}
      title={title}
      image={image}>
      <Text>
        {text}
      </Text>
    </Card>
  )
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textDestaques: {
    padding: 10
  },
  card: {
    padding: 10,
    width: 280,
    justifyContent: "space-between"
  },
  knowMore: {
    color: "#4dc3ff",
    fontSize: 20
  },
  topContainer: {
    flex: 1,
  },
  bottomUserContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#0066FF"
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 30,

    justifyContent: 'space-around',
    backgroundColor: "#0066FF"
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentHorizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  contentContainer: {
    paddingBottom: 200,
  },
  codeHighlightText: {
    flexDirection: "row",
    justifyContent: "space-around",
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fbfbfb',

  },
  userName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  userLocation: {
    paddingLeft: 5,
    color: "white",
  },
  bottomButtons: {
    flex: 1,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
