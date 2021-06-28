import axios from 'axios'
import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, Image, Dimensions, FlatList } from 'react-native'
import { BackgroundView } from '../../components'

import GameItem from './GameItem'
import Header from './Header'
//Dimension lay kich thuoc be ngang width theo man hinh
const { width: screenWith } = Dimensions.get('window')

export default class HomeScreen extends Component {
    state = {
        games: [],
        gameItem: {}
    }
    // boc tach item chuyen vao component GameItem qua props
    // item bóc tách mac định trong mảng games và chuyền props vào gameItem trong component GameItem
    _renderItem = ({ item }) => <GameItem gameItem={item} />

    componentDidMount() {

        axios({ method: `GET`, url: 'http://localhost:3000/games' })
            .then(res => {
                let games = res.data;
                if (Platform.OS === 'android') {
                    games = res.data.map(item => {
                        const preview = item.preview.map(pItem =>
                            pItem.replace('localhost', '10.2.2.2'))
                        return {
                            ...item,
                            preview,
                            icon: item.icon.replace('localhost', '10.2.2.2')
                        }
                    })
                }
                this.setState({ games })
            })
            .catch(err => console.log(err))
    }
    render() {
        // console.log(gameItem);
        // boc tach gameitem trong state du lieu lay dc
        const { games } = this.state
        return (
            <BackgroundView >
                <Header/>
                {/* // dung lengt xem co data ko */}
                {!!games.length && (
                    <FlatList
                        data={games}
                        renderItem={this._renderItem}
                        contentContainerStyle={styles.contentListGame}
                        //tach các item thành các component 
                        ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
                    />
                    // chuyen vao props gameItem 
                    //    <GameItem gameItem={gameItem}/>
                )}
            </BackgroundView>
        )
    }
}
const styles = StyleSheet.create({
    
    ItemSeparator: {
        height: 100
    },
    contentListGame: {

        paddingBottom: 150
    }


})
