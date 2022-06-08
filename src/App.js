import logo from './logo.svg';
import './App.css';
import dataArr from './data.js'
import Product from './components/Product';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Foot from './components/Foot';

function App() {
  const products = dataArr.map((ele, index) => {
    return (
      <Product 
      {...ele}
      key={index}
      />
    );
  })
  
  return (
    <div className="container">
      <Nav />
      <Banner />
      <div className="product-window">
        {products}
      </div>
      <Foot />
    </div>
  );
}

export default App;
