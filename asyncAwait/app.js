"use strict"

const apiUrl = "";

async function fetchApi () {
    const apiRequest = await fetch(apiUrl);
    const data = await apiRequest.json();
    return data;
}







