import React from 'react'


class GifList extends React.Component {

    item = () => {

        return this.props.card.map((gifObj) =>  <li> <img alt="flatiron" src={gifObj}></img> </li> )

    }
     

    render() {
        
        return(<div>
            <ul>
               {this.item()} 
            </ul>
          </div>
        )
    }
       
    

}   
    
export default GifList