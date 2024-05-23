import React, { useReducer, useState } from 'react'

export default function UseReducer() {
    const [count,setCount]=useState<number>(0);
    let initial={
        product:{},
        products:[],
        isLoading:false,
    }
    const reducer=(state1:any,action:any)=>{
        switch (action) {
            case "increase":
                return state1+1
        
            default:
                return state1;

    }

    let initialCount=0;
    const [state,dispatch] = useReducer(reducer,initialCount);
    // destructoring
    const handleClick=()=>{
        dispatch("increase")
    }
    
  return (
    <div>UseReducer 
        {/* đây là 1 hook hay còn gọi là hàm
        dùng để quản lý các state phức tạp
        đối với những state đơn giản thì có dùng useReducer đc ko ? ==>đc   
        nhưng mà các state đơn giản thì nên dùng usestate
        đầu vào useReducer nhận vào hai tham số 
            +tham số thứ 1 là 1 cái hàm reducer-đặt têm j cũng đc
            +tham số thứ 2 là 1 giá trị khởi tạo
            nắm đc luồng chạy của useReducer bài học sau sẽ học redux(thư viện quản lý state.)
        */}
        <p>giá trị biến count :{state}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
}