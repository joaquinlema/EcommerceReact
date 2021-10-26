import React from 'react'

const DetailPage = ({ match }) => {

    const {params: { id }} = match;

    return (
        <div>
            {id}            
        </div>
    )
}

export default DetailPage;
