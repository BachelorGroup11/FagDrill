import { Modal, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/OverviewModalStyle';

export const HighestModal = ({ isVisible, setIsVisible, users }) => {
  return (
    <ScrollView style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerview}>
              <Text style={styles.modalHeader}>Best scores</Text>
            </View>
            <ScrollView style={{ marginBottom: 20 }}>
              {users.map((user, index) => {
                return (
                  <View key={index} style={styles.textcontainer}>
                    <Text style={styles.modalText}>{user.username}</Text>
                    <Text
                      style={[
                        styles.modalText,
                        user.score / user.totalQuestions >= 0.8
                          ? { color: '#65D870' }
                          : user.score / user.totalQuestions >= 0.5
                          ? { color: '#F0BA2D' }
                          : { color: '#FF0000' },
                      ]}
                    >
                      {user.score === 0 && user.totalQuestions === 0
                        ? 'NaN'
                        : `${user.score}/${user.totalQuestions}`}
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
