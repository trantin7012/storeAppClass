import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { navigationWithoutProps } from '../../navigation/rootNavigation'
// lay do rong bang device
const { width: screenWith } = Dimensions.get('window')

export default class GameItem extends Component {
    render() {
        const { gameItem } = this.props
        return (
            //// su dung navigation mac du ko chuyen props cho navigation cho gameItem
            //navigation den DetailScreen va chuyen vao id
            <TouchableWithoutFeedback onPress={()=> navigationWithoutProps('DetailScreen',{id:gameItem.id})}>
                <Image
                    source={{ uri: gameItem.preview[0] }}
                    style={styles.gameBanner} />
                <View style={[styles.gameInfo, { backgroundColor: gameItem.backgroundColor }]}>
                    <Image source={{ uri: gameItem.icon }} style={styles.gameIcon} />
                    <View style={styles.gameInfoContent}>
                        <Text style={[styles.textColor, styles.textTitle]}>{gameItem.title}</Text>
                        <Text style={[styles.textColor, styles.textSub]}>{gameItem.subTitle}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    gameBanner: {
        height: 200,
        width: screenWith
    },
    gameInfo: {
        // nằm đè lên 
        position: 'absolute',
        bottom: -40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        //  margin ngang voi ben ngoai
        marginHorizontal: 20,
        //padding ngang  ben trong
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    gameInfoContent: {
        width: '80%',

    },
    gameIcon: {
        height: 50,
        width: 50,
        borderRadius: 8
    },
    textColor: {
        color: 'white'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '700'
    },
    textSub: {
        fontSize: 14, fontWeight: '400'
    }
})
