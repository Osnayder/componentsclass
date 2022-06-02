import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'osnayder',
      age: 23,   
      email: 'osnayder.conde@gmailc.com',
      tel: '312 616 7731'
    };
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeTel = this.changeTel.bind(this);
  }

  changeName() {
    this.setState({name:'Mario'});
  }

  changeAge() {
    this.setState({age:55});
  }

  changeEmail() {
    this.setState({email:'otro@gmail.com'});
  }

  changeTel() {
    this.setState({tel: 3232323323});
  }

  render() {
    const {name, age, email, tel } = this.state;
    return (
      <div>
       <p>Esta es una aplicación web</p>
       <p>Los componentes de esta aplicación estan basados  en clases</p>
       <p>{name + age + email + tel}</p>
       <button onClick={this.changeName}>Cambiar nombre</button>
       <button onClick={this.changeAge}>Cambiar edad</button>
       <button onClick={this.changeEmail}>Cambiar Email</button>
       <button onClick={this.changeTel}>Cambiar tel</button>
      </div>
    );
  }
}

export default App;
