import React from 'react'
import '../globals.css'
import SouthEastSharpIcon from '@mui/icons-material/SouthEastSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Slider } from '@mui/material';
import Marquee from 'react-fast-marquee';

const VSportfolio = () => {
  return (
    <div id='main2' className='overflow-hidden'>
        <div className='h-[60vh]  ' id='text-div' >
            
            
            <h1 className='text-[130px] font-semibold font-sans ml-[70px] text-slate-950 leading-[100%]  pt-[35px] tracking-tighter '>Vaibhav Sharma <br />
            Web Developer
            </h1>
          
            
            
            <div className='flex justify-between px-[80px] mt-[20px] text-[33px] font-[200px]'>
                <h2>(Delhi, India)</h2>
                <div className='flex items-center gap-3'>
                   <h2 ><SouthEastSharpIcon fontSize='93px'/></h2> 
                    <h2>Scroll down</h2>
                </div>
            </div>
            
        </div>

            {/* this dive store menu and 0 icon */}
        <div className='absolute top-0 right-0 flex gap-4  mr-[50px] mt-[30px] '>

            <h3 className='text-[33px] border-2 border-black text-white bg-black px-[20px] py-[5px] rounded-[50%]'>0</h3>
            <h3 className='text-[33px] border-2 border-black text-white bg-black px-[15px] py-[5px] rounded-[20px]'>Menu</h3>

        </div>


        <img className='w-full h-[100vh] object-cover' src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/6458a6db645ec6a527000cfa_home-hero-p-2000.webp" alt="" />

        <div id='contentdiv1' className=' w-full    h-[70vh] flex  border-b-2 border-black ml-[20px] mr-[30px] '>
            <div className='w-[70%] text-[110px] leading-[100%] tracking-tighter font-sans border-r-2 border-black my-[30px] px-[30px] '>
                <h2>As a digital designer, I focus on producing top-notch and impactful digital experiences.</h2>
            </div>
 
            <div className='flex flex-col justify-between'>
                <h3 className='text-[30px] pt-[40px] pl-[30px]'>(About Me)</h3>
                <img src="/pp.png" className='h-[50%] ml-[30px] hover:rotate-3 hover:outline outline-indigo-500 duration-500 rounded-[30px] ' alt="" />
                <div className='flex text-[30px] pb-[40px] pl-[30px] gap-3'>
                    <div >
                        <InstagramIcon fontSize='42'/>
                    </div>
                    <div>
                        <FacebookIcon fontSize='42'/>
                    </div>
                    
                </div>
            </div>

        </div>

        <div id='content2div' className='h-[70vh] flex w-full border-b-2 border-black'>
        <div className='w-[40%] my-[40px] border-r-2 border-black text-[30px] text-end pr-[45px] flex justify-end '>
        
            <h2>(What I do) <SouthEastSharpIcon fontSize='93px'/></h2>
        </div>
        <div className='w-[60%] flex flex-col '>
            <div className='flex my-[40px]  ' >
                <div className='border-r-2 mx-[30px]  border-black border-b-2'>
                <h2 className='text-[50px] '>Digital Design</h2>
                <p className='text-[20px]'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                </div>
                <div className='border-r-2 mx-[30px]  border-black border-b-2'>
                <h2 className='text-[50px] '>Art Direction</h2>
                <p className='text-[20px]'>My art direction expertise ensures that your project is on brand, on message, and visually stunning. Let's tell your story together.</p>
                </div>
            </div>
            <div className='flex'>
                <div className='border-r-2 mx-[30px]  border-black border-b-2'>
                <h2 className='text-[50px] '>Digital Design</h2>
                <p className='text-[20px]'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                </div>
                <div className='border-r-2 mx-[30px]  border-black border-b-2'>
                <h2 className='text-[50px] '>Art Direction</h2>
                <p className='text-[20px]'>My art direction expertise ensures that your project is on brand, on message, and visually stunning. Let's tell your story together.</p>
                </div>
            </div>
            

           


        </div>

       


        </div>
        
        <Marquee speed='120' loop={0} className='text-[100px] font-bold uppercase w-full h-[30vh]'>
            Work work work work work work work work work work work work work
        </Marquee>
        <div id='divcontent3'>
            <img className='object-cover h-[100vh] w-full' src="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad0d8364135d4087b9c8_project-01-p-2000.webp" alt="" />

            <div className='h-[30vh] w-full flex justify-between items-center px-[50px] '>
                <h1 className='text-[140px] font-semibold '>Camera</h1>
                <div className='flex flex-col justify-between gap-[40px] pl-[80px]'>
                    <p className='text-[34px] pl-[100px] leading-[100%] tracking-tighter'>A cutting-edge digital platform designed to revolutionize the way people interact with technology.</p>
                    <div className='flex  gap-4 text-[16px] pl-[120px]'>
                    <h3 className='text-[15px] border-2 border-black text-white bg-black px-[20px] py-[5px] rounded-[20px]'>Digital Design</h3>
                    <h3 className='text-[15px] border-2 border-black text-white bg-black px-[20px] py-[5px] rounded-[20px]'>2024</h3>

                    </div>
                    
                </div>
            </div>



        </div>
        <div id='divcontent4'>
            <img className='object-cover h-[100vh] w-full' src="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad129d3885d86c115c7f_project-02-p-2000.webp" alt="" />

            <div className='h-[30vh] w-full flex justify-between items-center px-[50px] '>
                <h1 className='text-[140px] font-semibold '>Noise</h1>
                <div className='flex flex-col justify-between gap-[40px] pl-[80px]'>
                    <p className='text-[34px] pl-[100px] leading-[100%] tracking-tighter'>A cutting-edge digital platform designed to revolutionize the way people interact with technology.</p>
                    <div className='flex  gap-4 text-[16px] pl-[120px]'>
                    <h3 className='text-[15px] border-2 border-black text-white bg-black px-[20px] py-[5px] rounded-[20px]'>Digital Design</h3>
                    <h3 className='text-[15px] border-2 border-black text-white bg-black px-[20px] py-[5px] rounded-[20px]'>2024</h3>

                    </div>
                    
                </div>
            </div>



        </div>
        <div id='divcontent5'>
            <img className='object-cover h-[100vh] w-full' src="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad1988b7ca338942d0b3_project-03-p-2000.webp" alt="" />

            <div className='h-[30vh] w-full flex justify-between items-center px-[50px] border-b-2 border-black '>
                <h1 className='text-[140px] font-semibold '>Robot</h1>
                <div className='flex flex-col justify-between gap-[40px] pl-[80px]'>
                    <p className='text-[34px] pl-[100px] leading-[100%] tracking-tighter'>A cutting-edge digital platform designed to revolutionize the way people interact with technology.</p>
                    <div className='flex  gap-4 text-[16px] pl-[120px]'>
                    <h3 className='text-[15px] border-2 border-black text-white bg-black px-[20px] py-[5px] rounded-[20px]'>Digital Design</h3>
                    <h3 className='text-[15px] border-2 border-black text-white bg-black px-[20px] py-[5px] rounded-[20px]'>2024</h3>

                    </div>
                    
                </div>
            </div>



        </div>



        <div  className='h-[95vh] flex w-full border-b-2 border-black'>
        <div className='w-[40%] my-[40px] border-r-2 border-black text-[30px] text-end pr-[45px] flex justify-end '>
        
            <h2>(My Clients) <SouthEastSharpIcon fontSize='93px'/></h2>
        </div>
        <div className='w-[60%] flex flex-col '>
            <div className='flex my-[40px]   ' >
                <div className='border-r-2 mx-[30px]  border-black b'>
                <h2 className='text-[50px] leading-[100%] pb-[20px]  tracking-tighter '> design expertise delivered.</h2>
                <p className='text-[20px]'>Bent's interaction design made our app user-friendly and intuitive. His creativity and attention to detail resulted in a product that exceeded our expectations</p>
                </div>
                
                <div className='mx-[30px]  border-black '>
                <h2 className='text-[50px] leading-[100%] pb-[20px]  tracking-tighter '>Captivating motion design that brought our brand to life.</h2>
                <p className='text-[20px]'>Bent's motion design is exceptional. He brought our brand to life with stunning animations that captivated our audience.</p>
                </div>
                
            </div>
                <hr  className='border-b border-black w-[90%] ml-[40px] mb-5 mt-5'/>
            <div className='flex'>
                <div className='border-r-2 mx-[30px]  border-black b'>
                <h2 className='text-[50px] leading-[100%] pb-[20px]  tracking-tighter '> design expertise delivered.</h2>
                <p className='text-[20px]'>Bent's interaction design made our app user-friendly and intuitive. His creativity and attention to detail resulted in a product that exceeded our expectations</p>
                </div>
                <div className=' mx-[30px]  '>
                <h2 className='text-[50px] leading-[100%] pb-[20px]  tracking-tighter '>Captivating motion design that brought our brand to life.</h2>
                <p className='text-[20px]'>Bent's motion design is exceptional. He brought our brand to life with stunning animations that captivated our audience.</p>
                </div>
            </div>
            

           


        </div>

       


        </div>

        <div id='footer' className='w-full h-[70vh]  '>
            <div className='flex text-white justify-center  items-center flex-col gap-[20px] pt-[100px] '>
                <h3 className='text-[30px] font-semibold'>(Connect)</h3>
                <h1 className='text-[120px] font-semibold'>Let's talk</h1>
                <h3 className='text-[20px] border-2 border-white text-black bg-white px-[20px] py-[5px] rounded-[20px]'>Get in touch</h3>

            </div>
        </div>
        
      
    </div>
  )
}

export default VSportfolio
