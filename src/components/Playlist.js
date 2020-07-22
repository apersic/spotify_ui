import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';
import {Link} from 'react-router-dom';

const Playlist = (props) => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 0,
            name: 'Your playlist',
            img: 'https://images.unsplash.com/photo-1592922452678-119a764cc880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
            genres: 'Liked songs.',
        },
        {
            id: 101,
            category_id: 3,
            name: 'Home playlist 1',
            img: 'https://images.unsplash.com/photo-1592928038511-20202bdad1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            genres: 'Minimalism, electronica.',
        },
        {
            id: 102,
            category_id: 3,
            name: 'Home playlist 2',
            img: 'https://images.unsplash.com/photo-1592927090907-663fe7229e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=656&q=80',
            genres: 'Pop, dubstep.',
        },
        {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img: 'https://images.unsplash.com/photo-1592776779624-bef983cba6a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
            genres: 'Techno, house.',
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1',
            img: 'https://images.unsplash.com/photo-1495573258723-2c7be7a646ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            genres: 'Vaporware, Drum & Bass.',
        },
        {
            id: 105,
            category_id: 4,
            name: 'Sunday playlist',
            img: 'https://images.unsplash.com/photo-1577888086077-2e17c3a2f8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            genres: 'Country, R&B.',
        },
        {
            id: 106,
            category_id: 2,
            name: 'Workout playlist 1',
            img:'https://images.unsplash.com/photo-1592922823354-c48e6d894bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=634&q=80',
            genres: 'Rock, metal.',
        },
        {
            id: 107,
            category_id: 2,
            name: 'Workout playlist 2',
            img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            genres: 'Rap, Hip Hop.',
        },
    ]

    const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id)

    return (
        <div className="cardsWrapInner">

            {matchedPlaylists.map((playlist, id) => (
                <Link to={`/playlist/` + playlist.id}>
                    <div className="card" key={id}>
                        <div className="cardImage">
                            <img src={playlist.img} alt="pic1" />
                        </div>
                        <div className="cardContent">
                            <h3>{playlist.name}</h3>
                            <span>{playlist.genres}</span>
                        </div>
                        <span className="playIcon">
                            <PlayIcon />  
                        </span>
                    </div>
                </Link>
            ))}  
        </div>             
    )
}

export default Playlist