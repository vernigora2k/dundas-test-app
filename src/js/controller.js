import { modal, modalData } from "./UiElements.js"

export function sortByName() {
    let unsortedList = document.getElementById("tasks__list")
    let tasks = document.querySelectorAll("#tasks__list li")

    // collecting tasks into an array
    let sortedList = []
    for(let i = 0; i < tasks.length; i++) {
        sortedList.push(tasks[i])
    }

    //sort on innerHTML
    sortedList.sort(function(a, b) {
        let aa = a.childNodes[1].childNodes[0].innerHTML
        let bb = b.childNodes[1].childNodes[0].innerHTML
        return aa < bb ? -1 : (aa > bb ? 1 : 0)
    })
   
    // reverse the array because our shuffle runs backwards
    sortedList.reverse()
   
    // fill unsorted list
    for(let i = 0; i < sortedList.length; i++) {
        unsortedList.insertBefore(sortedList[i], unsortedList.firstChild)
    }
}

export function sortByValue() {
    let unsortedList = document.getElementById("tasks__list")
    let tasks = document.querySelectorAll("#tasks__list li")

    // clone unsortedList
    let sortedList = []
    for(let i = 0; i < tasks.length; i++) {
        sortedList.push(tasks[i])
    }
    
    //sort on innerHTML
    sortedList.sort(function(a, b) {
        let aa = a.childNodes[1].childNodes[1].innerHTML
        let bb = b.childNodes[1].childNodes[1].innerHTML
        return aa < bb ? -1 : (aa > bb ? 1 : 0)
    })
       
    // reverse the array because our shuffle runs backwards
    sortedList.reverse()
    
    // fill unsorted list
    for(let i = 0; i < sortedList.length; i++) {
        unsortedList.insertBefore(sortedList[i], unsortedList.firstChild)
    }
}

export function getXML() { 
    let tasksList = document.getElementById("tasks__list")
    let serializer = new XMLSerializer()
    let xmlStr = serializer.serializeToString(tasksList)
    return xmlStr
}

export function showModal(data) {
    modal.classList.add('modal--show')
    modalData.textContent = data
}