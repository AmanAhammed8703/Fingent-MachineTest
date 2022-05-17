import React from 'react'
import { Form ,Button, Container, Row, Col} from 'react-bootstrap'
function RemoveItem({count}) {
    console.log(count);
    const mapArray=[]
    for(let i=0;i<count;i++){
        mapArray.push(i)
    }
    
    console.log(mapArray)
  return (
    <div>
        
    <Container>
        <Row className='mt-5'>
        <Col>
            </Col>
            <Col>
            <Form.Label htmlFor="itemCount" className='itemCountLabel'>Product code:</Form.Label>
            </Col>
            <Col>
            <Form.Label htmlFor="itemCount" className='itemCountLabel'>Quantity:</Form.Label>
            </Col>
            <Col>
            </Col>
            
        </Row>
        {mapArray.map(()=>

            <Row className='mt-4'>
                <Col>
            </Col>
            <Col>
                <Form.Control
                    type="number"
                    id="itemCount"
                    aria-describedby="passwordHelpBlock"
                    className='add-item'
                />
                </Col>
               
            <Col>
                <Form.Control
                    type="number"
                    id="itemCount"
                    aria-describedby="passwordHelpBlock"
                    className='add-item'
                    />
                </Col>

                <Col>
            </Col>
                
                </Row>
        
    )}
            </Container>
                <Button variant="primary" className=' mb-5 next-button'>Next</Button>

</div>
  )
}

export default RemoveItem