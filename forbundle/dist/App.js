import logo from './logo.svg';
import './App.css';

function App() {
  const click = () => {
    alert('I am from bundle');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: click
  }, "I am from Bundle"));
}

export default App;