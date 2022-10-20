import Image from "next/image";

export default function Services(){
    return(
        <div id="time" className="w-full light-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">               
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Equipe</p>
                <h2>Nossos Especialistas</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/equipe/1.jpg" alt="/" width="150px" height="150px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-2xl pb-2">Wagner Vargas</h3>
                                <p className="text-center">Cientista de Dados Especialista em Políticas Publicas</p>
                            </div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}