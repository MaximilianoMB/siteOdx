import Link from "next/link";
import estadaoImg from "../public/clientes/estadao-logo.png";
import gUmImg from "../public/clientes/g1.png";
import cliente3Img from "../public/clientes/3.jpg";
import cliente4Img from "../public/clientes/4.jpg";

import Modals from "./modals";

export default function Portfolio(){
    return(
        <div id="portfolio" className="w-full bg-gradient-to-r from-slate-400 to-slate-300 rounded-tl-full rounded-br-full">
            <div className="max-w-[1240px] mx-auto px-2 py-10">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                   Clientes 
                </p>
                <h2 className="py-4">Portfolio</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Modals title="Estadão" bgImg={estadaoImg} imgUrl="/estadao" />
                    <Modals title="G1" bgImg={gUmImg} imgUrl="/g1" />
                    <Modals title="Valor Econômico" bgImg={cliente3Img} imgUrl="/valorEconomico" />
                    <Modals title="Jornal Nacional" bgImg={cliente4Img} imgUrl="/jornalNacional" />
                </div>
            </div>
        </div>
    )
}