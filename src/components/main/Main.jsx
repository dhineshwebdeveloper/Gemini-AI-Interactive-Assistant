import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {
const { onSend, recentPrompt, showResult, loading,  resultDate, input, setInput } =useContext(Context)

  return (
    <div className='main flex-1 max-h-[100vh] relative '>
      <div className='nav flex items-center justify-between text-[22px] p-5 text-gray-600 me-3'>
        <p>Personalized-Website-Assistant</p>
        <img className='w-10 rounded-[50%]' src={assets.user_icon} alt='' />
      </div>
      <div className='max-w-[900px] m-auto '>
        {!showResult
        
        ?<>
         <div className='mx-0 text-[45px] text-slate-300 font-medium p-5'>
          <p>
            <span className='text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'> Hello dhinesh</span>
          </p>
          <p className='tag-p'>How Can I help you today</p>
        </div>
        <div className='cards'>
          <div className='msg-box h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200 '>
            <p className='text-gray-600 text-[17px]'>
              Suggest beautful places to see an on upcomung road trip
            </p>
            <img src={assets.compass_icon} alt='' className='w-[35px] p-2 absolute bg-white rounded-[20px] bottom-3 right-2' />
          </div>
          <div className='msg-box h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer  hover:bg-slate-200 '>
            <p className='text-gray-600 text-[17px]'>
              Briefly summarize this concept urban planning
            </p>
            <img src={assets.message_icon} alt='' className='w-[35px] p-2 absolute bg-white rounded-[20px] bottom-3 right-2'/>
          </div>
          <div className='msg-box h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer  hover:bg-slate-200 '>
            <p className='text-gray-600 text-[17px]'> 
              Brainstorm team bonding activities for our work retreat
            </p>
            <img src={assets.bulb_icon} alt='' className='w-[35px] p-2 absolute bg-white rounded-[20px] bottom-3 right-2' />
          </div>
          <div className='msg-box h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer  hover:bg-slate-200 '>
            <p className='text-gray-600 text-[17px]'>
              Imporove the readability of the following code
            </p>
            <img src={assets.code_icon} alt='' className='w-[35px] p-2 absolute bg-white rounded-[20px] bottom-2 right-2' />
          </div>
        </div>
        
        </>
      :<div className='rusult py-0 px-[5%] max-h-[70vh] overflow-y-scroll '>
        <div className="result-title my-10 mx-0 flex items-center gap-5">
          <img src={assets.user_icon} alt="" className='w-10 rounded-[50%]'/>
          <p>{recentPrompt}</p>
        </div>
        <div className="results-data flex items-start gap-5">
          <img src={assets.gemini_icon} alt="" className='w-10 rounded-[50%]'/>
          {loading
          ?<div className="loader w-[100%] flex flex-col gap-3">
            <hr/>
            <hr/>
            <hr/>
          </div>
          :
          <p className='text-[17px]  leading-[1.8] '
           dangerouslySetInnerHTML={{__html: resultDate}}></p>
          
        }
        </div>
      </div>
      }
       
        <div className="mian-bottom absolute bottom-0 w-[100%] max-w-[900px] px-20px py-0 m-auto" >
          <div className="search-box flex items-center justify-between gap-5 bg-slate-200 px-5 py-3 rounded-[50px]">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' 
            className='flex-1 promtmsg bg-transparent border-none outline-none p-1 text-[18px]' onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSend();
              }
            }} />
            <div className="flex items-center gap-4 "> 
              <img src={assets.gallery_icon} alt=""  className='w-6 cursor-pointer'/>
              <img src={assets.mic_icon} alt=""  className='w-6  cursor-pointer'/>
              {input ? <img onClick={() => onSend()}  src={assets.send_icon} alt=""  className='w-6  cursor-pointer'/> : null}
            </div>
          </div>
          <div className="bottom-info fontg-[15px] my-3 text-center mx-auto font-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta vero eligendi atque placeat illo! Adipisci
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
