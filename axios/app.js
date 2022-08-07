"use strict"

const apiUrl = "https://jsonplaceholder.typicode.com/users";

const sendGetRequest = async () => {
    try {
        const response = await axios.get(apiUrl)
        console.log(response.data);
    } catch(error) {
        console.log(error);
    }
}
sendGetRequest();
