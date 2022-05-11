import { Pool, ResultSetHeader } from 'mysql2/promise'
import IUser from '../interface/IUser'

export default class User {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection
  }

  public async getAll():Promise<IUser[]> {
    const query = 'SELECT * FROM Users'
    const allUser = await this.connection.execute(query)
    const [rows] = allUser
    return rows as IUser[] ;
  }
}
