import Screen from './components/Screen';
import './App.css';
import Wrapper from './components/Wrapper';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) =>(
              <Button 
              vlaue={btn}
              key={i}/>
            ))}
          </ButtonBox>
          
        </Wrapper>

      
    </CalcProvider>
  );
}

export default App;
