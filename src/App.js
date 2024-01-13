import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"

import Main from './Pages/Main/Main'
import Checkout from './Pages/Checkout/Checkout';
const App=()=>{
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/home" component={Main} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
