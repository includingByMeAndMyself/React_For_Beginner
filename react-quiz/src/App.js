import './index.scss';
import React from "react";

const questions = [
  {
    title: 'Викуша ... ?',
    variants: ['самая лучшая', 'самая любимая', 'самая красивая'],
    correct: 0,
  },
  {
    title: 'Викулька-хрюлька ... ?',
    variants: ['самая добрая', 'самая отзывчивая', 'самая няшная'],
    correct: 1,
  },
  {
    title: 'Викука-...?',
    variants: [
      'вреднюка',
      'поросюка',
      'бука',
    ],
    correct: 2,
  },
    {
        title: 'Кого любит Викука больше всех?',
        variants: [
            'Иваку',
            'Иваку',
            'Иваку',
        ],
        correct: 2,
    },
];

function Result({correctCount}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"  alt = "Result"/>
      <h2>Вы отгадали {correctCount} ответа из {questions.length}</h2>
      <a href="/">
          <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant}) {
    const percentage = Math.round(step / questions.length * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {question.variants.map((text, index) =>(
              <li onClick={() => onClickVariant(index)} key ={index}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
    const [step, setStep] = React.useState(0);
    const [correctCount, setCorrectCount] = React.useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);

        if(index === question.correct){
            setCorrectCount(correctCount + 1)
        }
    }

  return (
    <div className="App">
        {
            step !== questions.length ? (
            <Game question = {question}
                  onClickVariant = {onClickVariant}
                  step = {step}/>) :
            (<Result correctCount={correctCount} />)
        }
    </div>
  );
}

export default App;
