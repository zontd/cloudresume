window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterdansazureresume.azurewebsites.net/api/HttpTrigger2?code=B0xVi5pViMttrxpblxyAJ7ITSK1izuHKk6QK11qT_96_AzFuTEzeiw=='
const localFunctionApi = 'http://localhost:7071/api/HttpTrigger2';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
