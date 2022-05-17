import React from 'react'
import './Styles/TabsArray.css'
import{ useNavigate} from 'react-router-dom'
import {Navbar,Container,ButtonGroup,Button} from 'react-bootstrap'
function TabsArray({action}) {
  const navigate=useNavigate()
  return (
    <div>
     <Navbar expand="lg" variant="light" bg="light" >
  <Container >
  <ButtonGroup size="lg" className='button-group'>
    {action==="add"?<Button className="mb-2 buttons" active>Add Product</Button>:<Button className="mb-2 buttons">Add Product</Button>}
    {action==="remove"?<Button className="mb-2 buttons" active>Remove Products</Button>:<Button className="mb-2 buttons">Remove Products</Button>}
    
    <Button className="mb-2 buttons">List Products</Button>
  </ButtonGroup>
  </Container>
</Navbar>
    </div>
  )
}

export default TabsArray 