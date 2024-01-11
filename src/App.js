import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"

import Main from './Pages/Main/Main'

const App=()=>{
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
