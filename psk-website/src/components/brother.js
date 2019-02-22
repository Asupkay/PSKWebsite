import React from 'react';
import { List, Popup} from 'semantic-ui-react';

const headerStyle = {
  display: 'inline'
}

const Brother = (props) => {
  const { brother } = props;
  if(typeof props.brother == "string") {
    return <List.Item> { brother } </List.Item>
  } else {
    return <Popup
      trigger={ <List.Item> { brother.name } </List.Item> }
      header={brother.name}
      content={ <List>
        <List.Item><List.Header style={ headerStyle }>Major: </List.Header>{ brother.major }</List.Item>
        <List.Item><List.Header style={ headerStyle }>Mug Name: </List.Header>{ brother.mugName }</List.Item>
        <List.Item><List.Header style={ headerStyle }>Grad Year: </List.Header>{ brother.gradYear }</List.Item>
      </List> }
      position = 'top center'
    />
  }

}

export default Brother;
