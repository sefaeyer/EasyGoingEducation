import Link from 'next/link'
import React from 'react'

export const GuestMenu = () => {
  return (
    <Link href="/login" className="btn btn-primary">
        <i className="pi pi-user"></i> Login</Link>
  )
}