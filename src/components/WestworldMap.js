import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {
  return (
    <Segment id="map" >
      {props.areas.map(area => <Area 
                                  area={area}
                                  key={area.name}
                                  selectHost={props.selectHost} 
                                  hosts={props.hosts.filter(host => host.area === area.name)}
                                />)}
    </Segment>
  )
}

export default WestworldMap
