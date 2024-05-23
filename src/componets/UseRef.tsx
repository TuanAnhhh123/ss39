import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount]=useState<number>(0);
    let index =0;
    // const ref=useRef<number>(1);
       const refCurrent=useRef<HTMLInputElement>(null); 
    refCurrent.current?.focus();
    useEffect(()=>{
        refCurrent.current?.focus();
    },[])
    // let a={
    //     number:1
    // }

    /**
     * useRef là 1 hàm nhận vào tham số là giá trị khởi tạo
     * useRef() trả về 1 đối tượng hay 1 object, bên trong object này sẽ 
     * có 1 key(current) với giá trị tham số truyền vào!
     * khi mỗi lần component re-render thì useRef sẽ không tạo ra tham 
     * chiếu mới
     * khi muốn focus vào ô input khi muốn nhập dữ liệu
     */
    
    const handleClick=()=>{
        // ref.current=ref.current +1;
        // a.number=++a.number
        index++;
        console.log("giá trị index khi click",index);
        
        setCount(count+1);
    }
    // console.log("giá trị a",a);
        // console.log("giá trị ref sau khi click",ref);

  return (
    <div>UseRef
        <p>giá trị count : {count}</p>
        <button onClick={handleClick}>Click</button>
        <input 
            ref={refCurrent}
            type="text" 
            placeholder='Nhập email' 
        />
    </div>
  )
}
