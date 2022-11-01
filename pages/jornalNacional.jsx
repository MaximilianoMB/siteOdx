import Image from "next/image";
import estadaoImg from "../public/clientes/estadao-logo.png";
import Link from "next/link";

export default function ClienteQuatro() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                </div>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={estadaoImg} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">
                        Matéria no Jornal O Estado de São Paulo
                    </h2>
                    <h3>
                        A ODX colaborou como consultoria técnica para a matéria.
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
                <div className="col-span-4">
                                       <h2>
                        Matéria
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ad aliquid officia eius, error nulla, rerum quae laboriosam sint, tempore explicabo ipsa vitae nostrum eveniet magni accusantium! Dolores, eius placeat.
                    </p>
                    <button className="px-8 py-2 mt-4 mr-8"> Ver</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p>Alguma coisa aqui?</p>
                    </div>
                </div>
                <Link className="justify-center" href='/#portfolio'>
                    <button className="px-8 py-2 mt-4 mr-8">Voltar</button>
                </Link>
            </div>
        </div>
    )
}