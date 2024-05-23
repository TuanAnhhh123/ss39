import React from 'react'

export default function Memo() {
  return (
    <div>Memo
         {/* 
         memo đây ko phải là hook
         đc gọi là HOC (higher order component):hàm bậc cao
         memoo cơ chế hoạt động là sẽ đi kiểm tra xem trong component
         có props nào thay đổi hay không ? Nếu thay đổi thì component
         sẽ re-render,còn ko thì sẽ ko re-render
         */}
    </div>
  )
}
