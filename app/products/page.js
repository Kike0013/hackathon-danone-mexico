"use client"

import { useState } from "react"
import CalorieForm from "../components/products/CalorieForm"
import ProductList from "../components/products/ProductList"

const Products = () => {

    const [formCompleted, setFormCompleted] = useState(false)

    return (
        <div>
            {!formCompleted ? <CalorieForm setFormCompleted={setFormCompleted} /> : <ProductList />}
        </div>
    )
}

export default Products