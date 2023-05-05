import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const CompletedModal = ({ isVisible, setIsVisible, users }) => {
  return (
    <ScrollView style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerview}>
              <Text style={styles.modalHeader}>
                Users who have completed{`\n`}the quiz atleast once
              </Text>
            </View>
            <ScrollView style={{ marginBottom: 20 }}>
              {users.map((user, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 15,
                    }}
                  >
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '-3%',
    width: '100%',
  },
  modalView: {
    height: 500,
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    width: '50%',
    bottom: '2%',
    height: '12%',
    padding: 10,
    elevation: 2,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
  },
  modalText: {
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  headerview: {
    borderBottomWidth: 1,
  },
  modalHeader: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    marginBottom: 15,
  },
});
