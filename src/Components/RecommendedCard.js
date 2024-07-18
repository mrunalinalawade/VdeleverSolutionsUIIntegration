import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGEPATH } from '../assets/Images/Images';


const { width, height } = Dimensions.get('window');

const RecommendedCard = (props) => {

  return (
      <View style={styles.boxstyle}>
          <Image source={IMAGEPATH.Topcorner} style={styles.topimg} />
          <View style={{marginTop:-30,flexDirection:'row',alignItems:'center'}}>
              <View style={styles.innerbox}>
                  
              </View>
              <View>
                  
              <Text style={styles.paratxt}>Now share the Construction{'\n'} Sectors with your anyone and{ '\n'}can save it as bookmark</Text>
                  <View style={{ flexDirection: 'row', width: width * 0.55, justifyContent: 'space-between', marginTop: 5 }}>
                  <Text style={styles.updtaetxt}>Updated  |  06:30 AM</Text> 
                  <TouchableOpacity style={styles.btnstyle}>
                      <Text style={styles.exploretxt}>Explore</Text>
                  </TouchableOpacity>
          </View>
              </View>
          </View>
          <Image source={IMAGEPATH.Bottomcorner} style={styles.bottmimg} />
    </View>
  )
}

export default RecommendedCard

const styles = StyleSheet.create({
    boxstyle: {
        backgroundColor: '#F6F4FF',
        borderRadius: 12,
        width: width * 0.9,
        alignSelf: 'center',
    
      
    },
    topimg: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        alignSelf: 'flex-end',
        borderTopRightRadius:12
    },
    bottmimg: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 12,
        marginTop:-14
    },
    innerbox: {
        backgroundColor: '#FFC5C5',
        borderRadius: 10,
        width: width * 0.22,
        height: height * 0.11,
        marginHorizontal: 15,
        // marginBottom:12

    },
    paratxt: {
        color: '#060047',
        fontSize: 12,
        fontWeight: '800',
        lineHeight:18
    },
    updtaetxt: {
        color: '#060047',
        fontSize: 10,
        fontWeight: '400',
      
       
    },
    btnstyle: {
        backgroundColor: '#995BFF',
        borderRadius: 100,
        width: width * 0.15,
        alignItems: 'center',
        paddingVertical:4
    },
    exploretxt: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: '800',
      
    }
})