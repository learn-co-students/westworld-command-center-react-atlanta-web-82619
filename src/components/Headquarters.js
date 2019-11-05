import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage 
            hosts={this.props.hosts} 
            selectHost={this.props.selectHost}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details 
            areas={this.props.areas}
            highlightedHost={this.props.highlightedHost} 
            handleToggle={this.props.handleToggle} 
            handleDropdownSelection={this.props.handleDropdownSelection}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel 
            buttonClicked={this.props.buttonClicked} 
            handleButton={this.props.handleButton}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
