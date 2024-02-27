export default class  User {
  private _nome: string;
  private _email: string;
  private _senha: string;
  private _dataNascimento: Date;
  private _ra: string;
  private _tipo: string;

  constructor(nome: string, email: string, senha: string, dataNascimento: Date, ra: string, tipo: string) {
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._dataNascimento = dataNascimento;
    this._ra = ra;
    this._tipo = tipo;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get senha(): string {
    return this._senha;
  }
  public set senha(value: string) {
    this._senha = value;
  }

  public get dataNascimento(): Date {
    return this._dataNascimento;
  }
  public set dataNascimento(value: Date) {
    this._dataNascimento = value;
  }

  public get ra(): string {
    return this._ra;
  }
  public set ra(value: string) {
    this._ra = value;
  }

  public get tipo(): string {
    return this._tipo;
  }
  public set tipo(value: string) {
    this._tipo = value;
  }
}
