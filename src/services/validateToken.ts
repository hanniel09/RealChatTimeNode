import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

class validateToken {
  getToken(userId: string): string {
    if (!ObjectId.isValid(userId)) {
      throw new Error('Invalid user id');
    }
    return jwt.sign({ userId }, 'segredo');
  }
}

export default validateToken;