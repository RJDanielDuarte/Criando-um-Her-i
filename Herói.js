// Classe Heroi
class Heroi {
    constructor(nome, idade, classe) {
      this._nome = nome;
      this._idade = idade;
      this._classe = classe;
    }
  
    // Métodos getters e setters
    get nome() {
      return this._nome;
    }
  
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    get idade() {
      return this._idade;
    }
  
    set idade(novaIdade) {
      this._idade = novaIdade;
    }
  
    get classe() {
      return this._classe;
    }
  
    set classe(novaClasse) {
      this._classe = novaClasse;
    }
  
    // Método para exibir informações do herói
    exibirInfo() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Classe: ${this.classe}`);
    }
  
    // Método para o herói atacar
    atacar() {
      let ataque;
      switch (this.classe) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
      console.log(`O ${this.classe} ${ataque}`);
    }
  }
  
  // Função para criar um novo herói
  function criarHeroi() {
    const nome = prompt('Digite o nome do herói:');
    const idade = parseInt(prompt('Digite a idade do herói:'));
    const classe = prompt('Escolha a classe do herói (mago, guerreiro, monge ou ninja):');
  
    return new Heroi(nome, idade, classe);
  }
  
  // Exemplo de uso do código
  const novoHeroi = criarHeroi();
  novoHeroi.exibirInfo();
  novoHeroi.atacar();
  