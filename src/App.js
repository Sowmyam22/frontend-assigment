import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './tailwind.output.css';

function App() {
  return (
   <BrowserRouter>
      <Switch>
        <Route exact path="/" to="/landing-page">
          <LandingPage />
        </Route>
        <Route path="/view">
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
