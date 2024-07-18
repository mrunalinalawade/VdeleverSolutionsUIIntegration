import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { IMAGEPATH } from '../assets/Images/Images';
const { width, height } = Dimensions.get('window');


const Categories = (props) => {

    const [Touch, setTouch] = useState(false)
    return (
        <TouchableOpacity onPress={props?.nav3}>
            <LinearGradient colors={props.gradientcolor} start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} style={[styles.boxstyle, { borderWidth:1, borderColor: props.bodercolor,width:props.width }]}>

                <Image source={props.source} style={styles.imgstyle} />
                <Text style={styles.txtstyle}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Categories

const styles = StyleSheet.create({
    boxstyle: {
        width: width * 0.33,
        padding: 12,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtstyle: {
        color: '#333333',
        fontSize: 12,
        fontWeight: '500'
    },
    imgstyle: {
        resizeMode: 'contain',
        width: 20,
        height: 20
    }
})