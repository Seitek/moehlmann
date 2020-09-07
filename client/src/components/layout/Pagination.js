import React from 'react';
//import { PaginationProvider } from 'react-bootstrap-table2-paginator';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    };

    if (Math.ceil(totalPosts / postsPerPage) === 1){
        return(
            <nav></nav>
        );
    } else {
        return(
            <nav>
                <div class="btn-group mt-3" role="group" aria-label="Basic example">
                    {pageNumbers.map(number => (
                        <button key={number} type="button" class="btn btn-light" onClick={() => paginate(number)}>{number}</button>
                        
                    ))}
                </div>
            </nav>
        )
    }

  
}

export default Pagination