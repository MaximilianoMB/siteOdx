import Image from "next/image";

export default function Services(){
    return(
        <div id="services" className="w-full md:h-screen light-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">               
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Serviços</p>
                <h2>Nossos Serviços</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/servicos/agile.png" alt="/" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Machine Learning</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/servicos/south-america.png" alt="/" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Econometria Espacial</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/servicos/research.png" alt="/" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Econometria</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/servicos/server.png" alt="/" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Big Data Analytics</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/servicos/kpi.png" alt="/" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Desenvolvimento de Métricas e Indicadores</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/servicos/automation.png" alt="/" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Soluções de Automação (RPA)</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}