
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        role: DataTypes.INTEGER,
    }, {
        instanceMethods: {
            toJSON: function () {
                const values = Object.assign({}, this.get());

                delete values.password;
                return values;
            }
        }
    }, {
    classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
    }
  });
};