import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../models/user"
import UserService from '../services/UserService';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';


class UserController extends UserService {
  }

export default UserController;