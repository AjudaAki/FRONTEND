
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


export interface perfilProfAcessado {
    id: number
    nome: string
    email: string
    senha: string
    telefone: string
    cpf: string
    data_nascimento: string
    descricao: string
    descricao_rapida: string
    img_perfil: string
    modo_professor: number
    favoritos: number
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
    data_nascimento_formatada: string
  }
  

  export interface comentario {
    id_usuario: number | null;
    comentario_usuario: string;
  }
  