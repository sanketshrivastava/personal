import React from 'react'

const SuggestedProfile = ({FullName,type,ProfilePic}) => {
  return (
    <div className='flex flex-row justify-between items-center gap-4'>
        
        <div className='flex flex-row justify-between items-center gap-4'>
        
            <img src={ProfilePic} alt="Profile" className='h-12 w-12 rounded-full' />
            <div className='relative flex flex-col items-start justify-center'>
              <span className='text-white font-bold'>{FullName}</span>
              <span className='text-gray-500'>{type}</span>
            </div>
          
     </div>
     <p className='text-sm font-normal text-blue-500'>follow</p>
    </div>
  )
}

export default SuggestedProfile
