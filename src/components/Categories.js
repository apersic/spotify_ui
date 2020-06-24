import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';

const Categories = () => {
    const dataCategories = [
        {
            id: 1,
            name: 'Focus',
            description: 'Music to help you concetrate.',
        },
        {
            id: 2,
            name: 'Workout',
            description: 'Music to keep you motivated.',
        },
        {
            id: 3,
            name: 'Rock',
            description: 'Greatest rock hits.',
        },
        {
            id: 4,
            name: 'Relax',
            description: 'Music to help you relax.',
        },
    ]

    return (
        <div>
            {dataCategories.map((category) => (
                <div className="cardsWrap">
                <h1>{category.name}</h1>
                <span className="seeAll">SEE ALL</span>
                <p className="subText">{category.description}</p>
                <div className="cardsWrapInner">
                <div className="card">
                    <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1592928038511-20202bdad1fd?ixlib=rb-1.2.1
                    &ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="pic1" />
                    </div>
                    <div className="cardContent">
                    <h3>Music for concentration</h3>
                    <span>Minimalism, electronica.</span>
                    </div>
                    <span className="playIcon">
                    <PlayIcon />  
                    </span>
                </div>
                <div className="card">
                    <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1592923728006-d490815d528b?ixlib=rb-1.2.1&
                    ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="pic1" />
                    </div>
                    <div className="cardContent">
                    <h3>Music for concentration</h3>
                    <span>Minimalism, electronica.</span>
                    </div>
                    <span className="playIcon">
                    <PlayIcon />  
                    </span>
                </div>
                <div className="card">
                    <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1592776779624-bef983cba6a0?ixlib=rb-1.2.1&
                    ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="pic1" />
                    </div>
                    <div className="cardContent">
                    <h3>Music for concentration</h3>
                    <span>Minimalism, electronica.</span>
                    </div>
                    <span className="playIcon">
                    <PlayIcon />  
                    </span>
                </div>
                <div className="card">
                    <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1592927090907-663fe7229e86?ixlib=rb-1.2.1&
                    ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80" alt="pic1" />
                    </div>
                    <div className="cardContent">
                    <h3>Music for concentration</h3>
                    <span>Minimalism, electronica.</span>
                    </div>
                    <span className="playIcon">
                    <PlayIcon />  
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Categories