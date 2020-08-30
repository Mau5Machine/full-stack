import { UserInputError } from 'apollo-server';
import { Op } from 'sequelize';

export default {
  Query: {
    // ! This query is for the logged in user
    me: async (root, args, { db, me }, info) => {
      const user = await db.user.findByPk(me.id);
      return user;
    },
    // ! This query grabs all the users
    users: async (root, args, { db }, info) => {
      const users = await db.user.findAll();
      if (!users) {
        throw new Error('No users found');
      }
      return users;
    },
  },
  Mutation: {
    // ! This mutation creates new user
    createUser: async (root, { input }, { db }) => {
      const { username, email } = input;
      const userExists = await db.user.findOne({
        where: {
          [Op.or]: [{ email }, { username }],
        },
      });
      if (userExists) {
        throw new Error('A user with this email or username already exists');
      }
      const user = await db.user.create({
        ...input,
      });
      return user;
    },
    login: async (root, { username, password }, { db }, info) => {
      const user = await db.user.findOne({
        where: { username },
      });
      if (!user) {
        throw new UserInputError(`User with ${username} does not exist`);
      }

      const isValid = await user.validatePassword(password);
      if (!isValid) {
        throw new UserInputError('Password is invalid');
      }

      return user;
    },
  },
};
