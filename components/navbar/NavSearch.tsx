import React from 'react'
import { Input } from '../ui/input'

function NavSearch() {
  return (
    <div>
      <Input type='search' placeholder='Search product' className='max-w-xs dark:bg-muted'/>
    </div>
  );
}

export default NavSearch
