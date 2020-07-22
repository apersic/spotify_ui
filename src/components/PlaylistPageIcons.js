import React from 'react'
import heartIcon from '../images/icons8-heart-96.png'
import dotsIcon from '../images/icons8-ellipsis-100.png'

const PlaylistPageIcons = () => {
    return(
        <div className="playlistPageIcons">
            <div className="playButton">
                <svg height="28" role="img" width="28" viewBox="0 0 24 24">
                    <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                </svg>
            </div>
            <div className="iconsHeart">
                <img src={heartIcon} alt="heartPic"/>
            </div>
            <div className="iconsDots">
                <img src={dotsIcon} alt="dotsPic"/>
            </div>
        </div>
    )
}

export default PlaylistPageIcons