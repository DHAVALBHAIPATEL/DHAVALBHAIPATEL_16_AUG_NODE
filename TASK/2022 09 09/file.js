const fs = require("fs");

const addtask = (data) => {
    const alldata = getdata();
    const duplicate = alldata.find((element) => {
        return element.title == data.title;
    });

    if (duplicate) return console.log("Task is already exist!");

    alldata.push(data);
    const mydata = JSON.stringify(alldata);
    fs.writeFile("test.json", mydata, () => {
        console.log("Task Added Successfully");
    });
};

const read = () => {
    const data = getdata();
    console.log(data);
};

const getdata = () => {
    try {
        const data = fs.readFileSync("test.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const findtask = (title) => {
    const alldata = getdata();

    const duplicate = alldata.filter((element) => {
        return element.title == title;
    });

    if (duplicate) {
        console.log(duplicate);
    } else {
        console.log("Task not Found...");
    }
};

const removetask = (title) => {
    const alldata = getdata();

    const duplicate = alldata.filter((element) => {
        return element.title != title;
    });

    const mydata = JSON.stringify(duplicate);
    fs.writeFile("test.json", mydata, () => {
        console.log("Task remove successfully");
    });
};

module.exports = { addtask, read, findtask, removetask };
