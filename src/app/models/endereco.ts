export interface EnderecoListar {
    id?:string;
    rua:string;
    numero:string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}