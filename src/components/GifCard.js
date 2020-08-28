import React from 'react'

class GifCard extends React.Component {


    render() {
        return(
            <li><img style={{width: "75px", height: "75px"}} src={this.props.value.images.original.url} alt="whatever" /></li>
        )
    }
}

export default GifCard