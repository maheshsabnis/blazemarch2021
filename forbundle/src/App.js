import logo from './logo.svg';
import './App.css';

function App() {
  const click=()=>{
    alert('I am from bundle');
  }
  return (
    <div className="App">
      <button onClick={click}>I am from Bundle</button>
    </div>
  );
}

export default App;
