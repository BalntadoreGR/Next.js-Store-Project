import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { RxColorWheel } from "react-icons/rx";

function Logo() {
  return (
    <Button size="icon" asChild>
        <Link href='/'>
            <RxColorWheel className='w-8 h-8'/>
        </Link>
    </Button>
  )
}

export default Logo
