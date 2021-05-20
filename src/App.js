import { Route } from "react-router-dom";

import Days from "./Pages/weather_days";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Days} />
    </div>
  );
}

export default App;
