import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/screens/CreateQuizStyle";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import { db } from "../../firebaseConfig";
import { collection, doc } from "firebase/firestore";
import { GoBack, Question } from "../components/Index";
import { fetchUsers } from "../utilities/fetchUsers";
import { addQuiz } from "../utilities/addQuiz";
import { addQuestions } from "../utilities/addQuestions";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CreateQuizPage = ({ navigation, route }) => {
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
  const [category, setCategory] = useState("");

  useEffect(() => {
    setUsers([]);
    fetchUsers(setUsers).catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (route.params === undefined) return;
    setQuestions((prevArray) => [...prevArray, route.params]);
  }, [route.params]);

  const saveQuiz = async () => {
    if (title === "") return alert("Please enter title");

    const quizRef = doc(collection(db, "quizzes"));
    const userIds = selected.map(
      (index) => users.find((user) => user.email === index).id
    );
    const questionIds = await addQuestions(quizRef.id, questions);

    addQuiz(
      title,
      description,
      duration,
      quizRef.id,
      userIds,
      questionIds,
      category
    );
    navigation.navigate("managequizpage");
  };

  return (
    <ScrollView bounces={false} style={{ backgroundColor: "#FFFFFF" }}>
      <GoBack />
      <Text style={styles.header}>Create Quiz</Text>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder={"Enter title"}
          placeholderTextColor={"#757A86"}
        />
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          value={description}
          placeholder={"Enter description"}
          placeholderTextColor={"#757A86"}
        />
        <Text style={styles.title}>Duration</Text>
        <DateTimePicker
          mode="time"
          value={new Date(0, 0, 0, duration.hours, duration.minutes, 0)}
          display="default"
          style={{ alignSelf: "flex-start", padding: 8 }}
          onChange={(e, d) =>
            setDuration({ hours: d.getHours(), minutes: d.getMinutes() })
          }
        />
        <Text style={styles.title}>Category</Text>
        <SelectList
          setSelected={(val) => setCategory(val[0])}
          data={["practice_quiz", "social_quiz"]}
          save="value"
          value={category}
          search={false}
          boxStyles={styles.boxstyles}
        />

        <Text style={styles.title}>Visible to</Text>
        <MultipleSelectList
          setSelected={(val) => setSelected(val)}
          data={users.map((user) => user.email)}
          save="value"
          search={false}
          boxStyles={styles.boxstyles}
          inputStyles={styles.inputstyles}
        />
        <View style={styles.questionscontainer}>
          <Text style={styles.questions}>Questions</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("viewallquestionspage", {
                questions: questions,
                setQuestions: setQuestions,
              })
            }
          >
            <Text style={styles.viewall}>
              View all {<FontAwesome name="arrow-right" />}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ height: 220 }}>
          {questions.map((item, index) => (
            <Question
              count={index + 1}
              type={item.type}
              title={item.question}
              questions={questions}
              setQuestions={setQuestions}
              key={index}
            />
          ))}
        </ScrollView>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.save} onPress={() => saveQuiz()}>
            <Text style={styles.savetext}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.add}
            onPress={() =>
              navigation.navigate("addquestionpage", {
                destination: "createquizpage",
              })
            }
          >
            <Text style={styles.addtext}>Add Question</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateQuizPage;
