import React from 'react'
import './Dock.scss'

const dock = () => {
  return (
    <footer className='dock'>
        <div className='icon calendar'><i class="ri-calendar-line"></i></div>
        <div className='icon github'><i class="ri-github-line"></i></div>
        <div className='icon link'><i class="ri-link"></i></div>
        <div className='icon note'><i class="ri-sticky-note-add-line"></i></div>
        <div className='icon mail'><i class="ri-mail-line"></i></div>
        <div className='icon pdf'><i class="ri-file-pdf-line"></i></div>
        <div className='icon spotify'><i class="ri-spotify-line"></i></div>
    </footer>
  )
}

export default dock
