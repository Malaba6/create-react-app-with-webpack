import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginCompoent from './features/login/LoginComponent';
import SignupComponent from './features/signup/SignupComponent';
import UserStories from './features/stories/StoryComponent';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginCompoent} />
            <Route exact path="/signup" component={SignupComponent} />
            <Route exact path="/stories" component={UserStories} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
