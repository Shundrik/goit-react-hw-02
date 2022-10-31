import React from 'react';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = e => {
    // const newContact = e.tartet.value;
console.log(e);
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         contacts:this.state.contacts.push(newContact),
//       };
    // });
  };

onChangeInput = (e) =>{
console.log(e.target.value);
}



  render() {
    return (
      <div>
        <form action="">
            <label htmlFor="name"> Name</label>
            <br/>
        <input
        onChange={this.onChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </form>
        <button type="submit" onClick={this.addContact}>add contact</button>
      </div>
    );
  }
}
