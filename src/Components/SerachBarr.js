import { StyleSheet, Text, View,TextInput,Dimensions, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { IMAGEPATH } from '../assets/Images/Images';

const { width, height } = Dimensions.get('window');

const SerachBarr = (props) => {
    
  return (
    <View style={[styles.searchbox, { backgroundColor: props?.backgroundColor, width: props?.width }]}>
          <Icon name={'search'} size={22} color={props?.iconcolor} />
           <TextInput
        style={[styles.input,{width:props?.inputwidth,backgroundColor:props?.inputback}]}
        onChange={props.onChange}
        value={props.value}
        placeholder="What are you looking for?"
       placeholderTextColor={props?.placeholdercolor}
      />
      {props?.filter &&
        <Image source={IMAGEPATH.Filter} style={styles.filterstyle} />
      }
        </View>
  )
}

export default SerachBarr

const styles = StyleSheet.create({
    searchbox: {
        backgroundColor: '#FFF',
        width: width * 0.6,
        
        flexDirection: 'row',
    borderRadius: 12,
    alignItems: 'center',
        padding:8
    },
    input: {
      backgroundColor: '#FFF',
      fontSize: 12,
      paddingVertical: 2,
      width: width * 0.41,
      marginLeft: 8,
       color:'#000'
  },
  filterstyle: {
    width: 22,
    height: 22,
   
  }
})