import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		todo: []
  	};
  	this.handleAdd = this.handleAdd.bind(this);
  }

  //データ保存
  handleAdd(e){
  	e.preventDefault(); //preventDefaultを記述しないとリダイレクトされる。
  	this.state.todo.push({title: e.target.title.value}); // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
  	this.setState({todo: this.state.todo}); // setStateを使ってstateを上書き、この時点で保存が完了
  	e.target.title.value = "";// inputのvalueを空に
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List/>
      </div>
    );
  }
}
