import React from 'react'
import { Menu, X } from 'lucide-react'

type ToggleVoid = {
  toggle: Boolean,
  handleToggle: () => void;
}
const Toggle = ({ handleToggle, toggle }: ToggleVoid) => {
  return (
    <div className='p-2 rounded' onClick = { handleToggle }>
      {
        toggle === false ? (
            <Menu className='h-8 w-8 cursor-pointer text-white' onClick = { handleToggle } />
        ) : (
            <X className='h-8 w-8 cursor-pointer text-white' onClick = { handleToggle } />
        )
      }
    </div>
  )
}

export default Toggle
