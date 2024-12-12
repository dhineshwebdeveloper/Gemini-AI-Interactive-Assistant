import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const { onSend, prevPrompts, setPervPrompts, newChat } = useContext(Context)

  const loadingPromt = async (prompt) => {
    setPervPrompts( prompt);
    await onSend(prompt); 
  };

  return (
    <div className='sidebar min-h-[100vh] px-5 py-6 flex-col flex justify-between bg-slate-50'>
      <div className='top'>
        <img
          onClick={() => setExtended(prev => !prev)}
          className='menu w-[25px] block ms-3 cursor-pointer '
          src={assets.menu_icon}
          alt=''
        />
        <div onClick={() => newChat()} className='new-chat mt-14 flex text-center items-center gap-3 px-4 py-3 bg-slate-100 rounded-[50px] text-[14px] text-gray-700 cursor-pointer'>
          <img className='w-[25px]' src={assets.plus_icon} alt='' />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className='recent flex flex-col '>
            <p className='recent-title mt-8 mb-8 '>Recent</p>

            {Array.isArray(prevPrompts) &&
              prevPrompts.map((item, index) => {
                return (
                  <div
                    key={index} // Ensure each child has a unique key
                    onClick={() => loadingPromt(item)}
                    className='recent-entry flex items-start gap-3 p-3 pe-10 rounded-[50px] text-gray-700 cursor-pointer hover:bg-slate-300'
                  >
                    <img
                      className='w-[25px]'
                      src={assets.message_icon}
                      alt=''
                    />
                    <p>{item.slice(0, 18)} ...</p>
                  </div>
                )
              })}
          </div>
        ) : null}
      </div>
      <div className='bottom flex flex-col '>
        <div
          className='bottom-item recent-entry pe-3 cursor-pointer flex items-start gap-3 p-3 pe-10 rounded-[50px] text-gray-700 cursor-pointer
            hover:bg-slate-300'
        >
          <img className='w-[25px]' src={assets.question_icon} alt='' />
          {extended ? <p>Help</p> : null}
        </div>
        <div
          className='bottom-item recent-entry pe-3 cursor-pointer flex items-start gap-3 p-3 pe-10 rounded-[50px] text-gray-700 cursor-pointer
            hover:bg-slate-300'
        >
          <img className='w-[25px]' src={assets.history_icon} alt='' />
          {extended ? <p>Activity</p> : null}
        </div>
        <div
          className='bottom-item recent-entry pe-3 cursor-pointer flex items-start gap-3 p-3 pe-10 rounded-[50px] text-gray-700 cursor-pointer
            hover:bg-slate-300'
        >
          <img className='w-[25px]' src={assets.setting_icon} alt='' />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
