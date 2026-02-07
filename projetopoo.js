// Definição da Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o ataque com base no tipo
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        // Saída conforme o padrão solicitado: "o {tipo} atacou usando {ataque}"
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- TESTES ---
// Criando instâncias (objetos) da classe Heroi
const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
const heroi3 = new Heroi("Lee Sin", 35, "monge");
const heroi4 = new Heroi("Hanzo", 30, "ninja");

// Executando os ataques
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
