import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SongsList from "./components/Songs/index.js";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SideNav from "./components/Navigation/sideNav.js";
import Playlist from "./components/Playlist";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      <SideNav />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/songs">
            <SongsList />
          </Route>
          <Route path="/playlist/">
            <Playlist />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;