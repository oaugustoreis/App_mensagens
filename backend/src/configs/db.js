module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  database: "messages",
  port: 3306,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
