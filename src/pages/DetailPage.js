import React from 'react'

const DetailPage = ({ match }) => {

    const {params: { Id }} = match;

    return (
        <div>
            {Id}            
        </div>
    )
}

export default DetailPage;
