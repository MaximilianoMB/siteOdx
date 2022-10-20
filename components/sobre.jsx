import Image from "next/image";

export default function Sobre(){
    return(
        <div id="sobre" className=" relative w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
            <p className="absolute pl-6 top-4 left-0 uppercase text-xl font-bold py-2 tracking-widest text-[#5651e5]">Sobre nós</p>
            <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-0 ">    
                <div className="col-span-2 text-center"> 
                    <Image src="/favicon.ico" alt="/" width="60" height="69" /><h2 className="py-4">Octahedron Data Experts - ODX</h2>
                    <p className="pb-8 italic text-gray-600">
                        Data Science a serviço de uma decisão inteligente.
                    </p>
                    <ul className=" list-disc text-left pl-16">
                        <li className="py-2 text-[#5651e5]">
                            <span className="pl-2 font-bold">Missão</span>
                            <p className="py-2 text-gray-800">Construir soluções de análises de dados para dar suporte à tomada de decisão mais efetiva.</p>
                        </li>
                        <li className="py-2 text-[#5651e5]">
                            <span className="pl-2 font-bold">Visão</span>
                            <p className="py-2 text-gray-800">Fazer da Inteligência Artificial uma técnica usual e acessível para médias empresas e políticas públicas.</p>
                        </li>
                        <li className="py-2 text-[#5651e5]">
                            <span className="pl-2 font-bold">Valores</span>
                            <p className="py-2 text-gray-800">Originalidade, tecnicidade e simplicidade.</p>
                        </li>
                    </ul>
                    
                </div>
                <div className="col-span-2 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-3xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-3xl" src="/imagemSobre.png" alt="/" width="400" height="300" />
                </div>
            </div>
        </div>
    )
}