const commitsList = (state , action) => {

    switch(action.type){
        case 'ADD_COMMIT':
            return {
                commits:[
                ...state.commits,
                { id: action.id, name: action.name, text: action.text, time: action.time }
                ],
                inputName: '',
                inputText: ''
            }

        
        case 'DELETE_COMMIT':
            return {
                commits: state.commits.filter(cmt => cmt.id !== action.id),
                inputName: '',
                inputText: ''
            }

        default:
            return state;
    }
    
}

export default commitsList;