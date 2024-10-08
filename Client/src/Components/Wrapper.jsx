import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='bg-slate-200 h-[100vh] max-w-6xl mx-auto'>{children}</div>
  )
}

export default Wrapper