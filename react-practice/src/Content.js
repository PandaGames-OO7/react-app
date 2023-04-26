import React from 'react'
const content = () => {
    const nameHandler = () =>{
        const names = ['sanju', 'suraj', 'sanju '];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
  return (
    <main>
        Hello {nameHandler()}
    </main>
  )
}

export default content