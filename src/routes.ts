import { Request, Response } from 'express'; //adicionar tipagem
import createUser from './services/CreateUser'

/**
 * TIPAGENS COMUNS/PRIMITIVAS => string, number, object, array
 * INTERFACES => São formas de definir tipagens de conjuntos de dados,principalmente objetos no javaScript/ 
 *    Sempre que eu precisar definir o formato de um objeto cria-se uma INTERFACE
 * 
 */


export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'mariele_rbr@hotmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'React.Js',
      { title: 'JavaScript', experience: 100 },

    ]
  })

  return response.json({ message: 'Hello World' })
}


