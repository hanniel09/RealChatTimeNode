import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../models/user"
import UserService from '../services/UserService';


class UserController extends UserService {
  
}
export default UserController;