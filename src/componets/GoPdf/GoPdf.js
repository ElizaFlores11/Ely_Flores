import React from 'react';

const GoPdf = () =>{
    return(
        <div style={{position:"absolute", width:"100%", height:"100%"}} >
            <object
            data={require('../../docs/ElizabethFlores.pdf')}
            type="application/pdf"
            width="100%"
            height="100%"
            >
            </object>
        </div>
    )
}
export default GoPdf;