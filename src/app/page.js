import Image from "next/image";
import UI1 from "./project component/UI1";
import VSportfolio from "./project component/VSportfolio";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
     
     {/* <UI1/> */}
     {/* <VSportfolio/> */}

      <div className=" absolute left-[50%] top-[50%] flex flex-col gap-[40px]">
       <h1 className="text-[40px]"> Who m i just a noob trying to figure out code....</h1>
        <h2 className="text-[30px]">Or m i......</h2> 
        <Link href={'/ui1'}>
        <button className=" text-gray-300 text-[12px] bg-gray-900 outline outline-emerald-600 rounded-[10px] px-[20px] py-[10px]">Ui1</button>
        </Link>
        <Link href='/ui2'>
        <button className=" text-gray-300 text-[12px] bg-gray-900 outline outline-emerald-600 rounded-[10px] px-[20px] py-[10px]">Ui2</button>
        </Link>






        .

      </div>



    </>
  );
}
