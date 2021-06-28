import axios from 'axios';
import React, { Component } from 'react'
import { FlatList, Image, Platform, StyleSheet, TouchableOpacity } from 'react-native'

import IonicIcon from 'react-native-vector-icons/Ionicons'
import { BackgroundView, View, Text } from '../../components'
import { mapIP } from '../../utils/common';

export default class DetailScreen extends Component {
    state = {
        game: {},
    }
    renderStar = () => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            const color = Math.floor(this.state.game.rating) >= i ? '#819ee5' : '#bbb'
            star.push(

                <IonicIcon key={i} name="ios-star" size={16} color={color} />
            )
        }
        return star
    }
    _renderItem = ({ item }) => {
        return <Image source={{ uri: item }} style={styles.carouselItem} />
    }
    componentDidMount() {
        axios({ method: 'GET', url: `http://localhost:3000/games/${this.props.route.params.id}` })
            // gan res.data vua lay duoc gan state game 
            .then(res => {
                let game = {};
                if (Platform.OS === 'android') {
                    game = mapIP(res.data)
                } else {
                    game = res.data
                }
                this.setState({ game })
            })
            .catch((err => console.log(err)))
    }
    render() {
        console.log(this.state.game);
        const { game } = this.state
        return (
            <BackgroundView>
                {/* check dieu kien data da ready chua */}
                {!!game.title &&
                    <Image source={{ uri: game.preview[0] }} style={styles.gameBanner}
                    />}
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <IonicIcon name="close-circle-outline" size={16}/>
                    </TouchableOpacity>    
                <View style={styles.gameContainer}>
                    <View style={styles.infoGame}>
                        <View style={styles.infoGameContainer} row>
                            <Image source={{ uri: game.icon }} style={styles.iconGame} />

                            <View style={styles.infoGameText}>
                                <Text h2>{game.title}</Text>
                                <Text style={styles.infoSubTitleText}>{game.subTitle}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <IonicIcon name="cloud-download" color="#fff" size={30} />
                            </View>
                        </View>
                        
                            <View style={styles.ratingGame} row>
                               
                                <View><Text> {this.renderStar()}{game.rating}</Text></View>
                                <View><Text>{game.age}</Text></View>
                                
                                <View><Text>Game of the days</Text></View>
                                
                            </View>
                            
                        
                    </View>

                    <View style={styles.carouselGame}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            //scool ngang
                            horizontal
                            data={game.preview}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={this._renderItem}
                            // khoang cach item
                            ItemSeparatorComponent={() => (
                                <View style={styles.itemSepatatorCompenent} />
                            )}
                            snapToInterval={370}
                            decelerationRate='fast'
                        />
                    </View>
                    
                    <View style={styles.descriptionGame} />
                </View>

            </BackgroundView>
        )
    }
}
const styles = StyleSheet.create({
    gameBanner: {
        flex: 1 / 3,
        width: '100%',
        height: 350,
        borderRadius: 15
    },
    gameContainer: {
        flex: 2 / 3,
        paddingHorizontal: 20,


    },
    infoGame: {
        flex: 1,


    },
    iconGame: {
        height: 80,
        width: 80,
        borderRadius: 16
    },
    infoGameContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical:20
    },
    infoGameText: {
        width: '60%'
    },
    infoSubTitleText: {
        opacity: 0.5
    },
    iconContainer: {
        backgroundColor: '#819ee5',
        height: 40,
        width: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingGame:{
       marginVertical:20,
     justifyContent:'space-around'
    },

    carouselGame: {
        flex: 1
    },
    carouselItem: {
        width: 350,
        height: 200,
    },
    itemSepatatorCompenent: {
        width: 20
    },
    descriptionGame: {
        flex: 1
    }
})

