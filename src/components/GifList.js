import React from "react"
import GifCard from "./GifCard";

class GifList extends React.Component {


    renderGifs = () => {
        return this.props.data.map(item => <GifCard key={item.id} value={item} />)
    }


    render() {
        return(
            <ul>{this.renderGifs()}</ul>
        )
    }
}

export default GifList