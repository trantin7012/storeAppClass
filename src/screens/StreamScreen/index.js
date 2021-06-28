import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { BackgroundView } from '../../components'
import globalStyle from '../../theme/globalStyle'

export default class StreamScreen extends Component {
    render() {
        return (
            
            <BackgroundView style={styles.centerItem}>
               
                <Text style={[globalStyle.textColor, globalStyle.h1]}> Stream </Text>
            </BackgroundView>
        )
    }
}

const styles = StyleSheet.create({
    centerItem:{
        justifyContent:'center',
        alignItems:'center'
    }
})
