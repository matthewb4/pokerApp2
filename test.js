new Promise((resolve, reject) => {
    console.log("hi");
    resolve("hi2");
}).then(data => console.log(data))

console.log("hi3");