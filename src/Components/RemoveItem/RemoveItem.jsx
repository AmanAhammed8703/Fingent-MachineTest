import React, { useContext, useState } from 'react'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { ProductsContext } from '../../Context/ProductsContext/ProductsContext';
import './Styles/RemoveItem.css'
function RemoveItem({ count }) {
    const { products, setProducts } = useContext(ProductsContext)
    const [error, setError] = useState("")
    const [removeData, setRemoveData] = useState({})
    console.log(count);
    const mapArray = []
    for (let i = 0; i < count; i++) {
        mapArray.push(i)
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setRemoveData({ ...removeData, [name]: value })
    }
    const submitData = () => {
        let errorMessage = ""
        console.log(removeData);
        for (let i = 0; i < count; i++) {
            if (products[removeData[i + "-code"]]) {
                console.log("hell");
                if (products[removeData[i + "-code"]].quantity < removeData[i + "-quantity"]) {
                    console.log("hello");
                    products[removeData[i + "-code"]].quantity = 0
                } else {
                    products[removeData[i + "-code"]].quantity = parseInt(products[removeData[i + "-code"]].quantity) - parseInt(removeData[i + "-quantity"])

                }

            } else {
                errorMessage += " " + removeData[i + "-code"]
            }
        }
        if(errorMessage){

            setError(`${errorMessage} are invalid `)
        }
    }
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
                <p className='errorMessage'>{error}</p>
                {mapArray.map((i) =>

                    <Row className='mt-4'>
                        <Col>
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                id="itemCount"
                                name={`${i}-code`}
                                aria-describedby="passwordHelpBlock"
                                className='add-item'
                                onChange={handleOnChange}
                            />
                        </Col>

                        <Col>
                            <Form.Control
                                type="number"

                                name={`${i}-quantity`}
                                aria-describedby="passwordHelpBlock"
                                className='add-item'
                                onChange={handleOnChange}
                            />
                        </Col>

                        <Col>
                        </Col>

                    </Row>

                )}
            </Container>
            <Button variant="primary" className=' mb-5 next-button' onClick={submitData}>Remove</Button>

        </div>
    )
}

export default RemoveItem