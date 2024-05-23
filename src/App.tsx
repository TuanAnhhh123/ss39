import React, { useCallback, useState } from 'react'
import UseRef from './components/UseRef' 
import Header from './components/Header'
import Main from './components/Main'
import UseReducer from './components/UseReducer';
import B1 from './components/B1'
import B2 from './components/B2'
import B3 from './components/B3'
import B4 from './components/B4'
import B5 from './components/B5'
import B6 from './components/B6'

export default function App() {
  const [active,setActive]=useState<boolean>(false);
  const [count,setCount]=useState<number>(0)
  const handleClick=()=>{
    // setActive(!active);
    setCount(count+1);
  }
  const getIdProduct=()=>{

  }
  let result = useCallback(()=>{
    const getIdProduct=()=>{

    }
    return getIdProduct;
  },[])
  console.log("component App re-render khi click!");
  /**
   * Khi component App đc re-render thì các component con cũng đc re-render theo
   */
  /**
   * nếu active là true thì hiển thị thẻ p với nội dung là xin chào
   * nếu active là false thì không hiển thị j cả
   */
  return (
    <div>App
      {active ? <p>Xin Chào</p>:"" }

      <UseRef></UseRef>
      <Header count={active}></Header>
      <Main getIdProduct={result}></Main>
      <UseReducer></UseReducer>
      <button onClick={handleClick}>click active</button>
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5></B5>
      <B6></B6>
    </div>
  )
}

