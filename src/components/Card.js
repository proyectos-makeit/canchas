import React, {useState} from 'react';
import {View, Image, TouchableHighlight, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginVertical: '5%',
    marginHorizontal: '8.5%',
    opacity: 0.6,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 8,
  },
  baseText: {
    fontFamily: 'Cochin',
    alignSelf: 'flex-start',
    position: 'absolute',
    marginLeft: '48%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 15,
  },
});

export default function Card(props) {
  const bodyText = useState('This is not really a bird nest.');
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {
        props.visible(true);
        props.setCard(props.data);
      }}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: props.data.imagen}} />
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {props.data.nombre}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </View>
    </TouchableHighlight>
  );
}
