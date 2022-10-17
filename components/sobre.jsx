import Image from "next/image";

export default function Sobre(){
    return(
        <div id="sobre" className="w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-0 ">
                <div className="col-span-2 text-center">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">Sobre nós</p>
                    <h2 className="py-4">ODX</h2>
                    <p className="py-2 texte-gray-600">
                        Somos uma empresa com foco em resultados em análises de dados, utilizando ferramentas modernas que auxiliam o trabalho dos nossos especialistas 
                    </p>
                    <p className="py-2 texte-gray-600">
                        Consultoria em BI com Machine Learning
                    </p>
                </div>
                <div className="col-span-2 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl" src="/bg.jpeg" alt="/" width="400" height="300" />
                </div>
            </div>
        </div>
    )
}