import '../stylesheets/HostInfo.css'
import React from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


const HostInfo = (props) => {
  const options = props.areas.map(area => ({
    key: area.name,
    value: area,
    text: area.titledName
  }))

  function handleChange(e, newArea, host) {
    props.handleDropdownSelection(newArea, host)
  }

  function toggle() {
    props.handleToggle(props.host)
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={props.host.imageUrl}
          floated='left'
          size='small'
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {props.host.firstName} | {props.host.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={toggle}
                label={props.host.active ? "Active" : "Decommissioned"}
                checked={props.host.active}
                slider
              />
            </Card.Meta>

            <Divider />
            Current Area:
            <Dropdown
              onChange={(e, newArea) => handleChange(e, newArea.value, props.host)}
              // value={props.host.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo
