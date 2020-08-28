import React from 'react'

class GifSearch extends React.Component {


    render() {

        return(
            <div>
            <h3>Search</h3>
            <input onChange={(e) => this.props.searchIteration(e)} type="text" placeholder="Search" value={this.props.searchValue}/>
            </div>
        )
    }
}

export default GifSearch