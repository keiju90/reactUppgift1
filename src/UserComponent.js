import React from 'react';

/**
  * @desc class Usercomponent - displays one user in a li.
  * Props - user and colors from state in dashboard component. 
*/
export default function UserComponent(props) {
  var child= props.children
  var color = props.color
  
  return (
    <div style={{color: color, padding: '0'}}>
      <li style={{ listStyleType: "none"}}>{child}</li>
    </div>
  )
}
