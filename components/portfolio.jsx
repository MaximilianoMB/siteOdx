import Link from "next/link";
import estadaoImg from "../public/clientes/estadao-logo.png";
import gUmImg from "../public/clientes/g1.png";
import valorImg from "../public/clientes/valor.jpg";
import jnImg from "../public/clientes/4.jpg";
import cnnImg from "../public/clientes/cnn.svg";
import globoplayImg from "../public/clientes/globoplay.png";
import ogloboImg from "../public/clientes/oglobo.png";
import folhaImg from "../public/clientes/folha.png";

import Modals from "./modals";

export default function Portfolio(){
    return(
        <div id="portfolio" className="mt-6 w-full bg-gradient-to-r from-slate-400 to-slate-300 rounded-tl-full rounded-br-full">
            <div className="max-w-[1240px] mx-auto px-2 py-10">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                   Mídia 
                </p>
                <h2 className="py-4">ODX na mídia</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <Modals title="Estadão" bgImg={estadaoImg} imgUrl="/estadao" />
                    <Modals title="Jornal Nacional" bgImg={jnImg} imgUrl="/g1" />
                    <Modals title="Valor Econômico" bgImg={valorImg} imgUrl="/valorEconomico" />
                    <Modals title="Folha de S.Paulo" bgImg={folhaImg} imgUrl="/folha1" />
                    <Modals title="CNNBrasil" bgImg={cnnImg} imgUrl="/cnn" />
                    <Modals title="Globoplay" bgImg={globoplayImg} imgUrl="/globoplay" />
                    <Modals title="O Globo" bgImg={ogloboImg} imgUrl="/oglobo" />
                    <Modals title="Estadão" bgImg={estadaoImg} imgUrl="/estadao2" />
                    <Modals title="Folha de S.Paulo" bgImg={folhaImg} imgUrl="/folha2" />
                </div>
            </div>
        </div>
    )
}