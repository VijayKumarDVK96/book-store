import './App.css';
import ApparelList from "./components/ApparelList";
import {products} from './data';


function App() {
  return (
    <div className="App">
      <main>
        <h1 className='title'>Apparel Store</h1>
        <ApparelList products={products}/>
      </main>
    </div>
  );
}

export default App;
