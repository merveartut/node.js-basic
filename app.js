import data from "./getData.js";

const result = await data(1).then((data) => {
    return data;
});

console.log(result);