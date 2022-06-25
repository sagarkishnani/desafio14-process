module.exports = {
  mongodb: {
    cnxStr: `mongodb+srv://admin-sagar:${process.env.MONGOPASS}@cluster0.lyjw7.mongodb.net/?retryWrites=true&w=majority`,
  },
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  firebase: {
    uri: "./DB/ecommerce-project-d3583-firebase-adminsdk-l5p2s-dcf1171f01.json",
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: "./DB/ecommerce.sqlite",
    },
    useNullAsDefault: true,
  },
  mariaDb: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "sagar",
      password: process.env.MYSQLPASS,
      database: "ecommerce",
    },
  },
};
