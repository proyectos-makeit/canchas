import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Detalle from './Detalle';
import Cards from '../containers/Cards';

const imageFondo = {
  uri:
    'https://5.allegroimg.com/s512/037293/0afd7c2b4c8eba5b2deee8c88135/Fototapeta-dla-dzieci-pilka-nozna-murawa-stadion',
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    opacity: 0.6,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
    alignSelf: 'center',
    marginTop: '10%',
  },
});

export default function Home() {
  const [value, onChangeText] = React.useState('Buscar');
  const [show, setShowState] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const setVisible = estado => {
    setShowState(estado);
  };

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5e9ceb4d30000062000a800e')
      .then(response => response.json())
      .then(json => setData(json.cards))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={imageFondo} style={styles.image}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Cards data={data} setVisible={setVisible} show={show} />
        )}
      </ImageBackground>
    </View>
  );
}
