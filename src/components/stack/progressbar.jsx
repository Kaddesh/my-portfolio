import React from 'react'

const Progressbar = ({skill, value, color}) => {
  return (
    <div className="  items-center my-4 lg:px-10">
    <span className="flex items-center justify-between text-lg lg:text-lg  ">
      {skill} <i className=" ">{value}%</i>
    </span>
    <div className="bg-gray-200 flex-grow rounded-full h-4 mt-2 overflow-hidden">
      <div
        className="h-full rounded-full "
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${value}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
  )
}

export default Progressbar
