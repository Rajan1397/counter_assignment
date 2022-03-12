import React from 'react'

import child from "./child";

const parent = () => {
    return (
        <>
        <h1>Parent Components</h1>

        <child values= {{name: "Rajan"}} />
        
        <child>
<div>Props can be isnerted this way</div>

<div>blahhh</div>
        </child>


        </>
    )
}