import { Request, Response } from 'express'; //adicionar tipagem

export function helloWorld(request: Request, response: Response) {
  return response.json({ message: 'Hello World' })
}