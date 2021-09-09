import React from 'react';
import NotFound from 'assets/img/icons/404.png'

function notFoundPage(){

    return(

        <div className="not-found-container">
            <img src={NotFound} alt="Not Found 404" />
            <h2>Page not found</h2>
            <p>Sorry, we couldn't find the page you are looking for</p>
        </div>
    )
}

export default notFoundPage;