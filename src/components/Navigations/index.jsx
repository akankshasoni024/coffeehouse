import React from 'react'

import {
    Routes,
    Route
} from "react-router-dom";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
        </Routes>
    )
}

export default Navigation