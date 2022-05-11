import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userServices'

export default class User {
  constructor(private userService = new UserService()) {}

  public getAll = async (_request: Request, response: Response) => {
    const allUsers = await this.userService.getAll();

    return response.status(StatusCodes.OK).json(allUsers)
  }
}