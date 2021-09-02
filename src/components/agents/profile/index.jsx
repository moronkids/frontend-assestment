import React from 'react';
import Section_1 from './parts/section_1';
import Section_2 from './parts/section_2';
import Section_3 from './parts/section_3';



function index(){
    return(
        <div className="profile">
                <Section_1/>
                <hr />
                <Section_2/>
            
                <Section_3/>
            </div>
       
    )
}

export default index;