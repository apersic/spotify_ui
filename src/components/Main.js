import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';
import Categories from './Categories';

const Main = () => {
    return(
        <div className="Main">
          <div className="Toolbar">dummy trext</div>
          <div className="mainContent">
              <div className="cardsWrap">
                <h1>Uniquely yours</h1>
                <div className="card">
                  <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1592922452678-119a764cc880?
                    ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="pic1" />
                  </div>
                  <div className="cardContent">
                    <h3>Liked songs</h3>
                  </div>
                  <span className="playIcon">
                    <PlayIcon />  
                  </span>
                </div>
              </div>
              <Categories />
          </div>
        </div>
    )
}

export default Main