import React from 'react'

class GifList extends React.Component {

    render() {
        let gifs = this.props.gifs.map(gif => {
           return <li key={gif.id}><img src={gif.images.original.url} /></li>
        })
        return (
            <React.Fragment>
                <ul>
                    {gifs}
                </ul>
            </React.Fragment>
        )
    }
}

export default GifList