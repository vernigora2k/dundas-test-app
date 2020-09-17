
import { taskTitle, taskDescription, form, sortByNameBtn, sortByValueBtn, showXMLBtn, modalClose, modal } from './UiElements.js';
import {  sortByName, sortByValue, getXML, showModal } from './controller.js';

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // remove extra spaces
    let titleTrimmed = taskTitle.value.replace(/ +/g, ' ').trim()
    let descriptionTrimmed = taskDescription.value.replace(/ +/g, ' ').trim()
    const task = {
        title: titleTrimmed,
        description: descriptionTrimmed
    }
    const newTask = new Task(task)
    newTask.create()
})

sortByNameBtn.addEventListener('click', () => {
    sortByName()
})

sortByValueBtn.addEventListener('click', () => {
    sortByValue()
})

showXMLBtn.addEventListener('click', () => {  
    showModal(getXML())
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--show')
})

export default class Task {
    constructor(task) {
        this.title = task.title
        this.description = task.description
    }
    create() {
        let tasksList = document.querySelector('#tasks__list')
        let newTask = document.createElement('li')
        newTask.innerHTML = `<input id=${this.title} type='checkbox'/>` +
            `<label class="task" for=${this.title}>` +
            `<h3>${this.title}</h3>` +
            `<span>${this.description}</span>` +
            `<div class="delete-button"></div>` +
            `</label>`; 
        tasksList.append(newTask) 
        tasksList.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-button')) {
                const task = event.target.parentNode.parentNode
                task.classList.add('hide-slow')
                setTimeout(() => {
                    tasksList.removeChild(task)
                }, 800)   
            }
        })
    }
}