'use strict'

import { getData, postData } from "./services.js";

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.main__btn');
    const inputValue = document.querySelector('.main__input');
    const tag = document.querySelector('#main__select');
    const mainResult = document.querySelector('.main__result');

    //state
    let isPage = false;
    let totalTags = 0;
    let averageRequestTime = 0;
    let counter = 0;
    let requestsToHost = 0;
    let tagValue = tag.value.toUpperCase();
    let url = '';
    let timeOfRequest = 0;
    let counterOfRequest = 0;
    let startTimeRequest = 0;
    let year = 0;
    let month = 0;
    let day = 0;
    let hour = 0;
    let minute = 0;

    function changeActiveBtn(active) {  //Locking the button for the duration of the request
        btn.disabled = active;
    }

    function parseStrToDOM(str) {   //parsing string to DOM
        const parser = new DOMParser();
        return parser.parseFromString(str, "text/html");
    }

    function calcNodes(dom, tag) {  //calc input nodes
        const body = dom.body;

        function recursy(element) {
            element.childNodes.forEach(node => {
                if (node.nodeName === `${tag}`) {
                    counter++;
                } else {
                    recursy(node)
                }
            })
        }
        recursy(body);
        return counter;
    }

    btn.addEventListener('click', (e) => {  //start request after click on button
        e.preventDefault();        
        changeActiveBtn(true);     //Button lock
        validHTML(inputValue.value) //Checking if a link is valid
            .then(()=>isHtml()) //If the link is valid, the DOM tree as a string is written to the file, then this file is checked by the isHTML function, if there is a structure in the file, then isPage is set to "true"
            .then(()=>{
                if(isPage){ //checking if we got a DOM tree from the entered link
                    if (url.href == inputValue.value) { //verification, the link entered is the same as the previous one. Protection against additional unnecessary requests.
                        if ((new Date() - startTimeRequest) > 300000 || tagValue != tag.value.toUpperCase()) {  //checking if the link entered was requested within the last 5 minutes and if the same tag was used
                            startTimeRequest = new Date();  //Record the start time of the request
                            tagValue = tag.value.toUpperCase();                
                            getDataFromDB(url);
                        } else {
                            alert('This URL has already been used in the last 5 minutes');
                            changeActiveBtn(false);
                        }
                    } else {
                        startTimeRequest = new Date();  //Record the start time of the request
                        url = new URL(`${inputValue.value}`);
                        getDataFromDB(url);
                    }
                } else {
                    changeActiveBtn(false);
                    putResult();
                }
            })       

    });

    async function validHTML(url){  //The function to get the DOM tree and write it to a file
        return await getData('../api/validURL.php?url=' + encodeURIComponent(url))
    }

    async function getHTML(url){    //Function to get DOM tree by reference
        return await getData('../api/getDom.php?url=' + encodeURIComponent(url))
    }

    async function isHtml() {   //Function to check if a DOM tree was obtained by reference
        return await getData(`../api/output.html?rnd=${Math.random()}`)
            .then((res) => {
                res.length > 0 ? isPage = true : isPage = false
            })
            .catch(() => false);
    }


    function addZero(num) { //Correct date display function
        if (num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }

    function generatedHtmlResponce(counter, url, requestsToHost) {  //response generation function
        year = startTimeRequest.getFullYear();
        month = addZero(startTimeRequest.getMonth() + 1);
        day = addZero(startTimeRequest.getDate());
        hour = addZero(startTimeRequest.getHours());
        minute = addZero(startTimeRequest.getMinutes());
        if(counter){
            return `
            <div class="main__header">Request №${counterOfRequest}</div> 
            <div class="main__descr">Number of <span class="main__descr-bold">"${tagValue}"</span> elements on the page <span class="main__descr-italic">${url}</span>: ${counter}. <br> Request execution time: ${timeOfRequest}ms. <br> Link <span class="main__descr-italic">${url}</span> was received on ${year}/${month}/${day} at ${hour}:${minute} <br> Total requests to <span class="main__descr-italic">${url.origin}</span> is: ${requestsToHost}<br>Average request time for <span class="main__descr-italic">${url.origin}</span> domain in 24 hours: ${averageRequestTime ? averageRequestTime+'ms' : 'No requests for this hosting yet'}<br>Number of <span class="main__descr-bold">"${tagValue}"</span> tags found all time: ${totalTags}</div>
        `
        } else {
            return `
            <div class="main__header">Request №${counterOfRequest}</div> 
            <div class="main__descr">Invalid URL entered or the requested page is empty</div>
            `
        }
    }

    function putResult(counter, url, requestsToHost) {  //function to add a response to the page
        counterOfRequest++
        let div = document.createElement('div');
        div.classList.add('main__result__wrapper');
        div.innerHTML = generatedHtmlResponce(counter, url, requestsToHost);
        mainResult.appendChild(div);
    }

    async function addReqToDB(counter, url) {   //function to add response to database
        timeOfRequest = new Date() - startTimeRequest;
        const body = JSON.stringify({
            timeOfRequest: timeOfRequest,
            url: url.href,
            hostname: url.origin,
            startTimeRequest: startTimeRequest,
            counter: counter,
            tagValue: tagValue
        })
        await postData('../api/requestsDB.php', body)
            .then(res => console.log(res))
            .catch(error => console.log(error));
        return counter
    }

    async function getNewDataFromDB(){  //function to get data from database after request execution
        await getData(`../requestDB/requestDB.json?rnd=${Math.random()}`)
            .then(res=>calcRequestData(res));
    }

    async function getDataFromDB(url) {    //function to get data from the database    
        await getData(`../requestDB/requestDB.json?rnd=${Math.random()}`)
            .then(res => checkURL(res, url))
            .then(res => postRequest(res))            
            .then(() => changeActiveBtn(false))
    }

    async function calcRequestData(data) {  //function to count all data from the request
        totalTags = 0;
        let filteredDataByHostname = await data.filter(item => item.hostname == url.origin);
        let filteredDataByHostname24Hour = await filteredDataByHostname.filter(item => (startTimeRequest - Date.parse(item.startTimeRequest)) < 86400000);
        let filteredDataByTag = await data.filter(item => item.tagValue == tagValue);
        let total = 0;
        filteredDataByHostname24Hour.forEach(item => {
            total = total + +(item.timeOfRequest);
        });
        filteredDataByTag.forEach(item => {
            totalTags = totalTags + item.counter;
        });
        averageRequestTime = Math.round(total / filteredDataByHostname24Hour.length);
        requestsToHost = filteredDataByHostname.length;
    }

    async function checkURL(data, url) {    //getting data by the entered URL from the database and additional check for the condition
        let filteredDataByUrl = await data.filter(item => item.url == url.href);
        let filteredUrlByTag = await filteredDataByUrl.filter(item => item.tagValue == tagValue);
        if (filteredUrlByTag.length === 0 || startTimeRequest - Date.parse(filteredUrlByTag[filteredUrlByTag.length - 1].startTimeRequest) > 300000) {            
            return url
            ;
        } else {
            return;
        }
    }

    async function postRequest(url) {   //sequential chain of execution of functions. Promise
        if (url) {
            await getHTML(url)
                .then(parseStrToDOM)
                .then(res => calcNodes(res, tagValue))
                .then(() => addReqToDB(counter, url))
                .then(()=>getNewDataFromDB())
                .then(() => putResult(counter, url, requestsToHost))
        } else {
            alert('This URL has already been used in the last 5 minutes');
        }
    }
})