import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-3 bg-gray-700 text-neutral-content footer-center'>
      <div>
        <p>Copyright &copy; {footerYear} - All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
