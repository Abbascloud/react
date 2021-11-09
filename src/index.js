import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Title = (props) => {
  return <div>
    <h1 class="title">{props.title}</h1>
    <hr /></div>

}

const FunctionComponent = () => {
  return (<div class="container">
    <h1 class="title">FunctionComponent</h1>
    <Title title="this props for Function component"/>
  </div>)
};


class ClassComponent extends React.Component {
  render() {
    return (<div class="container">
      <h1 class="title">ClassComp</h1>
      <Title title="This props for ClassComponent" />
    </div>)
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ClassComponent />
    <FunctionComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);