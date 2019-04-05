class User extends Pessoa {
  senha: string;
  login: string;

  constructor(nome: string, id: number, senha: string, login: string) {
    super(nome, id);
    this.senha = senha;
    this.login = login;
  }
}
