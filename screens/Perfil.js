import React from 'react';
import { StyleSheet, View } from 'react-native'
import { ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


export default class Perfil extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listData: [
                { title: "Vacinas", subtitle: "minhas vacinas", icon: "ios-medkit" },
                { title: "Pontuação", subtitle: "meus pontos", icon: "ios-medal" },
            ]
        }
    }

    renderList() {
        return (
            this.state.listData.map((item, index) => {
                return (
                    <ListItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        chevron
                        leftIcon={<Ionicons size={25} color="gray" name={item.icon} />}
                        onPress={() => false}
                    />
                )
            })
        )
    }

    render() {
        return (
            <View style={styles.Component} >
                {this.renderList()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Component: {
        flex: 1,
    }
})

