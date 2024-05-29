import React from 'react'
import { Menu } from 'lucide-react'

type ToggleVoid = {
  handleToggle: () => void;
}
const Toggle = ({ handleToggle }: ToggleVoid) => {
  return (
    <div className='bg-transparent p-2 rounded' onClick = { handleToggle }>
      <Menu className='h-5 text-white' />
    </div>
  )
}

export default Toggle
