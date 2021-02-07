module.exports = function () {
  const vorpal = require("vorpal")();
  vorpal.delimiter().show();

  // const goto = function (url) {
  //   vorpal
  //     .command("goto", "goes to a url with your default browser")
  //     .action(function (args, callback) {
  //       this.log("goto");
  //       callback();
  //     });
  // };

  // const repl = function () {
  //   vorpal
  //     .command("repl", "do maths -original")
  //     .mode("repl")
  //     .delimiter("repl:")
  //     .action(function (command, callback) {
  //       this.log(eval(command));
  //     });
  // };

  // const sql = function () {
  //   vorpal
  //     .command("sql", "directly enter arbitrary SQL. -original")
  //     .mode("sql")
  //     .delimiter("sql:")
  //     .init(function (args, callback) {
  //       this.log(
  //         "Welcome to SQL mode.\nYou can now directly enter arbitrary SQL commands. To exit, type `exit`."
  //       );
  //       callback();
  //     })
  //     .action(function (command, callback) {
  //       var self = this;
  //       app.query(command, function (res) {
  //         self.log(res);
  //         callback();
  //       });
  //     });
  // };
};
const vorpal = require("vorpal")();
vorpal.delimiter().show();

vorpal
  .command("goto", "goes to a url with your default browser")
  .action(function (args, callback) {
    this.log("goto");
    callback();
  });

vorpal

  .mode("repl")
  .description("d o maths -original")
  .delimiter("repl:")
  .action(function (command, callback) {
    this.log(eval(command));
  });

vorpal

  .mode("sql")
  .description("directly enter arbitrary SQL. -original")
  .delimiter("sql:")
  .init(function (args, callback) {
    this.log(
      "Welcome to SQL mode.\nYou can now directly enter arbitrary SQL commands. To exit, type `exit`."
    );
    callback();
  })
  .action(function (command, callback) {
    var self = this;
    app.query(command, function (res) {
      self.log(res);
      callback();
    });
  });

// vorpal.mode().description("goes to home page");
