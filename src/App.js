import Cards from "./Components/Cards";
import Inputs from "./Components/Inputs";
import { useState } from 'react'
import BackGroundMobile from './images/bg-main-mobile.png'
import styled from "styled-components";


function App() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('') 
  const [dateday, setDateDay] = useState('')
  const [dateyear, setDateYear] = useState('')
  const [cvc, setCVC] = useState('')
  const [nameError, setNameError] = useState(null)
  const [cardError, setCardError] = useState(null)
  const [mmError, setMmError] = useState(null)
  const [yyError, setYyError] = useState(null)
  const [cvcError, setCvcError] = useState(null)










  return (
  <Main>
      
      <Cards cvc={cvc} setCVC={setCVC} number={number} setNumber={setNumber} name={name} setName={setName} dateday={dateday} setDateDay={setDateDay} dateyear={dateyear} setDateYear={setDateYear} />
      <Inputs 
        cvc={cvc}
        setCVC={setCVC} 
        number={number} 
        setNumber={setNumber} 
        name={name} 
        setName={setName} 
        dateday={dateday} 
        setDateDay={setDateDay} 
        dateyear={dateyear} 
        setDateYear={setDateYear} 
        nameError={nameError}
        setNameError={setNameError}
        cardError={cardError}
        setCardError={setCardError}
        mmError={mmError}
        setMmError={setMmError}
        yyError={yyError}
        setYyError={setYyError}
        cvcError={cvcError}
        setCvcError={setCvcError}
        />
  </Main>

    
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
 

`