const file = require("./file");
const yargs = require("yargs");

yargs.command({
    command: "addtask",
    builder: {
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
    },
    handler: function (argv) {
        const data = {
            title: argv.title,
            desc: argv.desc,
        };
        file.addtask(data);
    },
});

yargs.command({
    command: "findtask",
    builder: {
        title: {
            type: String,
        },
    },
    handler: function (argv) {
        file.findtask(argv.title);
    },
});

yargs.command({
    command: "removetask",
    builder: {
        title: {
            type: String,
        },
    },
    handler: function (argv) {
        file.removetask(argv.title);
    },
});

yargs.command({
    command: "read",
    handler: function (argv) {
        file.read();
    },
});

yargs.argv;
