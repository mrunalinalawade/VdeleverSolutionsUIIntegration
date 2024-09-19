import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../Components/HeaderComponent';
import {IMAGEPATH} from '../assets/Images/Images';
import SerachBarr from '../Components/SerachBarr';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const {width, height} = Dimensions.get('window');

const HomeScreenmain = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = text => {
    setSearchQuery(text);
  };
  
  const Data = [
    {id: '1', title: 'Pooja Jain',title1:'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.', image: IMAGEPATH.Girl1},
    {id: '2', title: 'Pooja Jain',title1:'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.', image: IMAGEPATH.Priti},
    {id: '3', title: 'Pooja Jain',title1:'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',image: IMAGEPATH.Girl1},
    {id: '3', title: 'Pooja Jain',title1:'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',image: IMAGEPATH.Priti},
  ];

  const services = [
    {
      id: '1',
      title: 'Pet Grooming',
      image: IMAGEPATH.PetGrooming,
      width: 155,
      height: 190,
    },
    {
      id: '2',
      title: 'Pet Walking',
      image: IMAGEPATH.Petwalking,
      width: 155,
      height: 135,
    },
    {
      id: '3',
      title: 'Pet Dating',
      image: IMAGEPATH.Petdating,
      width: 155,
      height: 135,
    },
    {
      id: '4',
      title: 'Pet Training',
      image: IMAGEPATH.Petrainig,
      width: 155,
      height: 190,
    },
    {
      id: '5',
      title: 'Pet Adoption',
      image: IMAGEPATH.PetAdoption,
      width: 155,
      height: 190,
    },
  ];

  const ServiceItem = ({title, image, height, width}) => (
    <View style={styles.item}>
      {/* <ImageBackground
        source={image}
        // style={[styles.image]}
        imageStyle={{borderRadius: 30}}
        >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground> */}
      <ImageBackground
        source={image}
        style={[styles.image, {height: height, width: width}]}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#FFB5B1" />
      <LinearGradient colors={['#FFB5B1', '#CD7ED9']} style={styles.header}>
        <HeaderComponent
          menu1
          logo
          bell
          nav={() => {
            props?.navigation.navigate('BottomTabbar');
          }}
        />
        <View style={styles.viewstyle1}>
          <View style={{marginLeft: 15}}>
            <Text style={styles.txt1}>Hello,</Text>
            <Text style={styles.txt2}>Fancy for a wash today!</Text>
          </View>
          <Image source={IMAGEPATH.Paw1} style={styles.paw1style} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={IMAGEPATH.Paw2} style={styles.paw1style2} />
          <View style={{flexDirection: 'row', right: 12}}>
            <Image source={IMAGEPATH.Dog1} style={styles.dogstyle1} />
            <Image source={IMAGEPATH.Dog2} style={styles.dogstyle2} />
            <Image source={IMAGEPATH.Dog3} style={styles.dogstyle3} />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.Outerview}>
        <View style={{marginTop: height * 0.04}}>
          <SerachBarr
            value={searchQuery}
            onChange={handleSearchChange}
            backgroundColor={'#FFEDF2'}
            filter
            width={width * 0.9}
            inputwidth={width * 0.69}
            placeholdercolor={'#FF6694'}
            iconcolor={'#FF6694'}
            inputback={'#FFEDF2'}
          />
        </View>

        <View
          style={{
            flex: 1,
            width: width * 0.9,
            borderRadius: 30,
            marginTop: height * 0.04,
          }}>
          <SwiperFlatList
            autoplay
            paginationDefaultColor={'#FFD7E5'}
            paginationActiveColor={'#FF6694'}
            // autoplayDelay={2}
            // autoplayLoop
            index={1}
            showPagination
            data={[1, 2, 3]}
            renderItem={({item}) => (
              <View style={{}}>
                <Image source={IMAGEPATH.Swiperimg} style={styles.Swipertyle} />
              </View>
            )}
          />
        </View>

        <View style={styles.subhead}>
          <Text style={styles.exporetxt}>Popular Services</Text>
          <TouchableOpacity>
            <EntypoIcon
              name={'dots-three-horizontal'}
              size={22}
              color={'#000'}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={services}
          renderItem={({item}) => (
            <ServiceItem
              title={item.title}
              image={item.image}
              width={item.width}
              height={item.height}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatList1}
        />

        <View style={[styles.subhead, {marginTop: 0}]}>
          <Text style={styles.exporetxt}>Service Providers</Text>
          <TouchableOpacity>
            <EntypoIcon
              name={'dots-three-horizontal'}
              size={22}
              color={'#000'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.flatlistview}>
          <FlatList
            data={[1, 2]}
            renderItem={({item}) => (
              <View style={styles.boxstyle}>
                <Image source={IMAGEPATH.Topcorner2} style={styles.topimg} />
                <View style={{marginTop: -30, flexDirection: 'row'}}>
                  <Image source={IMAGEPATH.Profile1} style={styles.pimg} />
                  <View style={{paddingHorizontal: 10}}>
                    <Text style={styles.nametxt}>Rohit Singhania</Text>
                    <Text style={styles.paratext}>
                      Lorem ipsum dolor sit amet consectetur. Eget commodo
                      ipsum.
                    </Text>
                    <TouchableOpacity style={styles.btnstyle}>
                      <Text style={styles.exploretxt}>Know More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  source={IMAGEPATH.Bottomcorner2}
                  style={styles.bottmimg}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.subhead}>
          <Text style={styles.exporetxt}>Rating</Text>
          <TouchableOpacity>
            <EntypoIcon
              name={'dots-three-horizontal'}
              size={22}
              color={'#000'}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.subhead, {marginTop: 1}]}>
          <Text style={styles.reviewtxt}>13 Reviews</Text>
          <TouchableOpacity style={styles.review}>
            <Text style={styles.reviewtxt}>WRITE a REVIEW</Text>
            <FontAwesome6 name={'pen-to-square'} size={16} color={'#FF6694'} />
          </TouchableOpacity>
        </View>
        <View style={styles.flatlistview}>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <View style={styles.mainview}>
                <Image
                  source={IMAGEPATH.linev}
                  style={{
                    width: 80,
                    height: 120,
                    borderBottomLeftRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                />
                <View style={{padding: 15, position: 'absolute'}}>
                  <Text style={styles.nametxt}>{item?.title}</Text>
                  <View style={styles.bonestyle}>
                    <Image source={IMAGEPATH.Bone} style={styles.Bonestyle} />
                    <Image source={IMAGEPATH.Bone} style={styles.Bonestyle} />
                    <Image source={IMAGEPATH.Bone} style={styles.Bonestyle} />
                    <Image source={IMAGEPATH.Bone} style={styles.Bonestyle} />
                    <Image
                      source={IMAGEPATH.WhiteBone}
                      style={styles.Bonestyle}
                    />
                  </View>
                  <Text style={styles.paratext}>
                   {item?.title1}
                  </Text>
                </View>
                <Image source={item?.image} style={styles.girlstyle} />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreenmain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginBottom: 10,
  },
  header: {
    paddingTop: 10,
    height: height * 0.3,
  },
  viewstyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  txt1: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  txt2: {
    fontWeight: '500',
    color: '#000',
    fontSize: 16,
    marginTop: 6,
  },
  paw1style: {
    resizeMode: 'cover',
    width: 40,
    height: 40,
  },
  paw1style2: {
    resizeMode: 'cover',
    width: 40,
    height: 55,
    margin: 15,
  },
  dogstyle1: {
    resizeMode: 'cover',
    width: 50,
    height: 70,
    marginTop: 16,
  },
  dogstyle2: {
    resizeMode: 'cover',
    width: 58,
    height: 70,
    marginTop: 18,
  },
  dogstyle3: {
    resizeMode: 'cover',
    width: 60,
    height: 70,
    marginTop: 16,
  },
  Outerview: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    alignItems: 'center',
  },
  subhead: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 15,
    marginTop: 8,
  },
  exporetxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  reviewtxt: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF6694',
  },
  review: {
    flexDirection: 'row',
    width: width * 0.33,
    justifyContent: 'space-between',
  },
  mainview: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FFCCD2',
    width: width * 0.9,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlistview: {
    flex: 1,
    alignItems: 'center',
  },
  girlstyle: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  nametxt: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  paratext: {
    fontSize: 10,
    fontWeight: '400',
    color: '#000',
    width: width * 0.53,
    marginTop: 8,
  },
  Bonestyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  Swipertyle: {
    width: width * 0.9,
    height: 150,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 15,
  },
  bonestyle: {
    flexDirection: 'row',
    width: width * 0.4,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  boxstyle: {
    backgroundColor: '#FFE7EA',
    borderRadius: 15,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 10,
  },
  topimg: {
    width: 70,
    height: 58,
    resizeMode: 'cover',
    alignSelf: 'flex-end',
    borderTopRightRadius: 12,
  },
  pimg: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginHorizontal: 10,
    marginTop: 5,
  },
  btnstyle: {
    backgroundColor: '#CF76DD',
    borderRadius: 4,
    width: width * 0.24,
    alignItems: 'center',
    marginTop: '6%',
    paddingVertical: 6,
  },
  exploretxt: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
  },
  bottmimg: {
    width: 75,
    height: 78,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 12,
    marginTop: -40,
  },
  title: {color: '#000', fontSize: 15, fontWeight: '500', margin: 18},
  image: {
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flatList1: {
    paddingVertical: 10,
  },
  item: {
   
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 6,
    alignItems: 'center'
    
  },
});
