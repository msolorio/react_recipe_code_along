// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import MainPage from './pages/MainPage';
import Person from './components/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person personName="Greta" favColor="purple" />
      <Person personName="Hubert" favColor="lime green" />
      <Person personName="Roberta" favColor="orange" />
      {/* <Header /> */}
      {/* <HomePage /> */}
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
