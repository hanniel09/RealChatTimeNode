import express from 'express';
import User from "../models/user"
import validateToken from './validateToken';

class UserService extends validateToken {
    public async createUser(req: express.Request, res: express.Response): Promise<express.Response> {
      try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        const token = this.getToken(user._id.toString());
        return res.status(201).json({ user, token });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
}

export default UserService;
  