module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.createTable('Users', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                userName: {
                    type: Sequelize.STRING,
                },
                email: {
                    type: Sequelize.STRING,
                },
                password: {
                    type: Sequelize.STRING,
                },
                firstName: {
                    type: Sequelize.STRING,
                },
                lastName: {
                    type: Sequelize.STRING,
                },
                role: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            }),
            queryInterface.createTable('Projects', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                name: {
                    type: Sequelize.STRING,
                },
                companyName: {
                    type: Sequelize.STRING,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            }),
            queryInterface.bulkInsert('Users', [
                {
                    userName: "admin",
                    email: "a@b.ro",
                    password: "$2b$10$U9jtR0u3n6KJ2DobsnPYMOiRz0azDsAzTueoXAZ1NjPpms3Uiz.zC",
                    firstName: "Admin",
                    lastName: "A",
                    role: 1,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                },
            ]),
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};
