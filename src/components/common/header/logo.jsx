import { config } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavbarBrand } from 'react-bootstrap'

export const Logo = ({ theme = 'dark' }) => {
  return (
    <NavbarBrand href="/" as={Link}>
        <Image src={`/img/logos/logo-${theme}.png`} width={208} height={48} alt={config.project.name}/>
    </NavbarBrand>
  )
}
