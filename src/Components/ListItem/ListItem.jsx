import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { ProductsContext } from '../../Context/ProductsContext/ProductsContext'
import './Styles/ListItem.css'
function ListItem() {
    const { products, setProducts } = useContext(ProductsContext)
    const items = []
    for (let i in products) {
        items.push(i)
    }
    return (
        <div className='mb-5 outer-div'>
            <Table hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product code</th>
                        <th>Poduct Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((code, index) =>

                        <tr>
                            <td>{parseInt(index) + 1}</td>
                            <td>{code}</td>
                            <td>{products[code].name}</td>
                            <td>{products[code].quantity}</td>
                        </tr>
                    )}


                </tbody>
            </Table>
        </div>
    )
}

export default ListItem