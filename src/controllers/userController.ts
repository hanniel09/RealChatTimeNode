import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user'

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
      try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        return res.status(201).json(user);
      } catch (error) {
        return res.status(400).json({ error: error.message });
    }
  }
  public async 
}
export default new UserController();