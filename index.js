const vorpal = require("vorpal")();

vorpal
  .command("goto", "goes to a url with your default browser")
  .action(function (args, callback) {
    this.log("goto");
    callback();
  });

vorpal.command();

vorpal.delimiter().show();
