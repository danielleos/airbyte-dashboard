import React, { Component } from 'react'

// assets
import logo from './assets/logo-BK.png'

// custom components
import Loading from './components/Loading'
import Tile from './components/Tile'
import Graph from './components/Graph'
import TitleAndScore from './components/TitleAndScore'

// helpers
import getYear from './helpers/getYear'
import getScoreBreakdown from './helpers/getScoreBreakdown/getScoreBreakdown'

// styling
import './App.css'
import Search from './components/Search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      scores: {},
    }
  }

  componentDidMount() {
    let request;
    // This should be a search
    const searchTerm = 'Boku no Hero Academia'
    // would then grab the mal_id from the response and...
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=5`)
      .then((searchResponse) => searchResponse.ok ? searchResponse.json() : Promise.reject(searchResponse))
      .then((searchData) => {
        request = searchData.results
        this.setState({
          items: request,
        })
        // ...carry out another API call on that id here for additional stats
        const id = request[0].mal_id
        return fetch(`https://api.jikan.moe/v3/anime/${id}/stats`)
      })
      .then((statsResponse) => statsResponse.ok ? statsResponse.json() : Promise.reject(statsResponse))
      .then((statsData) => {
        this.setState({
          isLoaded: true,
          scores: statsData.scores,
        })
      }
    )
  }


  render() {  
    const { isLoaded, items, scores } = this.state
    const scoreData = getScoreBreakdown(scores)
    if (!isLoaded) {
      return <Loading />
    } else {
      return (
        <div class='wrapper'>
          <div class='row' id='logo'><img class='logo' src={logo} alt='Anime Stats Logo'/></div>
          <div class='row' id='search'>
            <Search />
          </div>
          <div class='row' id='results'>
            <TitleAndScore title={items[0].title} score={items[0].score} />
            <div id='poster-and-tiles-and-graph'>
              <div id='poster'><img src={items[0].image_url} alt={`${items[0].id}-poster`}/></div>
              <div id='tiles-and-graph'>
                <div id='tiles'>
                  <Tile colour='orange' tileTitle='Number of Episodes' content={items[0].episodes} />
                  <Tile colour='purple' tileTitle='Year First Released' content={getYear(items[0].start_date)} />
                </div>
                <div id='graph'>
                  <Graph data={scoreData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App
