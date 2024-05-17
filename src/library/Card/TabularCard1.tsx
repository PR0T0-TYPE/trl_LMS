
import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import TabulerCard from '../List/TabularList1'


function TabulerList1({ ItemList, clickEdit, Submit, Delete , IsEnquiry = false,Submit1=undefined}) {
    return (
        <div>
            {ItemList.length == 0 ? <ErrorMessage error={'No records found'} /> :
                <>
                    {ItemList.map((Item, i) => {
                        return (
                            <div key={i}>
                                <TabulerCard item={Item} 
                                clickEdit={clickEdit} 
                                Submit={Submit} 
                                Delete={Delete} 
                                Submit1={Submit1} 
                                IsEnquiry={IsEnquiry}/>
                            </div>
                        )
                    })}

                </>
            }
        </div>
    )
}

export default TabulerList1