import Image from "next/image";
import gumImg from "../public/clientes/g1.png";
import Link from "next/link";

export default function Gum() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                </div>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={gumImg} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">
                        Matéria no portal G1
                    </h2>
                    <h3>
                        A ODX colaborou como consultoria técnica para a matéria.
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
                <div className="col-span-4 grid justify-items-center">
                    <h2 className="py-2">
                        Agronegócio brasileiro conta com satélites e inteligência artificial para produzir mais
                    </h2>
                    <p className="py-2">
                    Segundo a Associação Brasileira do Agronegócio, o país tem mais de 300 startups que já investiram R$ 100 milhões em novos sistemas inteligentes para o campo.
                    </p>
                    <Link   rel="noopener noreferrer" href="https://g1.globo.com/jornal-nacional/noticia/2020/08/31/agronegocio-brasileiro-conta-com-satelites-e-inteligencia-artificial-para-produzir-mais.ghtml">
                    <a target="_blank">
                    <button  className="px-8 py-2 mt-4 mr-8 "> Ver Matéria</button>
                    </a>
                    </Link>
                    
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                    <Image className="rounded-full" layout="" objectFit="cover" src={gumImg} alt="/" />
                    </div>
                </div>
                <Link className="" href='/#portfolio'>
                    <button className="m-2 w-20 text-md">Voltar</button>
                </Link>
            </div>
        </div>
    )
}