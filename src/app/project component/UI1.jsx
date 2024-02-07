import React from 'react'
import '../globals.css'
import NavBar from './NavBar'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
const UI1 = () => {
  return (
    <div id='main' className=''>
        <NavBar/>

        <h1 id='advh1' className='absolute top-[50%] left-[50%] text-[150px] uppercase w-full text-center '>OUR ADVANTAGES</h1>


            <img id='imgrotate1'  className='h-[500px] w-[400px] absolute left-[50%] top-[50%] rounded-[20px]   object-cove 'src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img id='imgrotate2'  className='h-[500px] w-[400px] absolute left-[50%] top-[50%] rounded-[20px]  object-cover' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img id='imgrotate3'  className='h-[500px] w-[400px] absolute left-[50%] top-[50%]  rounded-[20px]  object-cover' src="https://images.unsplash.com/photo-1508185140592-283327020902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img id='imgrotate4'  className='h-[500px] w-[400px] absolute left-[50%] top-[50%]  rounded-[20px]  object-cover' src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img id='imgrotate5'  className='h-[500px] w-[400px] absolute left-[50%] top-[50%]  rounded-[20px]  object-cover' src="https://images.unsplash.com/photo-1543096222-72de739f7917?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img id='imgrotate6'  className='h-[500px] w-[400px] absolute left-[50%] top-[50%]  rounded-[20px]  object-cover'src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       

      


      <div id='divlower' className='absolute bottom-0 w-full h-[70px] flex justify-between items-center  pr-[40px] pl-[40px]'>
        <div>
        <h3>Your Smile, Our Passion</h3>

        </div>
        <div className='p-4 border-2 border-black rounded-[50px] mt-10'>
            <ArrowDownwardRoundedIcon/>
        </div>
        <div>
            <div className='flex gap-3' >
                <h1><InstagramIcon/></h1>
                <h1><YouTubeIcon/></h1>
                <h1><FacebookIcon/></h1>
            </div>
            
            <div>
                Best Start Up of 2023
            </div>
        </div>
      </div>


        









    </div>
  )
}

export default UI1
