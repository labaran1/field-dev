import React, { useContext, useState } from 'react';
import './moodeSelector.css';
import Coloured from '../../Images/coloured.png';
import AppContext from '../../Context/AppContext/AppContext';

export default function MoodSelector() {
  const appContext = useContext(AppContext);
  const { updateHistory } = appContext;
  const [isSelected, setIsSelected] = useState(false);

  const [selectedMood, setselectedMood] = useState('');

  function getFormattedDate(date) {
    var year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return month + '-' + day + '-' + year + '/' + hour + ':' + min + ':' + sec;
  }
  const setHistoryMood = (name) => {
    let a = getFormattedDate(new Date());

    switch (name) {
      case '😃':
        return {
          name: '😃',
          time: a,
          message: 'Cat was super excited!',
        };
        break;
      case '😐':
        return {
          name: '😐',
          time: a,
          message: 'Cat was indifferent',
        };
        break;
      case '😖':
        return {
          name: '😖',
          time: a,
          message: "Cat wasn't having it ",
        };
        break;
      default:
        break;
    }
  };

  let defaultMood = [
    {
      id: 1,
      name: '😖',
      selected: false,
    },
    {
      id: 2,
      name: '😐',
      selected: false,
    },
    {
      id: 3,
      name: '😃',
      selected: false,
    },
  ];
  const [Mood, setMood] = useState([
    {
      id: 1,
      name: '😖',
      selected: false,
    },
    {
      id: 2,
      name: '😐',
      selected: false,
    },
    {
      id: 3,
      name: '😃',
      selected: false,
    },
  ]);

  const selectMood = (id, index) => {
    // Bruteforce approach
    let newMood = [...defaultMood];
    newMood[index].selected = !newMood[index].selected;
    let toHist = setHistoryMood(newMood[index].name);
    setselectedMood(toHist);
    setMood(() => newMood);
    setIsSelected(true);
  };
  const submit = () => {
    // add mode to history

    updateHistory(selectedMood);
    setMood(() => defaultMood);
    setIsSelected(false);
  };
  return (
    <main className='selectorContainer'>
      <section>
        <img src={Coloured} alt='' />
        <p className='selectorContainer__selectorTittle'>
          What is your cat's current mood
        </p>
      </section>

      <section style={{ height: 100 }}>
        {Mood.map((mood, i) => (
          <div
            className={
              mood.selected
                ? 'selectorContainer__mood selectorContainer--selectedMood'
                : 'selectorContainer__mood'
            }
            key={mood.id}
            onClick={(e) => selectMood(mood.id, i)}
          >
            <span>{mood.name}</span>
          </div>
        ))}
        <div>
          {isSelected ? (
            <div
              className={` ${selectedMood.name} `}
              style={{ border: 'none' }}
            >
              <span className='messageTime__message'>
                {selectedMood.message}
              </span>
            </div>
          ) : null}
        </div>
      </section>

      <button disabled={!isSelected ? true : false} onClick={submit}>
        Save mood
      </button>
    </main>
  );
}
