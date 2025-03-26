// primeira parte

class Personagem {
  constructor(nome, fever_essence, atk, def, vida) {
    this.nome = nome;
    this.fever_essence = fever_essence;
    this.atk = atk;
    this.def = def;
    this.vida = vida;
  }

  receberDano(dano) { // Corrigido, aqui tava "tomou", sendo que voce tava puxando "receberDano"
    let danoFinal = dano - this.def;
    if (danoFinal > 0) {
      this.vida -= danoFinal;
      console.log(`${this.nome} recebeu ${danoFinal} de dano. Vida sobrando: ${this.vida}`);
    } else {
      console.log(`${this.nome} conseguiu defender tudo`);
    }
  }

  atacar(outroPersonagem) {
    console.log(`${this.nome} ataca ${outroPersonagem.nome}!`);
    outroPersonagem.receberDano(this.atk);
  }

  vivo() {
    return this.vida > 0;
  }

  habilidadeEspecial(outroPersonagem) {
    console.log("Habilidade especial não implementada para a classe base!");
  }
}

// segunda parte

class Monotomo extends Personagem {
  constructor(nome) {
    super(nome, 0, 50, 75, 150);
  }

  habilidadeFebril(outroPersonagem) {
    console.log(`${this.nome} usa "Surra Bem Dada"!`);
    let dano = this.atk * 2;
    outroPersonagem.receberDano(dano);
  }
}

class Sonhador extends Personagem {
  constructor(nome) {
    super(nome, 175, 45, 50, 75);
  }

  habilidadeFebril(outroPersonagem) { // Aqui tava com erro de digitacao mano fantas
    console.log(`${this.nome} usa "Trauma Reprimido"!`);
    let dano = this.atk * 3;
    outroPersonagem.receberDano(dano);
  }
}

class Receptaculo extends Personagem {
  constructor(nome) {
    super(nome, 100, 45, 25, 150);
  }

  habilidadeFebril(outroPersonagem) {
    console.log(`${this.nome} usa "Disparo Emotivo"!`);
    let dano = this.atk * 1.5;
    outroPersonagem.receberDano(dano);
  }
}

// terceira parte

function escolherClasse(nome) {
  let classe = prompt(`Escolha a classe para a entidade ${nome} (Monotomo, Sonhador ou Receptaculo):`).toLowerCase();

  switch (classe) {
    case 'monotomo':
      return new Monotomo(nome);
    case 'sonhador':
      return new Sonhador(nome);
    case 'receptaculo':
      return new Receptaculo(nome);
    default:
      console.log("Sacana você em. Vai ficar com Sonhador só pra largar de ser trouxa.");
      return new Sonhador(nome);
  }
}

function escolherAcao(personagem, oponente) { // Corrigido aqui oh
  let acao = prompt(`${personagem.nome}, escolha sua ação: "atacar" (Ataque Normal) ou "habilidade" (Habilidade Febril):`).toLowerCase();
  if (acao === "habilidade") {
    personagem.habilidadeFebril(oponente);
  } else {
    personagem.atacar(oponente);
  }
}

function batalha(personagem1, personagem2) {
  console.log(`Iniciando batalha entre ${personagem1.nome} e ${personagem2.nome}!\n`);

  while (personagem1.vivo() && personagem2.vivo()) {
    escolherAcao(personagem1, personagem2);
    if (!personagem2.vivo()) {
      console.log(`${personagem2.nome} foi apagado...`);
      break;
    }

    escolherAcao(personagem2, personagem1);

    if (!personagem1.vivo()) {
      console.log(`${personagem1.nome} foi apagado...`);
      break;
    }

    console.log(`Status: ${personagem1.nome} (Vida: ${personagem1.vida}) vs ${personagem2.nome} (Vida: ${personagem2.vida})\n`);
  }
}

let nomePersonagem1 = prompt("Digite o nome do primeiro personagem:");
let nomePersonagem2 = prompt("Digite o nome do segundo personagem:");

let personagem1 = escolherClasse(nomePersonagem1);
let personagem2 = escolherClasse(nomePersonagem2);

batalha(personagem1, personagem2);
