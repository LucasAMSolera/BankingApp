//export const myUser = {};
//export const users = {};

export function saveData(item, value){
    sessionStorage.setItem(item, JSON.stringify(value))
}

export function getData(item){
    return JSON.parse(sessionStorage.getItem(item))
}

export function deleteData(item){
    sessionStorage.deleteItem(item)
}