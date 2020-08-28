import React from 'react'

class GifSearch extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Search</h3>
                <input onChange={this.props.searchHandler} type="text" placeholder="img" value={this.props.value}/>
            </React.Fragment>
        )
    }
}

export default GifSearch