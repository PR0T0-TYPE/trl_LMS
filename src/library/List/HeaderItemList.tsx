
import React from 'react'

function HeaderItemList({itemlist, HeaderItemList=null}) {
    return (<>
      <div>
          {HeaderItemList.map((item, i)=>(
              <div key={i}>
            <h1>{item.Name}</h1>
              </div>
          ))}
      </div>
      <div>
          {itemlist.map((item, i)=>(
              <div key={i}>
            <h1>{item.Name}</h1>
              </div>
          ))}
      </div>
      </>
    )
  }

export default HeaderItemList