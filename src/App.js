import './App.css';
import Apple from './components/Apple';
import Bikecolor from './components/Bikecolor';
import Car from './components/Car';
import Counter from './components/Counter';
import FavColor from './components/FavColor';
import Firstclass from './components/Firstclass';
import Firstfunction from './components/Firstfunction';
import Form from './components/Form';
import { Header } from './components/Header';
import List from './components/List';
import MultipleInput from './components/MultipleInput';
import MultipleState from './components/MultipleState';

function App() {

  const AppleInfo = { type: "Fruit", color: "red"}
  // const AppleInfo = {}; // used for conditional rendering
  const CarList = [
    { brand: "Honda", color: "white"},
    { brand: "Mahendra", color: "Grey"},
    { brand: "Maruthi", color: "Black"}
  ];

  const NumList = [ 1, 2, 3, 4, 5];

  return (
    <div className="App">
      {/* <h1> Here is the react code</h1>
      <Firstfunction />
      <Firstclass />
      <Car brand = {`Thar`} color = {`Black`} />
      { //conditional rendering
        AppleInfo.type !== undefined && AppleInfo.color !== undefined ?
        <Apple appleInfo={AppleInfo}/> : null
      }
      <ul>
        { CarList.map((CarList) => <li key={CarList.brand}> <Car CarList={CarList} /> </li>)}
      </ul>
      <ul>
        { NumList.map((e, index) => <li key={index}> <h1>{e} </h1></li>)}
      </ul>

      <Header /> */}
      {/* <Apple appleInfo = { AppleInfo }/> */}
      <FavColor />
      {/* <Bikecolor />
      <MultipleState />
      <List /> */}
      <Counter />
      {/* <Form /> */}
      <MultipleInput />
    </div>
  );
}

export default App;
