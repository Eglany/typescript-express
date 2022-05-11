
import connection from '../model/connection';
import UserModel from '../model/userModel';
import IUser from '../interface/IUser';

export default class User {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection)
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users
  }
}