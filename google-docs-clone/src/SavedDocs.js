import React, { useEffect, useState } from 'react';
import DocView from "./DocView";

function SavedDocs() {
    const API = `http://localhost:8000/api/docs`;
    const [docs,setDocs] = useState();
    useEffect(()=>{
        fetch(API)
            .then(res => res.json())
            .then(data => setDocs(data))
    },[])
    if(docs?.length == 0){
        return(
            <div>
                loading....
            </div>
        )
    }
    return (
        <div>
            {
                docs?.map(doc =>(
                    <div>
                      <DocView id={doc._id} data={doc.data} />
                    </div>
                    
                ))
            }
        </div>
    )
}

export default SavedDocs
