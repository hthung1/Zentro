import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getImages} from '@/assets/Images';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StoryBar from './StoryBar';
import {HomeProps} from '@/utils/interface';
import TopLocation from './TopLocation';
const Header = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ECEDF3',
          padding: 16,
          borderRadius: 25,
        }}
      >
        <Ionicons
          name="location-sharp"
          size={12.5}
          color={'#234F68'}
        />
        <Text style={styles.textLocation}>Đà Nẵng, Việt Nam</Text>
        <Feather
          name="chevron-down"
          size={12.5}
          color={'#234F68'}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.notification}>
          <Feather
            name="bell"
            size={20}
            color={'#252B5C'}
          />
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 12,
              top: 8,
            }}
          >
            <View
              style={{
                backgroundColor: '#FD5F4A',
                width: 6,
                height: 6,
                borderRadius: 6,
              }}
            />
          </View>
        </TouchableOpacity>
        <Image
          source={getImages().picture_4}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};
const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <StoryBar navigation={navigation} />
      <TopLocation />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  notification: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#8BC83F',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginRight: 13,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 44,
  },
  textLocation: {
    color: '#252B5C',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    marginHorizontal: 8,
  },
});