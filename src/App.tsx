import Header from './components/Header';
import MainBody from './components/MainBody';
import { useState } from 'react';

function App() {
  type datatype = {day:string, amount:number, id:number}[];
  
  const initialData:datatype = [
    {day: "mon", amount: 17.45, id: 1},
    {day: "tue", amount: 34.91, id: 2},
    {day: "wed", amount: 52.36, id: 3},
    {day: "thu", amount: 31.07, id: 4},
    {day: "fri", amount: 23.39, id: 5},
    {day: "sat", amount: 43.28, id: 6},
    {day: "sun", amount: 25.4, id: 7}
  ];
  
  const [data, setData] = useState(initialData);

  let total;
  const handleTotal = () => {
    const total = data.reduce((accumulator, dat) => {
      return accumulator + dat.amount;
    }, 0);
    return total;
  }
  
    

  return (
    <>
    < Header />
    < MainBody 
      data={data}
      handleTotal={handleTotal}
    />
    </>
  )
}

export default App
