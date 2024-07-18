import { StyleSheet, Text, View ,Image,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGEPATH } from '../assets/Images/Images';

const { width, height } = Dimensions.get('window');

const HeaderComponent = (props) => {
  return (
      <View style={styles.iconstyle}>
          <TouchableOpacity> 
          <Icon name={'reorder-three'} size={22} color={'#FFFFFF'} />
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
        marginTop:12
    },
   
    logostyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 5,
    },
    Dotstyle: {
        height: 8,
        width: 8,
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
        width: 20,
        height: 20,
        resizeMode:'cover'
    }
})