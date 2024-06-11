
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
    numero_casa: string;
    img_perfil: string;
}


export interface registerDataProf{
    nome: string
    email: string
    senha: string
    telefone: string
    cpf: string
    data_nascimento: string
    descricao_rapida: string
    descricao: string
    img_perfil: string
    discord: string
    whatsapp: string
    teams: string
    domingo: string
    segunda: string
    terca: string
    quarta: string
    quinta: string
    sexta: string
    sabado: string
    preco_minimo: string
    preco_maximo: string
    estado: string
    cidade: string
    bairro: string
    rua: string
    numero_casa: number
    id_tag: number
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