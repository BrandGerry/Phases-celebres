import './App.css';

//HOOKS
import { useState } from 'react';

//JSON
import Quotes from "./quotes.json";

//COMPONENTES
import Frases from "./Componentes/Frases";


function App() {

  const Colors= ["#126AA7","#008FBF","#00B1BC","#00D0A4","#94E883","#F9F871","#D460A1","#DFA01F","#897456","#A04969","#3D4756","#008A5E","#A54B2C","#0098FA","EA5C2B"]

  const [Phase, setPhase] = useState(Quotes[getNumber(Quotes.length)])
  //const User  = Users[0]
  const [background,setBackground] = useState(Colors[getNumber(Colors.length)])

  const handleUser = () =>{
    const index = getNumber(Quotes.length)
    const indexdos = getNumber(Colors.length)
    setPhase(Quotes[index])
    setBackground(Colors[indexdos])
    
  }

  //console.log(Phase.quote)

  return (
    <div className='App' style={{background}}>
      <Frases
       Quote={Phase.quote} 
       Autor={Phase.author}
       ChangeUser={handleUser}
       background={background}/>
      
    </div>
  );
}

const getNumber = (Max) => Math.floor(Math.random()* Max)

export default App;
