import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value }, console.log(this.state))
    }

    
    render() { 
        return(
            <div>
                <form onSubmit={(e)=> {this.props.submitHandler(e, this.state.searchTerm)}} >
                    <input name='searchTerm' type="text" placeholder="Search term" onChange={this.changeHandler} value={this.state.searchTerm}/>
                    <input type="Submit"></input>
                </form>
            </div>


        )}

}

export default GifSearch