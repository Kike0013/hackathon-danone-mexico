"use client"

const Product = ({ name, imageUrl, kcal }) => {
    return (
        <div className="border w-96 shadow-md hover:shadow-xl">
            <img className="p-5 object-contain h-96 w-96" src={`${imageUrl}`} alt="product" />
            <div className="px-3 pb-3 flex justify-between">
                <div>
                    <h1>{name}</h1>
                    <p>{kcal} Kcal</p>
                </div>
                <div className="align-middle flex">
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Product