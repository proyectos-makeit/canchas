import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import Detalle from '../components/Detalle';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: '10%',
    marginBottom: '5%',
    alignSelf: 'center',
    width: '100%',
  },
});

export default function Cards(props) {
  const [card, setCardState] = useState([]);
  const setCard = cardDetalle => {
    setCardState(cardDetalle);
  };
  return (
    <View>
      <ScrollView style={styles.container}>
        {props.data.map(data => (
          <Card
            data={data}
            visible={props.setVisible}
            showCard={props.show}
            setCard={setCard}
          />
        ))}
      </ScrollView>
      <Detalle
        data={card}
        modalVisible={props.show}
        visible={props.setVisible}
      />
    </View>
  );
}
