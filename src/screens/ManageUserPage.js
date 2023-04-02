import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ManageUserStyle";

const ManageuserPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => navigation.replace("userpage")}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManageuserPage;
