
export interface registerDataAluno{
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
    data_nascimento: Date;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
}


export interface loginForm{
    email: string;
    senha: string;
}