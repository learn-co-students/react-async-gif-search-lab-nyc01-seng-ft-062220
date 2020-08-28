import React from 'react'

class GifList extends React.Component {

    eachList = () => {    
        return this.props.gifData.map(gifObj => {
            return(
                <li>
                    <img alt={gifObj.title} src={gifObj.images.original.url} />
                </li>
            )
        })         
    }

    render(){
        return(
            <ul>
                {this.eachList()}
            </ul>
        )
    }
}

export default GifList
