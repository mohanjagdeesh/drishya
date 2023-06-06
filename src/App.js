import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import TermsConditions from "./components/TermsConditions";
import Careers from "./components/Careers/Careers";
import FaqSection from "./components/FaqSection/Faq";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/terms" component={TermsConditions} />
      <Route exact path="/faq" component={FaqSection} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
