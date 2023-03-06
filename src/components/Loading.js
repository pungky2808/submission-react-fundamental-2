import React from "react";
import { TailSpin } from 'react-loader-spinner';

function Loading() {
    return (
        <div className='load'>
            <TailSpin color='#202124' wrapperClass='load'/>
            <p>Loading...</p>
        </div>
    )
}

export default Loading;