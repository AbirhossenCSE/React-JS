
import './App.css'
import Daisynav from './components/Daisynav/Daisynav'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Daisynav></Daisynav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
