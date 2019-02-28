module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Project', {
        name: DataTypes.STRING,
        companyName: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
};