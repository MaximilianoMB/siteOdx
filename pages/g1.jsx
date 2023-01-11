import Image from "next/image";
import jnImg from "../public/clientes/4.jpg";
import Link from "next/link";

export default function Gum() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                </div>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={jnImg} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">
                        Matéria no Jornal Nacional
                    </h2>
                    <h3>
                        A ODX colaborou como consultoria técnica para a matéria.
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
                <div className="col-span-4 grid justify-items-center text-center">
                    <h2 className="py-2">
                        Agronegócio brasileiro conta com satélites e inteligência artificial para produzir mais
                    </h2>
                    <p className="pt-4">
                    O agronegócio do Brasil deve se expandir neste ano, mesmo com a pandemia. E uma parte significativa desse resultado veio da ajuda da tecnologia.
                    </p><br></br>
                    <p>
                    O engenheiro agrônomo Elias Beré anda pela fazenda onde trabalha em Mato Grosso atento ao clima. As informações chegam pelo telefone, via internet. Os dados vêm de uma estação meteorológica montada na propriedade. Se a umidade cair, por exemplo, as máquinas precisam parar por causa do risco de incêndio na plantação.
                    </p><br></br>
                    <p>
                    “Isso vai ser importante na tomada da decisão de continuar uma semeadura, começar uma semeadura de uma nova safra e até mesmo ver a temperatura, parar uma colheita nas horas mais quentes. A gente consegue tomar uma decisão melhor e mais técnica”, afirma Elias.
                    E não é só no tempo que as fazendas estão de olho. Dentro de uma máquina que percorre o campo, é como se a gente estivesse numa nave. A cabine é climatizada e tem uma série de equipamentos que fornecem informações em tempo real. A colheitadeira já vai para a lavoura com a rota definida. Ela é capaz até de desviar sozinha de uma árvore. O piloto só entra em ação caso ocorra algum imprevisto.
                    </p><br></br>
                    <p>
                    Para entender melhor, o vídeo mostra a visão do alto de uma plantação. O sistema que abastece de informações a colheitadeira já vê desse jeito. Cada uma dessas áreas foi mapeada com a ajuda de satélites e inteligência artificial, que agora está sendo incorporada às máquinas.
                    </p><br></br>
                    <p>
                    Elias sabe, por exemplo, onde a fazenda é mais produtiva e onde a terra precisa de mais cuidado: “A gente tem na mão, momentâneo, o talhão que máquina está colhendo, velocidade, a produção, um mapa de colheita, mapa de produção total de produtividade por hectares, consigo ver velocidade, nível de diesel, rotação.”
                    </p><br></br>
                    <p>
                    Segundo a Associação Brasileira do Agronegócio, o país tem mais de 300 startups que já investiram R$ 100 milhões em novos sistemas inteligentes para o campo. O engenheiro de sistema Flávio Tarasoff criou um aplicativo que monitora a produção desde a origem.
                    “Todo mundo está muito preocupado com selo de sustentabilidade, certificado de origem, se esse algodão foi feito numa área ambientalmente sustentável, se não foi feito numa área de reserva de indígena, de desmate. Enfim, a única forma de você comprovar isso é com o uso de rastreabilidade em toda a cadeia”, explica Flávio.
                    </p><br></br>
                    <p>
                    Até 2030, o Brasil prevê expandir em mais de 27% a produção de grãos. O cientista de dados Wagner Vargas, do Instituto Millenium, afirma que a tecnologia tem efeitos positivos na produtividade e no emprego: “Você consegue ser mais produtivo e justamente economizar mais energia. Então você tem uma série de transformações, como na própria mão de obra, você consegue atualmente com esse tipo de técnica, com os desenvolvimentos tecnológicos, saber direcionar e qualificar melhor a mão de obra e consequentemente você acaba evitando o desperdício de recursos.”
                    </p>
                    <Link   rel="noopener noreferrer" href="https://g1.globo.com/jornal-nacional/noticia/2020/08/31/agronegocio-brasileiro-conta-com-satelites-e-inteligencia-artificial-para-produzir-mais.ghtml">
                    <a target="_blank">
                    <button  className="px-8 py-2 mt-4 mr-8 "> Ver Matéria</button>
                    </a>
                    </Link>
                    
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                    <Image className="rounded-full" layout="" objectFit="cover" src={jnImg} alt="/" />
                    </div>
                </div>
                <Link className="" href='/#portfolio'>
                    <button className="m-2 w-20 text-md">Voltar</button>
                </Link>
            </div>
        </div>
    )
}