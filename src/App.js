import logo from './logo.svg';
import './App.css';
import Greeting from './Componets/Greeting';
import ClassComponentEx from './Componets/ClassComponentEx';
import PrviosCount from './Componets/PrviosCount';

function App() {
  return (
    <div className="App">
   <h1>Hiii</h1>

   {/* <Greeting/> */}
   <ClassComponentEx/>
   <PrviosCount/>
    </div>
  );
}

export default App;
