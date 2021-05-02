import { Route } from "react-router-dom";
import Details from "./Pages/expanded_details";
import Days from "./Pages/weather_days";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Days} />
      <Route exact path="/Pages/expanded_details" component={Details} />
    </div>
  );
}

export default App;
