import React from 'react';
import Playlist from './Playlist';

const Categories = () => {
    const dataCategories = [
        {
            id: 0,
            name: 'Uniquely yours',
            description: '',
        },
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
            {dataCategories.map((category, id) => (
                <div className="cardsWrap" key={id}>
                    <h1>{category.name}</h1>
                    <span className="seeAll">SEE ALL</span>
                    <p className="subText">{category.description}</p>
                    <Playlist category_id={category.id} />
                </div>
            ))}
        </div>
    )
}

export default Categories