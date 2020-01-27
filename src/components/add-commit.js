import React from 'react';

const AddCommit = (props) => {
  const {
    addCommit,
    length
  } = props;
  let {    
    inputName,
    inputText
  } = props;

  let name = document.getElementsByClassName('input-name');
  let text = document.getElementsByClassName('input-text');

    return (
    <div>
        {
          length === 0 &&
          <h2>
            Список пуст
          </h2>
        }
      <div className={'input-container'}>
        <form onSubmit={ev => 
              {
                ev.preventDefault();
                if(inputName && inputText){
                addCommit(inputName, inputText);
                name[0].value = '';
                text[0].value = '';
                }
                else{
                  alert('Все поля обязательны к заполнению!')
                }
              }}>
          <input 
            type="text"
            className={'input-name'}
            placeholder="Ваше имя"
            onChange={ev=> { inputName = ev.target.value }}
          />
          <input 
            type="text"
            className={'input-text'}
            placeholder="Текст комментария"
            onChange={ev=> { inputText = ev.target.value }}
          />
          <input type="submit" value="Добавить"  />
        </form>  
      </div>
    </div>
    )
}

export default AddCommit;