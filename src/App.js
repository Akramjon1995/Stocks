import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import StockList from './components/StockList'
import {Stocks} from './Resources'

function App() {

  const [data] = useState(Stocks)
  const [filteredData, setFilteredData] = useState(Stocks)
  

  const Search = (text) => {
    const filteredStokcs = data.filter((stock) => {
      return stock.ticker.toLowerCase().includes(text.toLowerCase())
    })
    setFilteredData(filteredStokcs)
  }

  return (
    <Router className="container-fluid">
      <Header />
      <SearchInput onSearch = {Search} />
      <StockList stocks={filteredData} />
    </Router>
  );
}

export default App;
