import Image from "next/image";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import {AiOutlineMail} from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Router from "next/router";

export default function Contato(){

    const {register, handleSubmit, errors, reset} = useForm();
    const router = useRouter();
    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/formulario`,
            headers: {
                'Content-Type' : 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);
            if(response.status == 200) {
                reset();
                Router.push('/')
            }
        } catch (err) {
            console.error(err);
        }

        
    }

    return(
        <div id="contato" className="w-full lg:h-screen bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contato
                </p>
                <h2 className="py-4">
                    Fale conosco!
                </h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* ESQUERDA */}
                    <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full text-center">
                            <div>
                                <Image className="rounded-xl" src="/favicon.ico" width="160px" height="169px" alt="/" />
                            </div>
                            <div>
                                <h2 className="py-2">
                                    Octahedron Data Experts
                                </h2>                              
                            </div>
                            <div className="py-8">
                                <p className="uppercase pt-8 text-[#5651e5]">
                                    Conecte-se com a gente!
                                </p>
                                <div className="flex justify-center py-4">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                                        <AiOutlineMail />
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                    </div>
                    {/* DIREITA */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form onSubmit={handleSubmit(onSubmitForm)}>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Nome</label>
                                        <input {...register('nome',{maxLength:50})} className="border-2 rounded-lg p-3 flex border-gray-300" type="text"></input>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Empresa</label>
                                        <input {...register('empresa',{maxLength:50})} className="border-2 rounded-lg p-3 flex border-gray-300" type="text"></input>
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input {...register('email',{maxLength:50})} className="border-2 rounded-lg p-3 flex border-gray-300" type="email"></input>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Assunto</label>
                                    <input {...register('assunto',{maxLength:50})} className="border-2 rounded-lg p-3 flex border-gray-300" type="text"></input>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Mensagem</label>
                                    <textarea {...register('mensagem',{maxLength:600})} className="border-2 rounded-lg p-3 border-gray-300" rows="10" type="text"></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">Enviar Mensagem</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}