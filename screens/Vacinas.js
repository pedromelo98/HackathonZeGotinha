import React, { Component } from 'react'
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { HighlightableText, SearchList } from '@unpourtous/react-native-search-list'
import { Actions } from 'react-native-router-flux'

import { dataSource } from '../consts/consts'


export default class Vacinas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource,
            renderDataList: true,
            rowHeight: 40
        }
    }

    // custom render row
    renderRow(item, sectionID, rowID, highlightRowFunc, isSearching) {
        return (
            <TouchableOpacity onPress={() => Actions.agendamento({vacina: item.searchStr })}>
                <View key={rowID} style={{ flex: 1, marginLeft: 20, height: this.state.rowHeight, justifyContent: 'center' }}>
                    {/* use `HighlightableText` to highlight the search result */}
                    <HighlightableText
                        matcher={item.matcher}
                        text={item.searchStr}
                        textColor={'#000'}
                        hightlightTextColor={'#0069c0'}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    // render empty view when datasource is empty
    renderEmpty() {
        return (
            <View style={styles.emptyDataSource}>
                <Text style={{ color: '#979797', fontSize: 18, paddingTop: 20 }}> No Content </Text>
            </View>
        )
    }

    // render empty result view when search result is empty
    renderEmptyResult(searchStr) {
        return (
            <View style={styles.emptySearchResult}>
                <Text style={{ color: '#979797', fontSize: 18, paddingTop: 20 }}> No Result For <Text
                    style={{ color: '#171a23', fontSize: 18 }}>{searchStr}</Text></Text>
                <Text style={{ color: '#979797', fontSize: 18, alignItems: 'center', paddingTop: 10 }}>Please search again</Text>
            </View>
        )
    }

    render() {
        if (this.state.renderDataList) {
            return (
                <View style={styles.container}>
                    <StatusBar backgroundColor='#0066cc' barStyle='light-content' />
                    <SearchList
                        data={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        renderEmptyResult={this.renderEmptyResult.bind(this)}
                        renderBackButton={() => null}
                        renderEmpty={this.renderEmpty.bind(this)}

                        rowHeight={this.state.rowHeight}

                        toolbarBackgroundColor={'#2196f3'}
                        title='Buscar vacinas'
                        cancelTitle='Cancelar'
                        onClickBack={() => { }}

                        searchListBackgroundColor={'#2196f3'}

                        searchBarToggleDuration={300}

                        searchInputBackgroundColor={'#0069c0'}
                        searchInputBackgroundColorActive={'#6ec6ff'}
                        searchInputPlaceholderColor={'#FFF'}
                        searchInputTextColor={'#FFF'}
                        searchInputTextColorActive={'#000'}
                        searchInputPlaceholder='Search'
                        sectionIndexTextColor={'#6ec6ff'}
                        searchBarBackgroundColor={'#2196f3'}
                    />
                </View>
            )
        }
        return (
            <View />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    emptyDataSource: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 50
    },
    emptySearchResult: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 50
    }
})