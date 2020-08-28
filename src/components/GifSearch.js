import React, { Component } from 'react';

class GifSearch extends Component {
    state = {
        search: ``
    }

    changeHandler = e => {
        //console.log(e.target.value)
        this.setState({
            search: e.target.value
        }, () => console.log(this.state))
    }

    submitHandler = e => {
        e.preventDefault()
        //this.setState
        this.props.searchHandler(this.state)
        console.log(e.target.search.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    Search:<input type="text" 
                        name="search"  
                        placeholder="gif" 
                        onChange={e => this.changeHandler(e)} 
                        value={this.state.search} />
                    <input type="submit" value="search"/>
                </form>
            </div>
        );
    }
}

export default GifSearch;
