let resources = document.querySelector('.resources-count')
let parsedResources = parseFloat(resources.innerHTML)

let workerCost = document.querySelector('.worker-cost')
let parsedWorkerCost = parseFloat(workerCost.innerHTML)

function incrementResources(){
    parsedResources += 1
    resources.innerHTML = parsedResources
}

function buyWorker(){
    if (parsedResources >= parsedWorkerCost){
        parsedResources -= parsedWorkerCost
        resources.innerHTML = parsedResources
    }
}