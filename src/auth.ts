import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "./models/user"

const router = express.Router();

router.post('/login', async (req, res) => {
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

  res.json({ token });
});


export default router;  
