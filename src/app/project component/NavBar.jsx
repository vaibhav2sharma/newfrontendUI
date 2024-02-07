import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AodIcon from '@mui/icons-material/Aod';

const NavBar = () => {
  return (
    <div className='flex justify-between h-[100px] w-full items-center pr-[40px] pl-[40px]'>

        <div className='flex gap-1 items-center '> 
            <h3 className='text-[16px] border-2 border-black py-[5px] px-[10px] rounded-[50px]'>Menu</h3>
            <h3 className='text-[16px] border-2 border-black py-[5px] px-[10px] rounded-[50px]'><MenuIcon/></h3>
        </div>
        <div className='flex  items-center'>
            <h1 id='phonelogo' className=''><AodIcon/></h1>
            <h1 className='text-[26px]'>Dentytech</h1>
     
        </div>
        <div className='flex gap-1  '>
            <button className=' border-black border-2 rounded-[50px] py-[5px] px-[10px]'>login</button>
            <button id='signbtn' className=' border-black border-2  rounded-[50px] py-[5px] px-[10px] text-white  '>Signup</button>
        </div>






      
    </div>
  )
}

export default NavBar
