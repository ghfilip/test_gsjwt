/**
 * project model
 */

const db = require('./db/index');
const Project = db.project;
const User = db.user;

// fetch the profile of currenly athenticated user
const listProjects = async (_, args) => {
    return await Project.findAll();
};

const addProject = async ({ name, companyName}, { user }) => {
    //check user for rights
    const userData = await User.findById(user.id);

    if (userData.dataValues.role === 0) {
        throw new Error('Invalid User Role.');
    }

    return await Project.create({
        name,
        companyName,
    });
};

module.exports = {
    listProjects,
    addProject,
};