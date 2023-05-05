import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/components/OptionStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Component responsible for rendering buttons with answer options for a given question
export const Option = ({ value, id, state, dispatch, style }) => {
  const [answeredCorrect, setAnsweredCorrect] = useState(false);
  const [answeredFalse, setAnsweredFalse] = useState(false);

  // Update colour and border around on press to show whether answer was correct or incorrect
  useEffect(() => {
    setAnsweredCorrect(false);
    setAnsweredFalse(false);
    let has_been_answered = state.answeredArray.find(
      (x) => x.index === state.index
    );

    if (typeof has_been_answered !== 'undefined') {
      has_been_answered.answerInput === has_been_answered.correctAnswer &&
      has_been_answered.answerInput === id
        ? setAnsweredCorrect(true)
        : has_been_answered.correctAnswer === id
        ? setAnsweredCorrect(true)
        : has_been_answered.answerInput === id && setAnsweredFalse(true);
    }
  }, [state.index, state.selected]);

  // Update score on button press
  const updateQuiz = () => {
    let has_been_answered = state.answeredArray.find(
      (x) => x.index === state.index
    );
    if (typeof has_been_answered !== 'undefined') return;

    dispatch({
      type: 'setansweredarray',
      payload: {
        is_answered: true,
        answerInput: id,
        correctAnswer: state.correctOption,
        index: state.index,
      },
    });

    dispatch({
      type: 'setmulitple',
      payload: {
        selected: id,
        score: id == state.correctOption ? state.score + 1 : state.score,
        streak: id == state.correctOption ? state.streak + 1 : 0,
      },
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.btnChoice,
          style,
          state.category === 'true_or_false'
            ? state.options[id].toLowerCase() == 'false'
              ? styles.false
              : styles.correct
            : {},
        ]}
        onPress={() => state.selected === -1 && updateQuiz()}
      >
        {answeredCorrect && (
          <FontAwesome
            name="check-circle"
            size={24}
            color="#00FFE0"
            style={[
              { position: 'absolute', left: 6 },
              state.category === 'true_or_false' && {
                top: 10,
                color: 'white',
              },
            ]}
          />
        )}
        {answeredFalse && (
          <Entypo
            name="circle-with-cross"
            size={24}
            color="red"
            style={[
              { position: 'absolute', left: 4 },
              state.category === 'true_or_false' && { top: 10, color: 'white' },
            ]}
          />
        )}
        <Text
          style={[
            styles.btnText,
            state.category === 'true_or_false' && { fontSize: 16 },
          ]}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
