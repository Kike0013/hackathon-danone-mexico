import React from 'react'

const KcalInput = ({ label, setSum, sum, value }) => {

    return (
        <div className="flex justify-between items-center border rounded-md bg-d-light-blue p-3 px-5">
            <label>{label}</label>
            <input onChange={(e) => setSum({ ...sum, [value]: Number(e.target.value) })} type="number" className="border border-2 rounded-lg w-24 p-4" />
        </div>
    )
}

export default KcalInput