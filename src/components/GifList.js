import React from 'react'

function GifList(props){
    let gifArray = props.gifs.map(gitObj => <li><img src={gitObj.images.original.url}/></li>)
    console.log("gif array: ", gifArray[0])
    return (
        <ul>
            {gifArray}
        </ul>
    )
}

export default GifList