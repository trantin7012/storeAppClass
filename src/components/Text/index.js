import React from 'react'
import { Text as TextRN, StyleSheet } from 'react-native'
import globalStyle from '../../theme/globalStyle'


const Text = ({children,h2,style}) => {
    if (h2){
         return (
         <TextRN style={[styles.defaultStyle,styles.h2, styles]}>{children}</TextRN>
         )
    }
   return <TextRN style={[styles.defaultStyle,style]}>{children}</TextRN>
  
}
const styles = StyleSheet.create({
    defaultStyle:{
        color:'#fff'
    },
    h2:{
        ...globalStyle.h2,
        ...globalStyle.fontW700
    }
})

export default Text