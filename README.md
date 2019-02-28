# graphql-sequelize-jwt

 
## Getting Started

This test is using:

```bash
sequelize
graphql
jwt
```

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


Credentials for admin user:

```bash
username: admin
password: test
```


GraphQl Queries and Mutations for testing the app (with Insomnia):

- User signUp
```bash
mutation {
  signUp(userName: "test_user", email: "e@ma.il", password: "test", firstName: "fname", lastName: "lname"){
    userName
    email
    firstName
    lastName
  }
}
```

- User signUp.
After you run the login mutation, put the token into Insomnia Auth Barer, so you can provide the auth token to the app.
```bash
mutation {
  login(userName: "test_user", password: "test") {
    token
  }
}
```

- My profile.
```bash
query {
  profile{
    id
    userName
    email
    firstName
    lastName
    role
  }
}
```

- Admin users list.
```bash
query {
  users{
    id
    userName
    email
    firstName
    lastName
    role
  }
}
```

- Admin user view.
```bash
query {
  user(id: 6){
    id
    userName
    email
    firstName
    lastName
    role
  }
}
```

- Admin ads a project.
```bash
mutation {
  addProject(name: "Project1", companyName: "Company1"){
    name
    companyName
  }
}

```

- Projects list (also for nonauth users).
```bash
query {
  projects{
    name
    companyName
  }
}
```



Problem:

A node.js app.

What a regular user can do:

 

·         register (username, email, password, first name, last name)

·         login (username, password)

·         see details about his profile (username, email, first name, last name), just if he it's logged in, and he must only be able to view HIS profile

 

    What an admin can do:

 

·         login (username, password)

·         see all users available with (username, email, first name, last name)

·         add a project (name, company name)

 

    What everyone can do:

 

·         see all the projects available inside the platform, without registration

 

Specs:

·         You do not need to have a database for this, you can simply store the data inside an object in memory (it will be reset on restart). You could also store the object in a file if you want. But, we consider a plus an interaction with database, you can use Sequelize as ORM.

·         You should probably have a predefined admin user (since they cannot directly register from the API), just hardcode it somewhere, it's enough.

·         You can use any authentication method you want: JWT, cookies etc.

·         Validate if the user have permission to make that request to the web service. For example an user cannot add a project or see the details about other users.

