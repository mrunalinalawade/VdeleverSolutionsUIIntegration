import { StyleSheet, Text, View ,Image,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGEPATH } from '../assets/Images/Images';

const { width, height } = Dimensions.get('window');

const HeaderComponent = (props) => {
  return (
      <View style={styles.iconstyle}>
          <TouchableOpacity> 
          <Icon name={'reorder-three'} size={28} color={'#FFFFFF'} />
          </TouchableOpacity>
          {props?.logo && 
              <TouchableOpacity onPress={props?.nav}>
                  <Image source={IMAGEPATH.Logo} style={styles.logostyle} />
              </TouchableOpacity>
          }
          {props?.logo2 &&
              <TouchableOpacity onPress={props?.nav2}>
                  <Image source={IMAGEPATH.Dot} style={styles.Dotstyle} />
                  <Image source={IMAGEPATH.Logo} style={styles.logostyle} />
              </TouchableOpacity>
          }
          {props?.bell &&
              <TouchableOpacity style={styles.bellview}>
                  <Image source={IMAGEPATH.Bell} style={styles.bellstyle} />
              </TouchableOpacity>
          }
      </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    iconstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: width * 0.9,
        marginTop:4,
        alignItems:'center'
    },
   
    logostyle: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        marginRight: 5,
    },
    Dotstyle: {
        height: 9,
        width: 9,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: -4,
    },
    bellview: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 35,
        borderRadius: 9,
        alignItems: 'center',
        paddingVertical:6
    },
    bellstyle: {
        width: 22,
        height: 20,
        resizeMode:'cover'
    }
})