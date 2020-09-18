export const form = document.querySelector('.form');
export const taskTitle = document.querySelector('#form__title');
export const taskDescription = document.querySelector('#form__description');
export const tasksList = document.querySelector('.tasks__list');
export const tasks = document.querySelectorAll("#tasks__list li");
export const sortByNameBtn = document.querySelector('.nav__sort-by-name');
export const sortByValueBtn = document.querySelector('.nav__sort-by-value');
export const showXMLBtn = document.querySelector('.nav__xml');
export const modal = document.querySelector('#modal');
export const modalClose = document.querySelector('#modal__close');
export const modalData = document.querySelector('.modal__data');
export function getTasksList() {
    return document.getElementById("tasks__list")
}
export function getTasks() {
    return document.querySelectorAll("#tasks__list li")
}