/**
 * user model
 */

const db = require('./db/index');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const User = db.user;

// fetch the profile of currenly athenticated user
const profile = async (args, { user }) => {
    // Make sure user is logged in
    if (!user) {
        throw new Error('You are not authenticated!');
    }
    // user is authenticated
    return await User.findById(user.id);
};

// Handle user signUp
const signUp = async ({ userName, email, password, firstName, lastName }) => {
    const user = await User.create({
        userName,
        email,
        firstName,
        lastName,
        password: await bcrypt.hash(password, 10),
    });

    // Return json web token
    return jsonwebtoken.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' });
};

// Handles user login
const login = async ({ userName, password }) => {
    const user = await User.findOne({ where: { userName } });

    if (!user) {
        throw new Error('No user with that userName');
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        throw new Error('Incorrect password');
    }

    user.token = jsonwebtoken.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
    );

    // Return json web token
    return user;
};

const listUsers = async (args, { user }) => {
    // check user role (admin)
    const userData = await User.findById(user.id);

    if (userData.dataValues.role === 0) {
        throw new Error('Invalid User Role.');
    }

    return await User.findAll();
};

const listUser = async ({ id }, { user }) => {
    // check user role (admin)
    const userData = await User.findById(user.id);

    if (userData.dataValues.role === 0) {
        throw new Error('Invalid User Role.');
    }

    return await User.findById(id);
};

module.exports = {
    profile,
    signUp,
    login,
    listUsers,
    listUser,
};