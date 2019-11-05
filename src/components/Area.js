import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => (
  <div className='area' id={props.area.name}>
    <h3 className='labels'>{props.area.titledName}</h3>
    <HostList 
      hosts={props.hosts.filter(host => host.active) } 
      selectHost={props.selectHost}
    />
  </div>
)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.area.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.area.name}. The limit for that area is ${props.area.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
