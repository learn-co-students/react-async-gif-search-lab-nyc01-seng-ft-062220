import React from 'react'

class GifList extends React.Component {
    
    // displayGifs = () => {
    //     this.props.filterGifs().map(gif => )
    // }
    
    render() {
        return(
            <div>
                <h1>Gif List</h1>
                    <ul>
                        {/* {console.log("gif list", this.props.filterGifs)} */}
                    {this.props.filterGifs.slice(0, 3).map((gifObj)=> <li name={gifObj.title}><img src={gifObj.images.original.url} alt={gifObj.title}/></li>)}
                    </ul>
            </div>
        )
    }
}

export default GifList 