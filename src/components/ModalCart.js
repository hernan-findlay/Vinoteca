import React from 'react';
import { Modal, StyleSheet, Text, View, Button } from 'react-native';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const ConfirmationModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onCancel();
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Confirma la compra?</Text>
          <View style={styles.modalButtons}>
            <Button onPress={onConfirm} title="Confirmar" />
            <Button onPress={onCancel} title="Cancelar" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalContent: {
    backgroundColor: colors.tabback,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily:fonts.ProtestRevolution
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default ConfirmationModal;
