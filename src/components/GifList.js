import React from 'react'

function GifList(props){
    console.log("GifList", props)
    return(
        <li><img src={props.gifs}/></li>
    )
}

export default GifList