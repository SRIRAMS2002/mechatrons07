import React from 'react'

const Aluminicard = ({image,name,dept,role}) => {
    const imageUrl = image ? `/Team/Founders/${image}.webp` : "/placeholder.gif";
    return (
        <div className='w-[19rem] mx-4 max-w-[20rem]'>
        <div className=" mx-auto bg-gray-300 gap-3 pl-5 flex items-center  p-4 rounded-lg shadow-lg hover:shadow-xl shadow-indigo-500/50 hover:shadow-indigo-500/50 overflow-hidden">
         
          <img className="h-20 w-20 rounded-full" src={imageUrl} alt="" />
          <div className="p-5">
            <p className="text-lg font-semibold leading-6 text-gray-900">
              {name}
            </p>
            <div className="  items-center mt-2">
              <p className="mt-1 truncate font-semibold text-sm leading-5 text-gray-600">
                {dept}
              </p>
              
              <p className="mt-1 truncate font-semibold leading-6 text-indigo-600 hover:text-indigo-500">{role}</p>
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default Aluminicard
