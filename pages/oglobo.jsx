import Image from "next/image";
import ogloboImg from "../public/clientes/oglobo.png";
import Link from "next/link";

export default function Oglobo() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                </div>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={ogloboImg} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">
                        Matéria no jornal O Globo
                    </h2>
                    <h3>
                        A ODX colaborou como consultoria técnica para a matéria.
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
                <div className="col-span-4 grid justify-items-center text-center">
                    <h2 className="py-2">
                    Olhar social requer saúde fiscal
                    </h2>
                    <p className="py-2 grid ">
                    &lsquo;A agenda de reformas — a administrativa e tributária — precisa seguir adiante com urgência...&lsquo;
                    </p><br></br>
                    <p>
                    Wagner Vargas
                    28/12/2020 - 00:00
                    </p><br></br>
                    <p>
                    A redução da pobreza deve ser prioridade não só de governos, mas do Estado, independentemente da ideologia que ocupa o poder. Isso porque a alocação eficiente de recursos e o amparo aos vulneráveis são papéis sociais do setor público e, por isso, o debate sobre uma Lei de Responsabilidade Social —proposta pelo senador Tasso Jereissati — é bem-vindo, dado que seu objetivo é estabelecer metas para redução da pobreza nos próximos anos.

De acordo com o IBGE, 52 milhões de cidadãos brasileiros vivem na pobreza, dentre os quais 13 milhões deles estão em situação de extrema pobreza. As crianças são as maiores vítimas: 42 a cada 100 delas, no Brasil, de zero a 14 anos de idade, são pobres. A incapacidade do país de aplicar esforços e recursos educacionais reflete-se na baixa mobilidade social, condenando a geração futura de jovens a uma renda semelhante à de seus ascendentes, conforme apontou o estudo “Educação e Desenvolvimento: a formação do capital humano no Brasil”, do Instituto Millenium.

O PL também leva em conta o componente geográfico: no Nordeste e no Norte, 44% e 41% dos cidadãos, respectivamente, são pobres. As mulheres negras, mães, que são chefes de família e criam seus filhos sem o marido, também são um público vulnerável em termos sociais, 60% delas estão em situação de pobreza.

Esses dados de 2018 ainda não consideravam a atual crise, em que o Estado precisou aumentar os gastos e a proteção social num momento de queda da arrecadação. Portanto, há de encarar a discussão sobre como lidar com a vulnerabilidade, estabelecendo metas claras nesse sentido e com urgência.

Outro ponto interessante é a proposta de debater, objetivamente, qual é o target para a classificação de vulnerabilidade e de pobreza, algo que evita classificações “criativas”, que atendam exclusivamente ao interesse do discurso político.

Para finalizar, essa discussão não deve perder de vista que uma política de proteção social depende da saúde fiscal do país e da criação de mecanismos sobre a qualidade com que o Estado executa suas tarefas. A agenda de reformas — a administrativa e tributária — precisa seguir adiante com urgência, já que o desperdício de recursos públicos, a ineficiência do Estado e a injustiça social sobre o pagador de impostos mais pobre, em razão da regressividade da carga, se fazem muito presentes no Brasil de hoje. O fato é que o setor público brasileiro, infelizmente, acentua a desigualdade social.
                    </p><br></br>
                    <p>
                    Enfim, uma das maiores preocupações é que esse olhar para o social, importante para este momento, não seja usado como forma de justificar políticas fiscais pouco responsáveis. É preciso que os próprios formuladores do projeto mantenham esse posicionamento claro, como o fizeram acerca do teto de gastos. Já a nós, cidadãos, cabe encarar as duras escolhas que teremos de fazer como sociedade, sem medo dos ajustes e cortes de privilégios que são necessários para assegurar a dignidade a alguns e maior eficiência à máquina pública.

Wagner Vargas é especialista do Instituto Millenium, cientista de dados e mestre em Gestão e Políticas Públicas (FGV)
                    </p><br></br>
                    <p>
                    Clique abaixo para ler a matéria na íntegra
                    </p><br></br>
                    <Link   rel="noopener noreferrer" href="https://oglobo.globo.com/opiniao/olhar-social-requer-saude-fiscal-24811769">
                    <a target="_blank">
                    <button  className="px-8 py-2 mt-4 mr-8 "> Ver Matéria</button>
                    </a>
                    </Link>
                    
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                    <Image className="rounded" layout="" objectFit="cover" src={ogloboImg} alt="/" />
                    </div>
                </div>
                <Link className="" href='/#portfolio'>
                    <button className="m-2 w-20 text-md">Voltar</button>
                </Link>
            </div>
        </div>
    )
}