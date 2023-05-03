import { useEffect, useReducer } from 'react';
import { View, Text, StatusBar, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PlayStyle';
import ProgressBar from 'react-native-progress/Bar';
import {
  Option,
  GoBack,
  LoadingAnimation,
  FillInBlank,
  ImageQuestion,
  PlayNavigator,
} from '../components/Index';
import { QuizReducer, INITIAL_STATE } from '../utilities/QuizReducer';
import {
  fetchQuiz,
  addResult,
  formatTime,
  hoursAndMinutesToSeconds,
} from '../utilities/Index';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const PlayPage = ({ route, navigation }) => {
  const { quiz, name, duration } = route.params;
  const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);

  let has_been_answered = state.answeredArray.find(
    (x) => x.index === state.index
  );

  // Retrieve all questions from specified quiz then update state
  useEffect(() => {
    fetchQuiz(quiz, dispatch).then(() =>
      dispatch({ type: 'setisloading', payload: false })
    );
  }, []);

  // Set initial question
  useEffect(() => {
    dispatch({
      type: 'setmulitple',
      payload: {
        questionText: state.questionsArray[0]?.question_text,
        options: state.questionsArray[0]?.options,
        category: state.questionsArray[0]?.category,
        correctOption: state.questionsArray[0]?.correct_answer,
        summary: state.questionsArray[0]?.summary,
        image: state.questionsArray[0]?.image,
      },
    });
  }, [state.questionsArray]);

  const durationExpired = () => {
    return Alert.alert('', `Duration has expired. Continue to finish Quiz.`, [
      {
        text: 'Continue',
        onPress: () => addResult(state, quiz, name, navigation),
      },
    ]);
  };

  return (
    <View style={styles.containerTo}>
      {state.isLoading ? (
        <LoadingAnimation />
      ) : (
        <ImageBackground
          source={require('../assets/images/play_bg.png')}
          style={{ flex: 1, width: null, alignSelf: 'stretch' }}
        >
          <SafeAreaView>
            <GoBack style={{ top: -50 }} />
            <View style={styles.progressContainer}>
              <ProgressBar
                progress={state.index / (state.quizLength - 1)}
                width={260}
                height={20}
                borderRadius={30}
                color={'#3F51B5'}
              />
              {hoursAndMinutesToSeconds(duration.hours, duration.minutes) >
                0 && (
                <CountdownCircleTimer
                  isPlaying
                  duration={hoursAndMinutesToSeconds(
                    duration.hours,
                    duration.minutes
                  )}
                  size={38}
                  strokeWidth={1.2}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[7, 5, 2, 0]}
                  onComplete={durationExpired}
                >
                  {({ remainingTime }) => (
                    <Text style={{ fontSize: 10 }}>
                      {formatTime(remainingTime)}
                    </Text>
                  )}
                </CountdownCircleTimer>
              )}
            </View>
            <View>
              {state.category === 'fill_in_blank' ? (
                <FillInBlank state={state} dispatch={dispatch} />
              ) : state.category === 'Image question' ? (
                <ImageQuestion state={state} dispatch={dispatch} />
              ) : (
                <View>
                  <View style={styles.QuestionContainer}>
                    <Text style={styles.QuestionText}>
                      {state.questionText}
                    </Text>
                  </View>
                  {state.options.map((option, idx) => (
                    <Option
                      value={option}
                      key={idx}
                      id={idx}
                      state={state}
                      dispatch={dispatch}
                      style={{ bottom: 20 }}
                    />
                  ))}
                  {typeof has_been_answered !== 'undefined' &&
                    (state.category === 'true_or_false' ? (
                      <View
                        style={[
                          styles.summarycontainer,
                          { bottom: 0, top: 160 },
                        ]}
                      >
                        <Text style={styles.summarytext}>{state.summary}</Text>
                      </View>
                    ) : (
                      <View style={styles.summarycontainer}>
                        <Text style={styles.summarytext}>{state.summary}</Text>
                      </View>
                    ))}
                </View>
              )}
            </View>
            <PlayNavigator
              state={state}
              dispatch={dispatch}
              quiz={quiz}
              name={name}
              nav={navigation}
            />
          </SafeAreaView>
          <StatusBar translucent backgroundColor="transparent" />
        </ImageBackground>
      )}
    </View>
  );
};

export default PlayPage;
