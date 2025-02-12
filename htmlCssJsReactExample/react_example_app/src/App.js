import "./App.css";
import Card from "./components/Card";
// import Content from "./components/Content";
import Navbar from "./components/Navbar";
import sony from "./assets/image/sony1.jpg";
// import noice from "./assets/image/noice.jpg";
import boat from "./assets/image/boat.jpg";
import UseSateExample from "./components/UseStateExample";


function App() {



  return (
    <div className="App">
      <div>
        {/* <Navbar/>
        <Card image={sony} name="Sony" price={1200} rating={5} />
        <Card image={boat} name="Boat" price={300} rating={3.5} />
        <Card name="Noice" price={200} rating={2} /> */}
        <UseSateExample/>
      </div>
    </div>
  );
}

export default App;
