import React from 'react'


class GifList extends React.Component {

    item = () => {
        //map throgh array of gifs and render a li for each one
        //console.log(this.props.card)
        return this.props.card.map(gifObj => { 
        //console.log(gifObj)
        <div>
        <li> 
            <img src={gifObj}/> 
        </li> 
        </div>
        })
    }

    componentDidMount(){
        return(<div>
        <ul>
           {this.item()} 
        </ul>
      </div>
        )
    }

    render() {
        return("brandon") 
    }
       
    

}   
    //     return (
    //         <div>
    //           <ul>
    //              {this.item()} 
    //           </ul>
    //         </div>
    //     )
    // }


export default GifList
