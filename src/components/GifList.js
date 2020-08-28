import React from 'react'

class GifList extends React.Component {

    displayImages = () => {
        return(
                this.props.gifs.map(gif => {
                    <img alt="gif" src={gif}/>
                })
            )
        }

    render() {
        return (
            {displayImages()}
        )
    }
}

export default GifList