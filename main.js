// Classe de Abstração
function Veiculo (marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    
    this.ligar = function() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`O seu ${this.modelo} está ligado.`);
        } else {
            console.log(`O seu ${this.modelo} já está ligado.`);
        }
    }

    this.desligar = function() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`O seu ${this.modelo} está desligado.`);
        } else {
            console.log(`O seu ${this.modelo} já está desligado.`);
        }
    }
}

// Classes herdeiras

function Carro(marca, modelo, ano, numPortas) {
    Veiculo.call(this, marca, modelo, ano);
    this.numPortas = numPortas;

    this.especificacoes = function(){
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano} Portas: ${this.numPortas}`);
    }
}

function Moto(marca, modelo, ano, cilindradas) {
    Veiculo.call(this, marca, modelo, ano);
    this.cilindradas = cilindradas;

    this.especificacoes = function(){
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano} Cilindradas: ${this.cilindradas}`);
    }
}



//instâncias 

const carro1 = new Carro('Toyota', 'Corola', 2022, 5);
const carro2 = new Carro('Honda', 'Civic', 2022, 5);
const moto1 = new Moto('Zontes', 'R310', 2023, 310);

// Usando os métodos das instâncias

carro1.especificacoes();
carro2.especificacoes();
moto1.especificacoes();

console.log(carro1.modelo);
console.log(carro2.modelo);
console.log(moto1.modelo);

carro1.ligar();
carro2.ligar();
moto1.ligar();
moto1.ligar();

carro1.desligar();
carro2.desligar();
moto1.desligar();
moto1.desligar();
