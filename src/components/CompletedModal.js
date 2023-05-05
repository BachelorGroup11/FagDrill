import { Modal, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styles } from '../styles/components/OverviewModalStyle';

export const CompletedModal = ({ isVisible, setIsVisible, users }) => {
  return (
    <ScrollView style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerview}>
              <Text style={styles.modalHeader}>Completed atleast once</Text>
            </View>
            <ScrollView style={{ marginBottom: 20 }}>
              {users.map((user, index) => {
                return (
                  <View key={index} style={styles.textcontainer}>
                    <Text style={styles.modalText}>{user.username}</Text>
                    {user.completed ? (
                      <FontAwesome
                        name="check-circle"
                        size={24}
                        color="#00FFE0"
                        style={{}}
                      />
                    ) : (
                      <Entypo
                        name="circle-with-cross"
                        size={24}
                        color="red"
                        style={{ left: 2 }}
                      />
                    )}
                  </View>
                );
              })}
            </ScrollView>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
