import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  } as ConnectOptions).then(() => {
    console.log('Conexão com o MongoDB estabelecida.');
  }).catch((err) => {
    console.error('Erro na conexão com o MongoDB:', err.message);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => console.log('Conexão com o MongoDB estabelecida.'));

export default db;