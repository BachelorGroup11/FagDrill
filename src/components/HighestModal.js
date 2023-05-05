import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export const HighestModal = ({ isVisible, setIsVisible, users }) => {
  return (
    <ScrollView style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerview}>
              <Text style={styles.modalHeader}>Highest scores</Text>
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
    borderBottomColor: '#afb7bb',
  },
  modalHeader: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    marginBottom: 15,
  },
});
