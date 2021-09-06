import React from 'react';
import Section1 from './parts/section_1';
import Section2 from './parts/section_2';
import Section3 from './parts/section_3';



function index() {
    return (
      
        <div className ="profile">
            <Section1 />
            <hr />
            <Section2 />
            <Section3 />
        </div>
       
        

    )
}

export default index;