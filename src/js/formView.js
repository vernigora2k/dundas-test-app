
import { taskTitle, taskDescription, form, sortByNameBtn, sortByValueBtn, showXMLBtn, modalClose, modal } from './UiElements.js';
import {  sortBy, getXML, showModal } from './controller.js';

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // remove extra spaces
    const task = {
        title: taskTitle.value.replace(/ +/g, ' ').trim(),
        description: taskDescription.value.replace(/ +/g, ' ').trim()
    }
    const newTask = new Task(task)
})

sortByNameBtn.addEventListener('click', () => {
    sortBy(0)
})

sortByValueBtn.addEventListener('click', () => {
    sortBy(1)
})

showXMLBtn.addEventListener('click', () => {  
    showModal(getXML())
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--show')
})

export default class Task {
    constructor(task) {
        let tasksList = document.querySelector('#tasks__list')
        let newTask = document.createElement('li')
        this.title = task.title
        this.description = task.description
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