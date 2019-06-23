import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker'
import { Button } from "react-native-elements"


export default class Agendamento extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: "2019-06-22"
        }
    }




    render() {
        return (
            <ImageBackground source={require("../assets/images/background.png")} style={{ flex: 1, justifyContent: "space-around", paddingBottom: 20 }} >

                    <Text style={{ fontWeight: "bold", color: "black", marginTop: 80, fontSize: 18, textAlign: "center" }} >{this.props.vacina}</Text>

                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }} >

                    <Text style={{ fontWeight: "bold", color: "#0066FF", marginBottom: 10, fontSize: 16 }} >Selecione a data:</Text>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="2019-06-22"
                        maxDate="2019-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Component: {
        flex: 1,
    }
})

