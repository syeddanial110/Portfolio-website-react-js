import React, { useState } from 'react'

const CustomSliderChange = () => {
    const [value, setValue] = useState(50)

    const handleChanger= (event)=>{
        setValue(event.target.value);
    }
    return (
        <>
            <h2>{value}</h2>
            <input type="range" defaultValue={value} onChange={handleChanger} step={10} />
        </>
    )
}

export default CustomSliderChange
