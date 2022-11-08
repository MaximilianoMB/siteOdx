import Image from "next/image";
import divisoriaImg from "../public/divisoria.png"

export default function Cover(){
    return(
        <div id="cover" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full  mx-auto p-2 flex justify-center items-center">
                <div> 
                        <Image src="/favicon.ico" alt="/" width="160" height="169" />
                    <p className="uppercase tracking-widest text-gray-600 pb-12">
                        Octahedron Data Experts
                    </p>
                    <h1 className="py-2 text-gray-700">Soluções B2B em <span className="text-[#5651e5]">Data Science</span></h1>
                    <p className="py-2 text-gray-600 max-w-[70%] m-auto">
                        Data is the new oil!
                        Nosso time de especialistas desenvolve <i>soluções de dados</i> para que você tome as <i>melhores decisões</i>.
                    </p>
                    
                </div>
            </div>
            {/* <Image className="w-full h-[15%]" src={divisoriaImg} alt="/" /> */}
        </div>
    )
}
