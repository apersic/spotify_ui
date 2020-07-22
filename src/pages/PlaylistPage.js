import React from 'react'
import {useParams} from 'react-router-dom'
import PlaylistPageIcons from '../components/PlaylistPageIcons'
import ListItem from '../components/ListItem'

const PlaylistPage = () => {
    let {id} = useParams()

    const dataSongs = [
        {
            name: 'Song 1',
            author: 'Author 1',
            album: 'Album 1',
            duration: '3:56'
        },
        {
            name: 'Song 2',
            author: 'Author 2',
            album: 'Album 5',
            duration: '4:53'
        },
        {
            name: 'Song 3',
            author: 'Author 3',
            album: 'Album 7',
            duration: '5:27'
        },
        {
            name: 'Song 4',
            author: 'Author 1',
            album: 'Album 2',
            duration: '2:34'
        },
    ]

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
                <PlaylistPageIcons />
                <div className="plalistSongsList">
                    {dataSongs.map((song, id) => (
                        <ListItem id={id} name={song.name} author={song.author} album={song.album} duration={song.duration}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage