# graphql-sequelize-jwt

 
## Getting Started

Run npm install:

```bash
npm install
```

Modify DB connections from `.env` file:

```txt
NODE_ENV=development
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=test_db
JWT_SECRET=somereallylongsecretkey
```

Then run the migration:

```bash
sequelize db:migrate
```

And finally, start the application:

```bash
npm start
```

The server will be running on [http://localhost:3000/graphql](http://localhost:3000/graphql).
