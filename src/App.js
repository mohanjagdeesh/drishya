import {BrowserRouter , Switch , Route} from "react-router-dom"

import HomePage from "./components/HomePage";
import HowitWorks from "./components/HowitWorks";
import NotFound from "./components/NotFound";


const App = () => (
 <BrowserRouter>
 <Switch>
 <Route exact path = "/" component={HomePage}/>
 <Route exact path = "/howitWorks" component = {HowitWorks}/>
 <Route component = {NotFound}/>
 </Switch>
 </BrowserRouter>
)

export default App;
