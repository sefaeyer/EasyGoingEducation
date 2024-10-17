import { config } from '@/helpers/config'
import React from 'react'
import { Container } from 'react-bootstrap'
import './topbar.scss'

export const Topbar = () => {
  return (
    <div className='topbar'>
        <Container>
            <div className="slogan">
                <i className='pi pi-megaphone'></i> {config.project.slogan}
            </div>

            Login
        </Container>
    </div>
  )
}
