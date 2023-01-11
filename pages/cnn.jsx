import Image from "next/image";
import cnnImg from "../public/clientes/cnn.svg";
import Link from "next/link";

export default function Cnn() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                </div>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={cnnImg} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">
                        Matéria na CNN Brasil
                    </h2>
                    <h3>
                        A ODX colaborou como consultoria técnica para a matéria.
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-gradient-to-r from-slate-300 to-slate-400 rounded-tr-full rounded-bl-full">
                <div className="col-span-4 grid justify-items-center text-center">
                    <h2 className="py-2">
                    Brasil está entre os 5 maiores exportadores em cerca de 30 produtos agrícolas
                    </h2>
                    <p className="py-2">
                    Dados da FAO mostram que além de soja, café e carnes, país está entre principais produtores de itens inusitados como pimenta, melancia, caju e mandioca
                    </p><br></br>
                    <p>
                    Quem pensa que a excelência do agronegócio brasileiro se resume a soja, café e carnes está enganado. O país está entre os cinco maiores exportadores mundiais em valor em quase três dezenas de produtos agrícolas.

O maior destaque é para os de sempre: açúcar, cereais, soja, milho, oleaginosas e frutas cítricas. Mas o Brasil aparece no “top five” de exportações da Organização para as Nações Unidas (ONU) com produtos inusitados, como pimenta, melancia, abacaxi, mamão papaia, coco, mandioca, caju, fumo, sisal e outras fibras, por exemplo.

Os dados, de 2019, são da Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) e foram reunidos num estudo realizado pelo Instituto Millenium em parceria com a consultoria Octahedron Data eXperts (ODX).

O objetivo do trabalho foi traçar uma radiografia do agronegócio brasileiro para entender as razões pelas quais o setor vive anos seguidos de prosperidade e tem caminhado na contramão dos demais, mesmo em meio à crise provocada pela pandemia do novo coronavírus.
                    </p><br></br>
                    <p>
                    O comércio internacional é um dos pilares importantes para sustentar o bom desempenho do setor, turbinado pela desvalorização do câmbio e preços em alta das commodities.

A agropecuária respondeu por cerca de US$ 45 bilhões das exportações em 2020 e há vários anos garante o saldo positivo da balança comercial. Quando se avalia as exportações por setores, apenas a agropecuária apresentou crescimento nas vendas externas (6%) em comparação a 2019, mostra o estudo. Já a indústria extrativa e a de transformação registraram queda de 2,7% e de 11,3%, respectivamente.

Essa história se repete também no Produto Interno Bruto (PIB), a soma de todas as riquezas geradas no país. Em 2020, a agropecuária foi o único setor com resultado positivo e contribuiu para que os efeitos adversos da pandemia sobre a atividade não fossem ainda maiores. O PIB do setor avançou 2% sobre o ano anterior, enquanto o da indústria recuou 3,5% e o dos serviços, 4,5%. Enquanto isso, a economia brasileira como um todo encolheu 4,1%.

“O agronegócio é um exemplo positivo de como o setor privado realmente despontou e está criando oportunidades, aumentando a produtividade e continuou produzindo apesar de todas as confusões, dificuldades diplomáticas e tributações absurdas”, afirma Priscila Pereira Pinto, presidente do Instituto Millenium.

A executiva diz que a ideia do trabalho é mostrar que existe protagonismo do setor privado, apesar das leis que engessam a economia, criadas pelo Estado gigantesco que há no Brasil. “O agronegócio funciona porque o Estado não está em cima dele e é um exemplo de inspiração para outros setores.”


                    </p><br></br>
                    <p>
                    Uso eficiente da tecnologia
Um dos pontos de destaque revelados pelo estudo foi o uso eficiente da tecnologia e da inovação para obter produção recorde e ganhos de produtividade, com diminuição da diferença entre a área plantada e a área colhida.

A cana, por exemplo, é o produto que apresenta o melhor rendimento médio. Sozinha, representa mais da metade da produção em tonelagem da agricultura “Essa mistura de tecnologia e inovação significa menos água, menos área ocupada, maior sustentabilidade e resultados”, diz Priscila.

De acordo com o estudo, a colheita de todas as lavouras – anuais e perenes – atingiu cerca de 1,24 bilhão de toneladas em 2020. Essa produção ocupou uma área com cerca de 63 milhões de hectares, ou 13,5% do território brasileiro. Paralelamente, houve um uso mais intensivo de tecnologia, que pode ser avaliado pelo emprego de máquinas.

Entre 2006 e 2017, o número de estabelecimentos agrícolas com tratores, por exemplo, aumentou 50%. Em 45 anos, desde 1975, o crescimento foi de 391%.

Outro aspecto relevante para o desempenho do agronegócio é a forte capitalização do setor. Apenas 15% dos mais de 5 milhões de estabelecimentos agropecuários buscam algum tipo de financiamento. Dos 784 mil estabelecimentos que obtiveram algum tipo de crédito, destaca-se o fato de 47% serem oriundos de recursos privados e 53% de recursos públicos.
                    </p><br></br>
                    <Link   rel="noopener noreferrer" href="https://www.cnnbrasil.com.br/business/brasil-esta-entre-os-5-maiores-exportadores-em-cerca-de-30-produtos-agricolas/">
                    <a target="_blank">
                    <button  className="px-8 py-2 mt-4 mr-8 "> Ver Matéria</button>
                    </a>
                    </Link>
                    
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                    <Image className="rounded" layout="" objectFit="cover" src={cnnImg} alt="/" />
                    </div>
                </div>
                <Link className="" href='/#portfolio'>
                    <button className="m-2 w-20 text-md">Voltar</button>
                </Link>
            </div>
        </div>
    )
}