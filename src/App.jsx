import AxiosFetch from "./components/AxiosFetch/AxiosFetch"
import LIneChart from "./components/LineChart/LIneChart"
import Navbar from "./components/Navbar/Navbar"
import PriceOptions from "./components/PriceOptions/PriceOptions"


const App = () => {
  return (
    <div>

      <Navbar />
      <PriceOptions />
      <LIneChart />
      <AxiosFetch />

    </div>
  )
}

export default App
