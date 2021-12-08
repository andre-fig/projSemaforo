const semaforo = document.getElementById("semaforo");
const botoes = document.getElementById("botoes");

let indexDaCor = 0;
let intervalo = null;

// liga a luz de acordo com o ID do alvo do evento (clique)
const luzDoSemaforo = (event) => {
    finalizaAutomatico();
    ligaLuz[event.target.id]();
    }

const alteraLuz = () => {
    const cores = ["verde", "amarelo", "vermelho"]
    const cor = cores[indexDaCor];

    ligaLuz[cor]();
    proximoIndexDaCor();
}

    // if (indexDaCor <2){
    // indexDaCor++
    // } else {
    //     indexDaCor = 0;
    // }

    // ou, em ternary:
    // atenção que o ++ deve ficar antes do processo, se não ocorreria o pós-processo
const proximoIndexDaCor = () => indexDaCor = indexDaCor < 2 ? ++indexDaCor : 0

const ligaLuz = {
    "verde": () => semaforo.src = "./img/semaforo_verde.png",
    "amarelo": () => semaforo.src = "./img/semaforo_amarelo.png",
    "vermelho": () => semaforo.src = "./img/semaforo_vermelho.png",
    // o setInterval executa a função a cada intervalo de tempo
    "automatico": () => intervalo = setInterval(alteraLuz, 1000)
}

// limpa o intervalo do automático, para que não fique acelerado ou atrapalhe as outras luzes
const finalizaAutomatico= () => clearInterval(intervalo)

botoes.addEventListener("click", luzDoSemaforo)