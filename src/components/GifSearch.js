import React from 'react';

function GifSearch(props){

    return (
        <form onSubmit={props.submitHandler}>
            <input type="text" placeholder="search gifs" value={props.value} onChange={props.searchHandler}/>
            <input type="submit" value="Search Gify" />
        </form>
    )
}

export default GifSearch