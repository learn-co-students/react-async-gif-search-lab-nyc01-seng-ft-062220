import React from 'react'

class GifSearch extends React.Component{

    state = {
        searchTerm: ""
    }
    
    changeHandler = e => {
        this.setState({ searchTerm: e.target.value })
    }

    submitHander = e => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm) //passing up to parent this child's state
        this.setState({ searchTerm: ""}) //on submit clear the searchTerm
    }


    render(){
        return( 
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="search here" value={this.state.searchTerm} onChange={this.changeHandler}/>
                <input type="submit" value="search" />
            </form>
        )
    }

}

export default GifSearch