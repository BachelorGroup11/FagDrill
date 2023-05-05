import { Modal, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/OverviewModalStyle';

export const AverageModal = ({ isVisible, setIsVisible, users }) => {
  return (
    <ScrollView style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerview}>
              <Text style={styles.modalHeader}>Average scores</Text>
            </View>
            <ScrollView style={{ marginBottom: 20 }}>
              {users.map((user, index) => {
                return (
                  <View key={index} style={styles.textcontainer}>
                    <Text style={styles.modalText}>{user.username}</Text>
                    <Text
                      style={[
                        styles.modalText,
                        user.average >= 80
                          ? { color: '#65D870' }
                          : user.average >= 50
                          ? { color: '#F0BA2D' }
                          : { color: '#FF0000' },
                      ]}
                    >
                      {user.average}%
                    </Text>
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
