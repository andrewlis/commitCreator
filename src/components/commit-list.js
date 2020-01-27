import React from 'react';

const CommitList = (props) => {
    const { commits, deleteCommit } = props;
    return (
    <div
        className={'container'}
    >
        {
          commits.map((cmt) => {
            return(
              <div key={cmt.id} className={'commit-container'}>
                <div className={'name'}>
                  {cmt.name}
                </div>
                <div className={'date'}>
                  {cmt.time}
                </div>
                <div 
                  className={'delete'} 
                  onClick={ev => deleteCommit(cmt.id)}
                >
                  X
                </div>
                <div className={'commmit'}>
                  {cmt.text}
                </div>
              </div>
            );
          })
        }  
     </div>
    ) 
}

export default CommitList;