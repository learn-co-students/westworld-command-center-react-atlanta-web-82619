import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return (
    <Card
      id={props.host.firstName}
      className="host"
      onClick={e => props.selectHost(e, props.host)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
