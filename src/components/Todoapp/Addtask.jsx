import React, { useState } from 'react';

const Addtask = ({ addtask }) => {
    const [value, setvalue] = useState("");

    const addItem = () => {
        addtask(value);
        setvalue("");  // Clear the input after adding the task
    };

    const handleInputChange = (e) => {
        setvalue(e.target.value);
    };

    return (
        <>
            <div className='input-cont'>
                <input
                    type="text"
                    className='input'
                    placeholder='Add a Task'
                    value={value}
                    onChange={handleInputChange}
                />
                <button className='bttnn' onClick={addItem}>ADD</button>
            </div>
        </>
    );
};

export default Addtask;
