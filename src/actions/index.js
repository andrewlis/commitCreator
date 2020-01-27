const date = new Date();
let time = date.getDate() + '.' + (date.getMonth() + 1)
+ '.' + date.getFullYear() + ' ' + date.getHours()+ ':'
+ date.getMinutes();
let nextId = 0;

export const addCommit = (name,  text) => {
    return {
        type: 'ADD_COMMIT',
        id: nextId++,
        name,
        text,
        time
    }
}

export const deleteCommit = (id) => {
    return {
        type: 'DELETE_COMMIT',
        id
    }
}