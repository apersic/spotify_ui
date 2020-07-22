import React from 'react'
import {useParams} from 'react-router-dom'
import heartIcon from '../images/icons8-heart-96.png'
import dotsIcon from '../images/icons8-ellipsis-100.png'

const PlaylistPage = () => {
    let {id} = useParams()

    return (
        <div className="playlistPage">
            <div className="playlistPageHeader">
                <div className="playlistPageImage">
                    <img src="https://images.unsplash.com/photo-1592922452678-119a764cc880?ixlib=rb-1.2.1
                    &ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="profilePic"/>
                </div>
                <div className="playlistPageHeaderInfo">
                    <p className="subTitle">Made for you</p>
                    <h1>Daily mix {id}</h1>
                    <p>Minimalism, electronica and more - 49 songs, 3 h 18 min</p>
                </div>
            </div>
            <div className="playlistPageContent">
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
                <div className="plalistSongsList">
                    <div className="listItem">
                        <div className="playButton">
                            <svg height="28" role="img" width="28" viewBox="0 0 24 24">
                                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                            </svg>
                        </div>
                        <div className="song">
                            <div className="songName">Song 1</div>
                            <div className="songInfo">
                                <span className="author">Artist 1</span>
                                <span className="separator">-</span>
                                <span className="album">Album 1</span>
                            </div>
                        </div>
                        <div className="duration">
                            <span>3:55</span>
                        </div>
                    </div>
                    <div className="listItem">
                        <div className="playButton">
                            <svg height="28" role="img" width="28" viewBox="0 0 24 24">
                                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                            </svg>
                        </div>
                        <div className="song">
                            <div className="songName">Song 1</div>
                            <div className="songInfo">
                                <span className="author">Artist 1</span>
                                <span className="separator">-</span>
                                <span className="album">Album 1</span>
                            </div>
                        </div>
                        <div className="duration">
                            <span>3:55</span>
                        </div>
                    </div>
                    <div className="listItem">
                        <div className="playButton">
                            <svg height="28" role="img" width="28" viewBox="0 0 24 24">
                                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                            </svg>
                        </div>
                        <div className="song">
                            <div className="songName">Song 1</div>
                            <div className="songInfo">
                                <span className="author">Artist 1</span>
                                <span className="separator">-</span>
                                <span className="album">Album 1</span>
                            </div>
                        </div>
                        <div className="duration">
                            <span>3:55</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage