import Image from "next/image";
import estadaoLogoImg from "../public/clientes/estadao-logo.png";
import Link from "next/link";

export default function Estadao() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                </div>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={estadaoLogoImg} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">
                        Matéria no jornal Estado de São Paulo
                    </h2>
                    <h3>
                        A ODX colaborou como consultoria técnica para a matéria.
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
                <div className="col-span-4 grid justify-items-center">
                    <h2 className="py-2">
                        Brasil está entre os 5 maiores exportadores em cerca de 30 produtos agrícolas
                    </h2>
                    <p className="py-2">
                    Dados que constam de estudo do Instituto Millenium, mostram que País está no top five global não só em produtos como soja e milho, mas também em pimenta, melancia, caju e mandioca, enter outros.
                    </p>
                    <Link   rel="noopener noreferrer" href="https://economia.estadao.com.br/noticias/geral,brasil-esta-entre-os-5-maiores-exportadores-em-cerca-de-30-produtos-agricolas,70003707595">
                    <a target="_blank">
                    <button  className="px-8 py-2 mt-4 mr-8 "> Ver Matéria</button>
                    </a>
                    </Link>
                    
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                    <Image className="rounded-full" layout="" objectFit="cover" src={estadaoLogoImg} alt="/" />
                    </div>
                </div>
                <Link className="" href='/#portfolio'>
                    <button className="m-2 w-20 text-md">Voltar</button>
                </Link>
            </div>
        </div>
    )
}
