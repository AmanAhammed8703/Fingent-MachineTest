import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/TabsArray.css'
import {Navbar,Container,ButtonGroup,Button} from 'react-bootstrap'
function TabsArray() {
  return (
    <div>
     <Navbar expand="lg" variant="light" bg="light" >
  <Container >
  <ButtonGroup size="lg" className='button-group'>
    <Button className="mb-2 buttons" active>Add Product</Button>
    <Button className="mb-2 buttons">Remove Products</Button>
    <Button className="mb-2 buttons">List Products</Button>
  </ButtonGroup>
  </Container>
</Navbar>
    </div>
  )
}

export default TabsArray 