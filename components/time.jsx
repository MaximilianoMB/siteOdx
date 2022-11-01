import Image from "next/image";
import {MdOutlineUnfoldMore} from "react-icons/md";
import React, {useState} from "react";

export default function Services(){

    const [navWag, setNavWag] = useState(false)

    const handleNavWag = () => {
        setNavWag(!navWag)
    }

    const [navFel, setNavFel] = useState(false)

    const handleNavFel = () => {
        setNavFel(!navFel)
    }

    return(
        <div id="time" className="w-full md:h-screen light-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">               
                <p className="mt-5 text-xl tracking-widest uppercase text-[#5651e5]">Equipe</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div  className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/equipe/1.jpg" alt="/" width="150px" height="150px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-2xl pb-2">Wagner Vargas</h3>
                                <p className="text-center">Cientista de Dados Especialista em Políticas Publicas</p>
                            </div>
                        </div>
                        <div onClick={handleNavWag} className="mx-[25%] mt-4 flex  items-center justify-center rounded-full bg-slate-300 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <MdOutlineUnfoldMore className="ml-3 text-[#5651e5]" size={30} />
                            Curriculum
                        </div>
                        <div className={navWag ? "col-span-2 mt-10" : "hidden"}>
                            <p 
                            className="m-4 first-line:uppercase first-line:tracking-widest
                            first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                            first-letter:mr-3 first-letter:float-left"
                            >
                            Bacharelando em Estatística (Anhembi Morumbi, 2020-2023) e Bacharel em Comunicação Social (Anhembi Morumbi, 2009-2012),
                            é Mestre em Gestão e Políticas Públicas (FGV, 2016-2018) e pós-graduado pelo Programa Avançado de Data Science e Decisão (Insper, 2019-2021); com MBA em Finanças Públicas (Cândido Mendes, 2017-2019) e tem especialização em Estatística Aplicada (IBMEC, 2017) e em Marketing CRM (IBMEC, 2016).
                            </p>
                            <p className="m-4">
                                Consultor, tem experiência em projetos de Ciência de Dados voltados para Políticas Públicas, Marketing Analítico e Comunicação Estratégica para os setores público, privado. Programa em R e em Python.
                            </p>
                        </div>
                    </div>
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto rounded-full">
                                <Image src="/equipe/2.jpg" alt="/" width="150px" height="150px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-2xl pb-2">Felício Visnardi</h3>
                                <p>Economista e Cientista de Dados</p>
                            </div>
                        </div>
                        <div onClick={handleNavFel} className="mx-[25%] mt-4 flex items-center justify-center rounded-full bg-slate-300 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <MdOutlineUnfoldMore className="ml-3 text-[#5651e5]" size={30} />
                            Curriculum
                        </div>
                        <div className={navFel ? "col-span-2 mt-10" : "hidden"}>
                            <p 
                            className="m-4 first-line:uppercase first-line:tracking-widest
                            first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                            first-letter:mr-3 first-letter:float-left"
                            >
                            Graduado em Economia Empresarial e Controladoria pela FEARP-USP e pós-graduado pelo Programa Avançado de Data Science e Decisão pelo Insper.
                             Possui conhecimentos avançados em diversas linguagens de programação computacional, dentre elas Python, VBA, R, SQL e conhecimento intermediário em Javascript.
                            </p>
                            <p className="m-4">Além de experiência em projetos de contabilidade e automação, também possui conhecimentos do ecossistema de engenharia de dados e Big Data Analitycs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}