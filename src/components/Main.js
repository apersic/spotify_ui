import React from 'react';
import Categories from './Categories';
import {Switch, Route} from 'react-router-dom';
import PlaylistPage from '../pages/PlaylistPage';

const Main = () => {
    return(
        <div className="Main">
          <div className="Toolbar">dummy text</div>
          <div className="mainContent">
            <Switch>
              <Route path="/" exact component={Categories}></Route>
              <Route path="/search">Search</Route>
              <Route path="/your-library">Your library</Route>
              <Route path="/playlist/:id" component={PlaylistPage}></Route>
            </Switch>
          </div>
        </div>
    )
}

export default Main