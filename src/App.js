import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const HOSTS = 'http://localhost:4000/hosts'
const AREAS = 'http://localhost:4000/areas'


class App extends Component {
  constructor() {
    super()
    this.state = {
      hosts: [],
      areas: [],
      highlightedHost: [],
      buttonClicked: false
    }
  }

  componentDidMount() {
    fetch(HOSTS)
    .then(response => response.json())
    .then(data => {
      this.setState({
        hosts: data
      })
    })

    fetch(AREAS)
    .then(response => response.json())
    .then(data => {
      let modifiedNames = data.map(area => {
        let modName = (area.name.split("_").map(txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(" "))
        return {...area, titledName: modName}
      })
      this.setState({
        areas: modifiedNames
      }, () => console.log(this.state))
    })
  }

  selectHost = (e, hostInfo) => {
    let squares = e.currentTarget.parentElement.children

    if (e.currentTarget.className.length === 19) {
      e.currentTarget.className = 'ui raised card host selected'
    } else {
      e.currentTarget.className = 'ui raised card host'
    }
    
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].id !== hostInfo.firstName) {
        squares[i].className = 'ui raised card host'
      }
    }

    this.renderHostDetails(hostInfo)
  }

  renderHostDetails = (hostInfo) => {
    if (hostInfo !== this.state.highlightedHost) {
      this.setState({
        highlightedHost: hostInfo
      })
    } else {
      this.setState({
        highlightedHost: []
      })
    } 
  }

  handleDropdownSelection = (newArea, host) => {
    let hosts = [...this.state.hosts].map(h => h.id === host.id ? h.area = newArea.name : h.area)

    this.setState({
      hosts: hosts,
      highlightedHost: host
    })
  }

  handleToggle = (host) => {
    let hosts = [...this.state.hosts].map(h => h.id === host.id ? h.active = !host.active : h.active)

    this.setState({
      hosts: hosts,
      highlightedHost: []
    })
  }

  handleButton = (e) => {
    if (e.target.innerText === "ACTIVATE ALL") {
      this.setState({
        ...this.state.hosts.map(h => h.active = true),
        buttonClicked: true
      })
    } else {
      this.setState({
        ...this.state.hosts.map(h => h.active = false),
        buttonClicked: false
      })
    }
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap 
          areas={this.state.areas} 
          hosts={this.state.hosts} 
          selectHost={this.selectHost} 
        />
        <Headquarters 
          hosts={this.state.hosts}
          areas={this.state.areas}
          buttonClicked={this.state.buttonClicked} 
          selectHost={this.selectHost} 
          highlightedHost={this.state.highlightedHost} 
          handleButton={this.handleButton} 
          handleToggle={this.handleToggle} 
          handleDropdownSelection={this.handleDropdownSelection}
        />
      </Segment>
    )
  }
}

export default App;