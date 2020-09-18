import { getTasks, getTasksList, modal, modalData } from "./UiElements.js"

export function sortBy(typeOfSort) {
    let sortedList = [...getTasks()]
    
    // type of sort depending on typeOfSort value
    sortedList.sort(function(x, y) {
        let a = x.childNodes[1].childNodes[typeOfSort].innerHTML
        let b = y.childNodes[1].childNodes[typeOfSort].innerHTML
        return b.localeCompare(a)
    })
    
    // fill unsorted list
    for(let i = 0; i < sortedList.length; i++) {
        getTasksList().insertBefore(sortedList[i], getTasksList().firstChild)
    }
}

export function getXML() { 
    let serializer = new XMLSerializer()
    return serializer.serializeToString(getTasksList())
}

export function showModal(data) {
    modal.classList.add('modal--show')
    modalData.textContent = data
}