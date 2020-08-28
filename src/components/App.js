import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

class App extends React.Component{
  render(){
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          <GifListContainer />
      </div>
    )
  }
}


export default App



//"https://api.giphy.com/v1/gifs/search?q=panda&api_key=9DbSABWzk2jhgAw5LaSDweGnJjPXuCt0&rating=g"
//https://api.giphy.com/v1/gifs/search?q={USERINPUT}&api_key=9DbSABWzk2jhgAw5LaSDweGnJjPXuCt0