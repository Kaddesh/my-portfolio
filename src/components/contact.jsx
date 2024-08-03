import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { z } from 'zod';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaShareAlt, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import AnimateInView from './animate';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors = result.error.format();
      setFormErrors(errors);
    } else {
      emailjs.sendForm('service_9zm4255', 'template_y5w8va6', e.target, 'IBiPx1_Z_Z8_YIQ0H')
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setFormErrors({});
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <section id="section6" className=" mx-5 lg:mb-20 mt-40 lg:mt-60 text-[#A8B2D1]">
      <div className="lg:px-20">
        <AnimateInView initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col lg:items-center lg:justify-between">
            <h1 className='text-2xl xl:text-3xl '>Need more info?</h1>
            <h1 className='text-xl xl:text-2xl mt-5 text-[#ADEFD1FF]'>Contact me!</h1>
          </div>
        </AnimateInView>

        <div className="grid lg:grid-cols-2 items-center gap-10 mt-10">
          <AnimateInView transition={{ duration: 0.6 }}>
            <div className="flex items-center text-lg px-5 py-2 lg:p-5 w-full bg-[rgba(255,255,255,0.08)]">
              <div className='w-12 lg:w-16 h-12 lg:h-16 rounded-[50%] bg-[rgba(255,255,255,0.08)] flex items-center justify-center'>
                <FaLocationDot className="text-[#ADEFD1FF] hover:text-[#42EADDFF]"/>
              </div>
              <div className='block space-y-1 pl-5 text-2xl'>
                <h3>My Address</h3>
                <p className='text-sm'>17 Akobo Ibadan, Nigeria</p>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex">
              <div className="flex items-center text-lg  px-5 py-2 lg:p-5 w-full bg-[rgba(255,255,255,0.08)]">
                <div className='w-12 lg:w-16 h-12 lg:h-16 rounded-[50%] bg-[rgba(255,255,255,0.08)] flex items-center justify-center'>
                  <FaShareAlt className="text-[#ADEFD1FF] hover:text-[#42EADDFF]" />
                </div>
                <div className='block space-y-1 pl-5 text-2xl'>
                  <h3>Social Profiles</h3>
                  <div className="flex gap-2 text-sm">
                  <a
              href="https://x.com/KKaddesh?t=HVQ50nIp6-NF94K9pQyW8g&s=09"
              className="twitter"
            >
              <FaTwitter  />
            </a>
            <a
              href="https://www.linkedin.com/in/oludamola-ijimade-3a341a1b3"
              className="linkedin"
            >
              <FaLinkedinIn  />
            </a>

            <a
              href="https://www.facebook.com/ijimadeoluwadamola.david?mibextid=ZbWKwL"
              className="facebook"
            >
              <FaFacebookF  />
            </a>
            <a
              href="https://www.instagram.com/kkaddesh?igsh=ZGUzMzM3NWJiOQ=="
              className="instagram"
            >
              <FaInstagramSquare  />
            </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView transition={{ duration: 0.6 }}>
            <div className="flex items-center text-lg px-5 py-2 lg:p-5 w-full bg-[rgba(255,255,255,0.08)]">
              <div className='w-12 lg:w-16 h-12 lg:h-16 rounded-[50%] bg-[rgba(255,255,255,0.08)] flex items-center justify-center'>
                <MdOutlineEmail className="text-[#ADEFD1FF] hover:text-[#42EADDFF]" />
              </div>
              <div className='block space-y-1 pl-5'>
                <h3>Email Me</h3>
                <p className='text-sm'>oludamolaijimade@gmail.com</p>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center text-lg px-5 py-2 lg:p-5 w-full bg-[rgba(255,255,255,0.08)]">
              <div className='w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center'>
                <FiPhoneCall className="text-[#ADEFD1FF] hover:text-[#42EADDFF]" />
              </div>
              <div className='block space-y-1 pl-5 text-2xl'>
                <h3>Call Me</h3>
                <p className='text-sm'>+2348068453717</p>
              </div>
            </div>
          </AnimateInView>
        </div>

        
          <div className='bg-[rgba(255,255,255,0.08)] mt-10'>
            <form className="lg:px-10" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 w-full gap-2 lg:gap-10">
                <div className="col-md-6 ">
                  
                    <input
                      type="text"
                      name="name"
                      className="w-full py-4 px-5 custom-bg outline-none focus:custom-bg focus:outline-none"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.name && <span className="text-red-500">{formErrors.name._errors[0]}</span>}
                 
                </div>
                <div className="col-md-6   ">
                 
                    <input
                      type="email"
                      className="w-full py-4 px-5 custom-bg outline-none focus:custom-bg focus:outline-none"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.email && <span className="text-red-500">{formErrors.email._errors[0]}</span>}
                
                </div>
              </div>
              <div className=" mt-2 lg:mt-3">
               
                  <input
                    type="text"
                    className="w-full py-4 px-5 custom-bg outline-none focus:custom-bg focus:outline-none"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.subject && <span className="text-red-500">{formErrors.subject._errors[0]}</span>}
               
              </div>
              <div className=" mt-3">
               
                  <textarea
                    className="w-full text-white py-4 px-5 custom-bg outline-none focus:custom-bg focus:outline-none"
                    name="message"
                    rows="10"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.message && <span className="text-red-500">{formErrors.message._errors[0]}</span>}

              </div>
              <div className="text-center">
                <button type="submit" className="py-3 px-5 lg:py-5 lg:px-[28px] mt-10 mb-2 md:my-20 border-2 rounded-md border-[#ADEFD1FF] hover:bg-gray-800">
                  Send Message
                </button>
              </div>
            </form>
            {isSubmitted && <p className="text-center text-xs md:text-sm text-[#A8B2D1] pb-10  ">Thank you! Your message has been sent.</p>}
          </div>
        
      </div>
    </section>
  );
}
