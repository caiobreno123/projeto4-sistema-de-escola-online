const Cadastro = require("./class/Cadastro")
const DispositivoFactory = require("./class/DispositivoFactory")
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pergunta(texto) {
    return new Promise(resolve => rl.question(texto, ans => resolve(ans)))
}

async function main() {
    const cadastro = new Cadastro()
    console.log("=== ECOTRACK - Monitor de Consumo ===")

    while (true) {
        const nome = await pergunta("Nome do eletrodomestico (ou 'fim' para encerrar): ")
        if (nome.toLowerCase() === "fim") break
        const potencia = Number(await pergunta("Potencia (W): "))
        const horas = Number(await pergunta("Horas de uso por dia: "))
        const ambiente = await pergunta("Ambiente: ")
        const eletro = DispositivoFactory.criar("eletrodomestico", { nome, potencia, horasUso: horas, ambiente })
        cadastro.adicionarDispositivo(eletro)
        console.log("Eletrodomestico adicionado\n")
    }

    console.log("\n--- Consumo dos Eletrodomésticos ---")
    console.log(cadastro.listarDispositivos())

    const continuar = (await pergunta("\nDeseja continuar para o cálculo da fazenda de bitcoin? (s/n): ")).trim().toLowerCase()
    if (continuar === "s") {
        const nomeFazenda = await pergunta("Nome da fazenda: ")
        const qtdPCs = Number(await pergunta("Quantidade de computadores: "))
        const potenciaPC = Number(await pergunta("Potência média por computador (W): "))
        const horas = Number(await pergunta("Horas de uso por dia: "))
        const qtdGPUs = Number(await pergunta("Quantidade de placas de vídeo por computador: "))
        const potenciaGPU = Number(await pergunta("Potência de cada placa de vídeo (W): "))
        const qtdFontes = Number(await pergunta("Quantidade de fontes de alimentação por computador: "))
        const potenciaFonte = Number(await pergunta("Potência de cada fonte (W): "))

        const fazenda = DispositivoFactory.criar("fazendaAvancada", {
            nome: nomeFazenda,
            qtdPCs,
            potenciaPC,
            qtdGPUs,
            potenciaGPU,
            qtdFontes,
            potenciaFonte,
            horasUso: horas
        })

        cadastro.adicionarDispositivo(fazenda)
        console.log("\n--- Consumo total incluindo fazenda ---")
        console.log(cadastro.listarDispositivos())
    }

    console.log("\n=== Fim do Programa ===")
    rl.close()
}

main()
