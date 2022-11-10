import React from 'react'

const Button = ({label}) => {

  return (
    <div className="'items-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{label}</button>
    </div>
  )
}

export default Button
