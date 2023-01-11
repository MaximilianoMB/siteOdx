import Image from "next/image";
import folhaImg from "../public/clientes/folha.png";
import Link from "next/link";

export default function FolhaUm() {
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
                    Reforma administrativa, o encontro marcado
                    </h2>
                    <p className="py-2 grid ">
                    Mais do que a importância fiscal, poderá causar impacto social significativo
                    </p><br></br>
                    <p>
                    Wagner Vargas
                    <p className="font-bold">
                    Mestre em gestão e políticas públicas (FGV) e pós-graduando do Programa de Data Science Avançado (Insper).
                    </p><br></br>
                    A reforma do Estado brasileiro torna-se o único meio viável para a otimização de recursos públicos, que atenda a atual demanda social, antes de o país voltar a crescer. Isso porque o aumento da despesa pública, decorrente do necessário apoio financeiro aos trabalhadores informais e desempregados, acontece no mesmo instante em que há queda da atividade econômica, responsável por derrubar as receitas governamentais, e sem o menor espaço para aumento de tributos.
                    
                    O gasto com pessoal já é uma das três maiores despesas do Estado brasileiro: são R$ 928 bilhões por ano, o que representa 13,7% do PIB. É um desafio para todos os entes federativos, já que, por mais que o custo da folha em âmbitos federal e estadual seja alto, há um possível inchaço da máquina pública em âmbito municipal, onde estão 57% dos 11,4 milhões de servidores.
                    </p><br></br>
                    <p>
                    Esses dados estão no estudo "Reforma administrativa: diagnósticos sobre a empregabilidade, o desempenho e a eficiência do setor público", feito pelo Instituto Millenium em parceria com a consultoria de data science Octahedron Data Experts (ODX), lançado recentemente e que também embasa a "Campanha Destrava" —movimento apartidário que conta com a adesão de parlamentares, especialistas em administração e finanças públicas, empresários e sociedade civil em geral, clamando pelo debate urgente de uma reforma administrativa.

                    Os dados sobre distribuição de recursos e pessoal indicam haver espaço para ganhos de eficiência na máquina pública, como atrelar gratificações a um adequado sistema de avaliações de desempenho, com maior chance de qualificação, e uma evolução funcional mais alinhada aos resultados; o que só é possível, também, através de metas factíveis. Outra necessidade latente é o debate sobre as adequações de contingente, mais alinhadas às demandas sociais, para evitar a falta de servidores em áreas sensíveis, conforme vêm alertando os economistas Arminio Fraga e Ana Carla Abrão.
                    </p><br></br>
                    <p>
                    Mais do que a importância fiscal, uma reforma administrativa tem potencial para causar um impacto social significativo —não só porque áreas fundamentais como saúde, segurança, habitação e saneamento recebem cada vez menos atenção e financiamentos, já que a despesa obrigatória (em sua maior parte representada pelo gasto com pessoal) faz com que o gasto público cresça de forma vegetativa—, mas também porque uma máquina pública mais eficiente entrega mais serviços de qualidade a quem precisa.

                    O estudo aponta que, entre os anos de 2020 e 2034, 36,24% de todos os servidores do funcionalismo público federal vão se aposentar. Ou seja, 219 mil servidores precisarão ser repostos através de novos concursos, tratando-se, portanto, de uma grande oportunidade para implementar melhorias às regras de recursos humanos da gestão pública que fortaleçam, inclusive, a independência técnica dos servidores.
                    </p><br></br>
                    <p>
                    Outro ponto relevante é que parece haver disposição e espaço político para o debate. Os senadores Antonio Anastasia (PSD-MG) e Kátia Abreu (PP-TO), além do deputado Tiago Mitraud (Novo-MG), presidente da Frente Parlamentar Mista da Reforma Administrativa, têm dado declarações públicas favoráveis à discussão do tema neste momento. Ademais, o presidente da Câmara, Rodrigo Maia (DEM-RJ), tem enfatizado que a discussão de uma reforma administrativa neste momento não representaria desencontros em relação à agenda de outras matérias ou PECs em pauta nas duas Casas.

                    Enfim, podemos afirmar que políticas públicas eficientes, eficazes e efetivas são mais prováveis com a existência de um arcabouço de incentivos à produtividade. E que tais incentivos podem contribuir significativamente para a promoção da igualdade de oportunidades e para a diminuição da pobreza, alicerces de fundamental importância para uma nação que deseja caminhar rumo ao desenvolvimento.
                    </p><br></br>
                    <Link   rel="noopener noreferrer" href="https://www1.folha.uol.com.br/opiniao/2020/08/reforma-administrativa-o-encontro-marcado.shtml">
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
