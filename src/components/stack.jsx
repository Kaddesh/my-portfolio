import React from 'react'
import Progressbar from './stack/progressbar'
import AnimateInView from './animate'

export default function Stack() {
  return (
    <section >
      <AnimateInView >
       <div className=" mt-40 lg:mt-60 px-5 lg:pr-20">
                <div className="text-start ">
                  <h1 className=' text-xl xl:text-3xl'> My Favourite Stacks</h1>
                </div>

                <div className="grid lg:grid-cols-2 text-lg text-[#CCD6f6] gap-10 mt-10">

                  <div className="col-lg-4">         
                  <Progressbar skill="HTML" value={100} color="#34495E" />
                  <Progressbar skill="CSS" value={95} color="#1D8348"/>   
                  <Progressbar skill="Javascript" value={90} color="#B7950B"/>
                 
                  </div>

                  <div className="col-lg-4">         
                  <Progressbar skill="ReactJS" value={95} color="#34495E" />
                  <Progressbar skill="vueJS" value={75} color="#1D8348"/>   
                  <Progressbar skill="NextJS" value={100} color="#B7950B"/>
                  
                  </div>

                  <div className="col-lg-4">
                  <Progressbar skill="Sass" value={95} color="#34495E" />
                  <Progressbar skill="TailwindCSS" value={95} color="#1D8348"/>   
                  <Progressbar skill="Material UI" value={90} color="#B7950B"/>
                  
                  </div>

                  <div className="col-lg-4">
                  <Progressbar skill="Firebase" value={95} color="#34495E" />
                  <Progressbar skill="NodeJS" value={75} color="#1D8348"/>   
                  <Progressbar skill="MongoDB" value={90} color="#B7950B"/>
                  
                  </div>
                </div>
              
              </div>  
              </AnimateInView>
    </section>
  )
}
