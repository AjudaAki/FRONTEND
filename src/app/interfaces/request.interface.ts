
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
    img_perfil: string;
}


export interface registerDataProf{
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
    descricao_rapida: string;
    descricao: string;
    img_perfil: string;
    nome_tag: string;
    preco_maximo: number;
    preco_minimo: number;

}



export interface perfilUsuario{
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
    img_perfil: string;
}


export interface loginForm{
    email: string;
    senha: string;
}