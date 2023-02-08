import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import {freeGames, paidGames, sliderData} from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <View style={styles.homescreenContainer}>
      <ScrollView style={{padding: 20}}>
        <View style={styles.homescreenheaderText}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Hello Moospspcxz
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require('../assets/images/userprofile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
          }}>
          <Icon
            name="search"
            size={20}
            color={'#C6C6C6'}
            style={{marginRight: 5, marginTop: 15}}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>see all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() => navigation.navigate('GameDetails', {
                title: item.title,
                id: item.id})}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() => navigation.navigate('GameDetails', {
                title: item.title,
                id: item.id})}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homescreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homescreenheaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
