import { buttonType } from '@/types'
import React from 'react'

function Button({variant, text, icon}: buttonType) {
  return (
    <button className={`bg-secondary flex items-center gap-2 text-white px-5 py-2 rounded-md`}>
        {text}
        {icon}
    </button>
  )
}

export default Button
