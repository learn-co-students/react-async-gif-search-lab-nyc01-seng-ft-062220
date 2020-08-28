import React from 'react'

function GifList(props){
    return(
        <li>
            <img src={props.gifs} alt="Giphy Gifs"/>
        </li>
    )
}

export default GifList