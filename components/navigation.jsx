import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu,AiOutlineMail } from "react-icons/ai";
import {FaLinkedinIn,FaGithub} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";


export default function Navigation(){
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className=" fixed w-full h-20 shadow-xl z-[100] bg-slate-200">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <h2 className="text-[#5651e5]">
                    <span className="text-slate-600">O</span>DX
                </h2>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/#cover">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                            Home
                            </li>
                        </Link>
                        <Link href="/#sobre">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                            Sobre
                            </li>
                        </Link> 
                        <Link href="/#services">
                            <li  className="ml-10 text-sm uppercase hover:border-b">
                            Serviços
                            </li>
                        </Link> 
                        <Link href="/#portfolio">
                            <li  className="ml-10 text-sm uppercase hover:border-b">
                           Na Mídia
                            </li>
                        </Link> 
                        <Link href="/#time">
                            <li  className="ml-10 text-sm uppercase hover:border-b">
                            Equipe
                            </li>
                        </Link> 
                        <Link href="/#contato">
                            <li className="ml-10 mr-5 text-sm uppercase hover:border-b">
                            Contato
                            </li>
                        </Link>  
                    </ul>
                    <div onClick={handleNav}className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
            <div className={
                nav 
                ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <Image src="/favicon.ico" width="50" height="59" alt="/" />
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4 font-bold"><span className="font-bold">O</span>ctahedron <span className="font-bold text-[#5651e5]">D</span>ata <span className="font-bold text-[#5651e5]">E</span>xperts</p>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <ul className="uppercase">
                        <Link href="/#cover">
                            <li onClick={()=> setNav(false)}  className="py-4 text-sm">
                                Home
                            </li>
                        </Link>
                        <Link href="/#sobre">
                            <li onClick={()=> setNav(false)}  className="py-4 text-sm">
                                Sobre
                            </li>
                        </Link>
                        <Link href="/#services">
                            <li onClick={()=> setNav(false)}  className="py-4 text-sm">
                                Serviços
                            </li>
                        </Link>
                        <Link href="/#portfolio">
                            <li onClick={()=> setNav(false)}  className="py-4 text-sm">
                                Clientes
                            </li>
                        </Link>
                        <Link href="/#time">
                            <li onClick={()=> setNav(false)}  className="py-4 text-sm">
                                Time
                            </li>
                        </Link>
                        <Link href="/#contato">
                            <li onClick={()=> setNav(false)}  className="py-4 text-sm">
                                Contato
                            </li>
                        </Link>
                    </ul>
                    <div className="pt-8 items-center">
                        <p className="uppercase  tracking-widest text-[#5651e5]">Data is the new oil!</p>
                        <div className="flex justify-center my-4 w-full sm:w-[80%]">
                           
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}