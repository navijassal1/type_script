"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/todeos/1');
        // console.log(response, 'response')
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        console.log(data, 'data');
    }
    catch (error) {
        console.log(error, 'gdgd');
    }
};
fetchData();
// {"id":1,"todo":"Do something nice for someone you care about","completed":false,"userId":152}
