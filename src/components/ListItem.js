import React from 'react'

const ListItem = (props) => {
    return(
        <div className="listItem" key={props.id}>
            <div className="playButton">
                <svg height="28" role="img" width="28" viewBox="0 0 24 24">
                    <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                </svg>
            </div>
            <div className="song">
                <div className="songName">{props.name}</div>
                <div className="songInfo">
                    <span className="author">{props.author}</span>
                    <span className="separator">-</span>
                    <span className="album">{props.album}</span>
                </div>
            </div>
            <div className="duration">
                <span>{props.duration}</span>
            </div>
        </div>
    )
}

export default ListItem