import React from 'react';
import {Text, Modal, Button, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    borderRadius: 15,
  },
});

export default function Detalle(props) {
  return (
    <Modal animationType="slide" visible={props.modalVisible}>
      <Text>{props.data.nombre}</Text>
      <Image style={styles.image} source={{uri: props.data.imagen}} />
      <Button
        title="Cerrar"
        onPress={() => {
          props.visible(false);
        }}
      />
    </Modal>
  );
}
