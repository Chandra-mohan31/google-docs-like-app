import React from 'react'

function DocView({id,data}) {
    return (
        <div>
            
                <a href={`/documents/${id}`} target="_blank">{id}</a>
            
        </div>
    )
}

export default DocView
