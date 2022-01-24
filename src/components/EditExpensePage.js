import React from "react";
import { useParams } from 'react-router-dom'

const EditExpensePage = () => {
    const { id } = useParams()
    return (
        <div>
            Editing the expenses with the id of {id}
        </div>
    )
}

export default EditExpensePage