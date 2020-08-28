import React from 'react'

class GifSearch extends React.Component {

    // submitShit = (e) => {
    //     this.props.SearchIteration(e)
    // }

    //use this instead of the new onChange function that Eli used


    render() {

        return(
            <div>
            <h3>Search</h3>
            <input onChange={(e) => this.props.searchIteration(e)} type="text" placeholder="Search" value={this.props.searchValue}/>
            {/* do not need to use helper function this callsback for you */}
            </div>
        )
    }
}

export default GifSearch