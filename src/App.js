import React, { Component } from 'react'

// custom components
import Loading from './components/Loading'
import Tile from './components/Tile'

// styling
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          isLoaded: true,
          items: response.Search,
        })
      })
  }

  render() {
    const { isLoaded, items } = this.state
    if (!isLoaded) {
      return <Loading />
    } else {
      return (
        <div class='App'>
          <div class='wrapper'>
            {items.map((items) => (
              <Tile colour='purple' size='small'>
                {items.Title}
              </Tile>
            ))}
          </div>
        </div>
      )
    }
  }
}

export default App
