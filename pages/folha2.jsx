import Image from "next/image";
import folhaImg from "../public/clientes/folha.png";
import Link from "next/link";

export default function FolhaDois() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                </div>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={folhaImg} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">
                        Matéria no jornal Folha de São Paulo
                    </h2>
                    <h3>
                        A ODX colaborou como consultoria técnica para a matéria.
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
                <div className="col-span-4 grid justify-items-center text-center">
                    <h2 className="py-2">
                    A ciência de dados e as políticas públicas
                    </h2>
                    <p className="py-2 grid ">
                    Tecnologia permite prever ocorrências de roubo de celular em São Paulo
                    </p><br></br>
                    <p>
                    Wagner Vargas
“O conhecimento é o processo de acumular dados; a sabedoria reside na sua simplificação”

Martin H. Fischer

A inteligência artificial deve impactar significativamente diversas profissões, tanto no sentido de extinguir funções profissionais, que não serão mais exercidas por humanos, quanto em relação a mudanças de diretrizes empresariais, de forma que companhias se tornem “data driven”, ou, melhor dizendo, “orientadas pelos dados”. Portanto, profissionais com habilidades de analisar dados tendem a ser demandados e valorizados pelas organizações, e as políticas públicas têm muito a usufruir com esse cenário.

Uma das maiores aliadas da tomada de decisão orientada por evidências é a ciência de dados —área que, em suma, une a programação computacional e a habilidade de processar grandes dados, da ciência da computação à matemática e à estatística, utilizadas na ciência tradicional. Isto porque os algoritmos são eficazes para aprender e para tomar, assertivamente, decisões complexas.
                    </p><br></br>
                    <p>
                    Na área da saúde, por exemplo, o Laboratório de Big Data e Análise Preditiva em Saúde (LABDAPS), da USP, já utiliza algoritmos de machine learning para conduzir pesquisas de predição de desfechos relacionados à Covid-19. Em pesquisas conduzidas pelo professor André Filipe de Moraes Batista, fazendo-se uso de dados do Hospital Albert Einstein, foram treinados algoritmos capazes de detectar pacientes que têm Covid-19 apenas a partir de informações provenientes de seus exames de sangue.

As políticas de segurança pública, por terem sua eficácia relacionada à inteligência, podem obter avanços interessantes por meio da ciência de dados. Em meu artigo final para o mestrado profissional em gestão e políticas públicas pela Fundação Getulio Vargas (FGV-SP) —orientado pelo professor Nelson Marconi—, utilizei algoritmos para prever o número de flagrantes e o total de ocorrências de roubo de celular na cidade de São Paulo, a partir dos dados de 1 milhão de boletins de ocorrência, utilizando dezenas de variáveis, como marca do aparelho, horário e local do roubo e perfil do assaltante.
                    </p><br></br>
                    <p>
                    A partir do treino de redes neurais artificiais e floresta aleatória, foi possível acertar 60,4% dos flagrantes e 80% do total de ocorrências. E observar, ainda, que tentativas de roubo não consumadas tendem a não ser registradas pela vítima, o que dificulta o patrulhamento policial.

Enfim, até o terceiro setor já tem utilizado essas técnicas para produzir políticas públicas: o Instituto Millenium —think tank brasileiro– criou o projeto Millenium Analisa, uma divisão de pesquisas de políticas públicas que, em parceria com a consultoria Octahedron Data Experts (ODX), usa algoritmos de machine learning em estudos de finanças públicas; alguns deles, inclusive, premiados como “melhor na categoria Inteligência Artificial” pela Universidade da Pennsylvania, ao lado de gigantes como a Universidade Stanford (Vale do Silício).
                    </p><br></br>
                    <p>
                    Por mais que os algoritmos utilizados não tenham sido recém-criados, pois alguns deles são dos anos 1950, sua utilização cresce, já que esses modelos dependem de grandes quantidades de dados, algo cada vez mais disponível —e a custo de processamento cada vez menor. Logo, o caminho é sem volta. Ou nos adaptamos ou seremos “compulsoriamente” adaptados.

Wagner Vargas
Mestre em gestão e políticas públicas (FGV) e pós-graduando do Programa de Data Science Avançado (Insper).
                    </p><br></br>
                    <Link   rel="noopener noreferrer" href="https://www1.folha.uol.com.br/opiniao/2020/05/a-ciencia-de-dados-e-as-politicas-publicas.shtml">
                    <a target="_blank">
                    <button  className="px-8 py-2 mt-4 mr-8 "> Ver Matéria</button>
                    </a>
                    </Link>
                    
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                    <Image className="rounded" layout="" objectFit="cover" src={folhaImg} alt="/" />
                    </div>
                </div>
                <Link className="" href='/#portfolio'>
                    <button className="m-2 w-20 text-md">Voltar</button>
                </Link>
            </div>
        </div>
    )
}
