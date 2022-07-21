import { useEffect, useState } from 'react';
import './App.css';
import InputHeader from './components/InputHeader/InputHeader';
import Table from './components/Table/Table';

function App() {

  const [state, setState] = useState([
    {
      date: '2022-07-20',
      distance: 5
    },
    {
      date: '2022-07-10',
      distance: 8
    },
    {
      date: '2022-06-15',
      distance: 10
    }
  ])

  useEffect(() => {

  }, [state])


  const insertData =(data) => {
    let newData = [...state]

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    if (data.date <= today) {
      if (data.date > newData[0].date) {
        newData.unshift(data)
      }
      else if (data.date < newData[newData.length-1].date) {
        newData.push(data)
      }
      else {
        for (let i = 0; i < newData.length; i++) {
          if (data.date < newData[i].date) 
            continue
          else {
            newData.splice(i, 0, data)
            return newData
          }
        }
      }
    }
    else {
      alert ('Выбранная дата еще не наступила')
    }
    return newData
  }

  const addData = (data) => {
    let indexOfTheDate = checkDate(data.date)
    let newState = [...state]
    if (indexOfTheDate || indexOfTheDate === 0) {
      newState[indexOfTheDate].distance += data.distance
      setState(newState)
    }
    
    else {
      //newState.push(data)
      newState = insertData(data)
      setState(newState)
    }
  }

  const checkDate = (d) => {
    for (let i = 0 ; i < state.length; i++) {
      if (d === state[i].date)
        return i
    }
    return false
  }

  const deleteData = (idx) => {
    let newState = [...state]
    newState.splice(idx, 1)
    setState(newState)
  }

  return (
    <div className="App">
      <InputHeader addData={addData} />
      <Table data={state} deleteData={deleteData}/>
    </div>
  );
}

export default App;
