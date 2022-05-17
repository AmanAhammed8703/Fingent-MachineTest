import React from 'react'
import './Styles/TabsArray.css'
import { useNavigate } from 'react-router-dom'
import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap'
function TabsArray({ action }) {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" >
        <Container >
          <ButtonGroup size="lg" className='button-group'>
            <Button className={action === "add" ? "mb-2 buttons active" : "mb-2 buttons"} onClick={() => navigate('/')} >Add Product</Button>
            <Button className={action === "remove" ? "mb-2 buttons active" : "mb-2 buttons"} onClick={() => navigate('/removeitem')}>Remove Products</Button>

            <Button className={action === "list" ? "mb-2 buttons active" : "mb-2 buttons"} onClick={() => navigate('/listitem')}>List Products</Button>
          </ButtonGroup>
        </Container>
      </Navbar>
    </div>
  )
}

export default TabsArray 