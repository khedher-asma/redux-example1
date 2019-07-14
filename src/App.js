import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import updateUser from './actions/user-actions';
import { bindActionCreators } from 'redux';
class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser (e){
    this.props.onUpdateUser(e.target.value)
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h2>List To Do</h2>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>

    );
  }
}
//mapStateToProps : prend le state du store et elle l'utilise pour décider quels props à donner à ce components
const mapStateToProps = (state,props) => {
  return{
    products: state.products,
    user: state.user,
    userPlusProps:`${state.user} ${props.aRandomProps}`
  }
 
}
//mapActionToProps <=> mapDispatchToProps:ns permet d'envoyer(dispatch) les actions facilement à partir de notre components 
//dans ce cas on n'a pas besoin d'utiliser dispatch() dans les components eux memes on appelle les fonctions qui vont 
// automatiquement envoyer les actions au store
//1)mapActionToProps as an object
// const mapDispatchToProps = {
//   onUpdateUser:updateUser
// }
//2) mapActionToProps as a function
const mapDispatchToProps = (dispatch,props) => {
  return bindActionCreators({
    onUpdateUser:updateUser
  },dispatch)
}
//mergeProps
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
console.log("asma"+propsFromState, propsFromDispatch, ownProps)
return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);