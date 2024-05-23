import React, { memo } from 'react'
interface Props{
    count:boolean
}

function Header(props:Props) {
    console.log("giá trị biến count ở bên component app!");
    
  return (
    <div>Header
        <p>giá trị count :{props.count}</p>
    </div>
  )
}
export default memo(Header);
