import React from 'react'

class GifList extends React.Component {

    displayImages = () => {
        return(
                this.props.gifs.map(gif => {
                    return <li><img alt="gif" src={gif}/></li>
                })
            )
        }

    render() {
        return (
            <ul>{this.displayImages()}</ul>
            
        )
    }
}

export default GifList