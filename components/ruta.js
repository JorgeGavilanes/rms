"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
  
export default function GetRoute() {
    // Calling useRouter() hook
    const pathname = usePathname()
    return ( pathname == '/' )
}