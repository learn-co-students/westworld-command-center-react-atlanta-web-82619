import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  return(
    <Segment id="details" className="HQComps">
      {props.highlightedHost.length === 0 
        ? <Image size='medium' src={Images.westworldLogo}/> 
          : <HostInfo 
              host={props.highlightedHost}
              areas={props.areas}
              handleToggle={props.handleToggle} 
              handleDropdownSelection={props.handleDropdownSelection}
            />}
    </Segment>
  )
}

export default Details
