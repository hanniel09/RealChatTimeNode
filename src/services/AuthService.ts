import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User from '../models/user';


class AuthService {
  public async createdUser(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Usuário ou Senha incorretos' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Usuário ou Senha incorretos.' });
    }

    const token = jwt.sign({ userId: user._id }, 'segredo');

    return res.json({ token });
  }
}

export default new AuthService();
