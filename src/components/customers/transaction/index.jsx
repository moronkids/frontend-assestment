import React from 'react'
import { useParams } from 'react-router';
import ChooseTransaction from './parts/ChooseTransaction';
import FormTransaction from './parts/FormTransaction';

function Transaction() {
    const { type } = useParams()
    return (
        <>
            <div className="d-block w-100">
                <ChooseTransaction />
                {/* {
                    type === null ?
                        () : (<div className="d-flex justify-content-center">
                            <FormTransaction />
                        </div>)
                } */}
            </div>
        </>
    )
}

export default Transaction;
