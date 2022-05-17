import React from 'react'
import {Table} from 'react-bootstrap'
import './Styles/ListItem.css'
function ListItem() {
  return (
    <div className='mb-5 outer-div'>
        <Table   hover >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
    
  </tbody>
</Table>
    </div>
  )
}

export default ListItem