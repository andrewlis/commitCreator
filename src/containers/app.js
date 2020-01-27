import React from 'react';
import { connect } from 'react-redux';
 
import CommitList from '../components/commit-list';
import AddCommit from '../components/add-commit';

import { addCommit, deleteCommit } from '../actions';

let App = (props) => {
    const {
        commits,
        addCommit,
        deleteCommit,
        inputName,
        inputText
    } = props

    return (
        <div>
            <CommitList 
                commits={commits} 
                deleteCommit={deleteCommit} 
            />
            <AddCommit 
                addCommit={addCommit} 
                inputName={inputName}
                inputText={inputText}
                length={commits.length}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
    return {
        commits: state.commits,
        inputName: '', 
        inputText: ''
    }
}

const mapDispatchTOProps = (dispatch) => {
    return {
        addCommit: (name, text, length) => dispatch(addCommit(name, text, length)),
        deleteCommit: (id) => dispatch(deleteCommit(id))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchTOProps
)(App);

export default App