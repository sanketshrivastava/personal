import React from 'react'
import Profile from './Profile'
import SuggestedProfile from './SuggestedProfile'
import { SUGGESTED_ACOUNT_DATA } from '../constants/Suggestedacount'

const RightSidebar = () => {
  return (
   <aside className="hidden md:flex bg-black px-4 py-10 flex-col justify-between border-l min-w-[16rem]">
    <div className="flex flex-col gap-11">
        {/*acount*/}
        <Profile
        fullname={"sigma Developer"}
        username={"sigma_Developer_"}
        /> 
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-between items-center'>
            <span className='text-white font-bold'>suggested Account</span>
            <span className='text-blue-500 font-bold'>see All</span>
          </div>
 
          {
            SUGGESTED_ACOUNT_DATA.map((acount)=>(

              <SuggestedProfile
              key={acount.id}
              FullName={ acount.FullName}
              type={acount.type}
              ProfilePic={acount.ProfilePic}
              />
            ))}


          

               
          {/* <SuggestedProfile
          FullName={"jhon doe"}
          type={"follow"}
          ProfilePic={"https://avatar.iran.liara.run/public/8"}
          />

          <SuggestedProfile
          FullName={"jhon doe"}
          type={"suggested"}
          ProfilePic={"https://avatar.iran.liara.run/public/15"}
          /> */}
          
        
        </div>

    </div>
   </aside>
  )
}

export default RightSidebar 
