import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  ImageBackground,
  ImageBackgroundBase,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {IMAGEPATH} from '../assets/Images/Images';
import SerachBarr from '../Components/SerachBarr';
import Category from '../Components/Categories';
import Categories from '../Components/Categories';
import RecommendedCard from '../Components/RecommendedCard';
import HeaderComponent from '../Components/HeaderComponent';

const {width, height} = Dimensions.get('window');

const Homescreen = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = text => {
    setSearchQuery(text);
  };


  const sectors = [
    { id: '1', title: 'Home Services', image: IMAGEPATH.Sector1 },
    { id: '2', title: 'Healthcare', image: IMAGEPATH.Sector2 },
    { id: '3', title: 'Home Services', image: IMAGEPATH.Sector1 },
  ]
  
  return (
    
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="light-content" // Options: 'default', 'light-content', 'dark-content'
        backgroundColor="#9766FF" // For Android
      />
      <LinearGradient colors={['#9766FF', '#F7F3FF']} style={styles.header}>
      
        <HeaderComponent logo2 nav2={() => { props?.navigation?.navigate('HomeScreenmain')}} />
      </LinearGradient>
      <View style={styles.welcomboxstyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{padding: 18}}>
            <Text style={styles.wlctxt}>Welcome,</Text>
            <Text style={styles.dreamtxt}>Find your{'\n'}dream Sector!</Text>
          </View>
          <Image source={IMAGEPATH.Circles} style={styles.Circletyle} />
        </View>
        <View style={{marginLeft: 15}}>
          <SerachBarr value={searchQuery} onChange={handleSearchChange} iconcolor={'#FF8A00'}
            placeholdercolor={'#959595'} backgroundColor={'#FFFFFF'} width={width * 0.6} inputwidth={width*0.4}
           />
        </View>
      </View>
      <View
        style={{
          marginTop: -6,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 30,
        }}>
        <View style={styles.subhead}>
          <Text style={styles.exporetxt}>Explore Categories</Text>
          <TouchableOpacity>
            <EntypoIcon name={'dots-three-horizontal'} size={22} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.74,
            justifyContent: 'space-between',
            marginLeft: 15,
          }}>
          <Categories
            text={'Construction'}
            source={IMAGEPATH.Construction}
            gradientcolor={['#FFFFFF', '#CBE0FF']}
            bodercolor={'#CBE0FF'}
            width={width * 0.34}
          />
          <Categories
            text={'Entertainment'}
            source={IMAGEPATH.Entertainment}
            gradientcolor={['#FFFFFF', '#FFE9BE']}
            bodercolor={'#FFE9BE'}
            width={width * 0.37}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.9,
            justifyContent: 'space-between',
            marginLeft: 15,
            marginTop: 10,
          }}>
          <Categories
            text={'Pet Care'}
            source={IMAGEPATH.Pet}
            gradientcolor={['#FFFFFF', '#FFB0DD']}
            bodercolor={'#FFB0DD'}
            width={width * 0.29}
            nav3={() =>{props?.navigation.navigate('HomeScreenmain')}}
          />
          <Categories
            text={'Home Care'}
            source={IMAGEPATH.Home}
            gradientcolor={['#FFFFFF', '#C0FCF6']}
            bodercolor={'#00FFE6'}
            width={width * 0.32}
          />
          <Categories
            text={'Events'}
            source={IMAGEPATH.Event}
            gradientcolor={['#FFFFFF', '#FFC8AB']}
            bodercolor={'#FFC8AB'}
            width={width * 0.25}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.73,
            justifyContent: 'space-between',
            marginLeft: 15,
            marginTop: 10,
          }}>
          <Categories
            text={'Healthcare'}
            source={IMAGEPATH.Health}
            gradientcolor={['#FFFFFF', '#CFCFFF']}
            bodercolor={'#CFCFFF'}
            width={width * 0.32}
          />
        </View>

        <View style={styles.subhead}>
          <Text style={styles.exporetxt}>Popular Sectors</Text>
          <EntypoIcon name={'dots-three-horizontal'} size={22} color={'#000'} />
        </View>

        <FlatList
          horizontal={true}
          data={sectors}
          renderItem={({ item }) => (
            <View>
              <ImageBackground
                source={item?.image}
                style={[styles.image]}
                imageStyle={{ borderRadius: 30 }}>
                <Text style={styles.title}>{item?.title}</Text>
              </ImageBackground>
            </View>
          )}
          keyExtractor={item => item.id}
         
          contentContainerStyle={styles.flatList1}
        />


        <View style={styles.subhead}>
          <Text style={styles.exporetxt}>Recommended for you</Text>
          <TouchableOpacity>
            <EntypoIcon name={'dots-three-horizontal'} size={22} color={'#000'} />
          </TouchableOpacity>
        </View>
        <RecommendedCard />
        <View style={{marginTop:15}}>

        <RecommendedCard/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginBottom:10
  },
  header: {
    padding: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: height * 0.2,
  },
  iconstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Circletyle: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginTop: -11,
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
  welcomboxstyle: {
    backgroundColor: '#EDFFCE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: width * 0.8,
    marginTop: -80,
    paddingBottom: 24,
  },

  wlctxt: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 18,
  },
  dreamtxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 22,
  },
  subhead: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 15,
    marginTop:8
  },
  exporetxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  bgimgstyle: {
    height: 100,
    width: 100,
  },
  title: { color: '#000', fontSize: 18, fontWeight: '800', margin: 15,width:width*0.3 },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
    alignItems: 'center',
    marginHorizontal:7
  },
  flatList1: {
    paddingHorizontal: 5,
 
  },
});

export default Homescreen;
