import React from 'react'
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <section id='section6'>
       <footer>
          
            <div className="flex flex-col items-center justify-center text-[#A8B2D1] pb-6">
                <h3>Oludamola Ijimade</h3>
            <div className="flex gap-8 pt-10">
              <a href="http://github.com/kaddesh" className="twitter"><FaGithub size={25}/> </a>
              <a href="https://x.com/KKaddesh?t=HVQ50nIp6-NF94K9pQyW8g&s=09" className="twitter">
                    <FaTwitter size={25} />
                  </a>
              <a href="https://www.linkedin.com/in/oludamola-ijimade-3a341a1b3" className="linkedin">
                  <FaLinkedinIn size={25} />
                </a>
                
                <a href="https://www.facebook.com/ijimadeoluwadamola.david?mibextid=ZbWKwL" className="facebook">
                  <FaFacebookF size={25} />
                </a>
                <a href="https://www.instagram.com/kkaddesh?igsh=ZGUzMzM3NWJiOQ==" className="instagram">
                  <FaInstagramSquare size={25} />
                </a>
              </div>
            </div>
        </footer>
    </section>
  )
}
