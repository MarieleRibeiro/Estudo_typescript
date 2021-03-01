/**
 *  Para criar um usuario: name, email, password
 *  => Muitas formas de setar os tipos dessas variaveis:
 *        -> 1 forma é setando o valor padrão dela = ex: quando a variavel não é obrigatoria so passar uma string vazia = "" 
 * 
 * => 2 formas de definir a tipagem de um VETOR -> 1° Array<string | TechObject>; =quando a informação é tipo variavel
 *                                              -> 2° string[] =quando for tipo unico
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // ?opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}