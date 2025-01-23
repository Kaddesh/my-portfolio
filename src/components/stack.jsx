import React from 'react'
import Progressbar from './stack/progressbar'
import AnimateInView from './animate'

export default function Stack() {
  return (
    <section >
      <AnimateInView >
       <div className=" mt-20 lg:mt-60 px-5 lg:px-0 lg:max-w-[1200px] lg:mx-auto ">
              
              
            <h1 className=" text-lg xl:text-3xl font-bold lg:text-end lg:pr-80 lg:pl-10">My stacks</h1>
            

                <div className="grid lg:grid-cols-2 text-lg xl:text-3xl text-[#CCD6f6] gap-2 mt-8">

                  <div className="">         
                  <Progressbar skill="HTML" value={100} color="#34495E" />
                  <Progressbar skill="CSS" value={95} color="#1D8348"/>   
                  <Progressbar skill="Javascript" value={90} color="#B7950B"/>
                 
                  </div>

                  <div className="">         
                  <Progressbar skill="ReactJS" value={95} color="#34495E" />
                  <Progressbar skill="NextJS" value={75} color="#1D8348"/>   
                  <Progressbar skill="NodeJs" value={100} color="#B7950B"/>
                  
                  </div>

                  <div className="">
                  <Progressbar skill="Sass" value={95} color="#34495E" />
                  <Progressbar skill="TailwindCSS" value={95} color="#1D8348"/>   
                  <Progressbar skill="Material UI" value={90} color="#B7950B"/>
                  
                  </div>

                  <div className="">
                  <Progressbar skill="Firebase" value={95} color="#34495E" />
                  <Progressbar skill="GraphQL" value={75} color="#1D8348"/>   
                  <Progressbar skill="MongoDB" value={90} color="#B7950B"/>
                  
                  </div>
                </div>
              
              </div>  
              </AnimateInView>
    </section>
  )
}
