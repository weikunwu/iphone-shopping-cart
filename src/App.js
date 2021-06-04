import logo from './logo.svg';
import './App.css';
import StockList from './containers/StockList';
import Cart from './containers/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          iPhone shopping cart
        </p>
      </header>
      <StockList/>
      <Cart/>
    </div>
  );
}

export default App;