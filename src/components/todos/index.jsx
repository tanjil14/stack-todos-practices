import React from 'react';
import ListView from './Listview/index'
import TableView from './TableView/index'
import Controller from './controllers/index'
import CreateTodoForm from './create-todo-form/index'
import {Modal,ModalBody,ModalHeader} from 'reactstrap'
import shortid from 'shortid';
class Todos extends React.Component{
    state={
        todos:[
            {
                id:'qerewtr',
                text:'main todo text',
                description:'Simple',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:'qerewtrt',
                text:'another text',
                description:'Simple',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:'qerewtrtwe',
                text:'New Task',
                description:'Simple',
                time:new Date(),
                isComplete:false,
                isSelect:false
            }
        ],
        isOpenTodoForm:false,
        searchTerm:'',
        view:'list',
        filter:'all'
    };

    toggleForm=()=>{
     this.setState({
         isOpenTodoForm:!this.state.isOpenTodoForm
        })
    };

    handleSearch=value=>{
      this.setState({searchTerm:value})
    };

    handleFilter=filter=>{
        this.setState({filter})
    };

    changeView=event=>{
       this.setState({
           view:event.target.value
       })
    };

    clearSelected=()=>{
        const todos=this.state.todos.filter(todo=>!todo.isSelect)
        this.setState({todos})
    };
    clearComplete=()=>{
        const todos=this.state.todos.filter(todo=>!todo.isComplete)
        this.setState({todos})
    };
    reset=()=>{
        this.setState({
            
        isOpenTodoForm:false,
        searchTerm:'',
        view:'list',
        filter:'all'
        })
    };

    performSearch=()=>{
    return this.state.todos.filter(todo=>todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
};
performFilter=todos=>{
    const {filter}=this.state
    if(filter=='complete'){
        return todos.filter(todo=>todo.isComplete)
    }else if(filter=='running'){
        return todos.filter(todo=>!todo.isComplete)
    }else{
          return todos
    }
    
}

   getView=()=>{
       let todos=this.performSearch();
       todos=this.performFilter(todos)
    return  this.state.view=='list'?(
        <ListView 
        todos={todos} 
        toggleSelect={this. toggleSelect}
        toggleComplete={this.toggleComplete}
        />):(
            <TableView 
            todos={todos} 
            toggleSelect={this. toggleSelect}
            toggleComplete={this.toggleComplete}
            />
        )
        };
    createTodo=todo=>{
    todo.id=shortid.generate();
    todo.time=new Date();
    todo.isComplete=false;
    todo.isSelect=false;

    const todos=[todo,...this.state.todos];
    this.setState({todos});
    this.toggleForm(); 
    };

    toggleSelect=todoId=>{
        const todos=[...this.state.todos];
        const todo=todos.find(t=>t.id==todoId)
        todo.isSelect=!todo.isSelect
        this.setState({todos})
    };
    toggleComplete=todoId=>{
        const todos=[...this.state.todos];
        const todo=todos.find(t=>t.id==todoId)
        todo.isComplete=!todo.isComplete;
        this.setState({todos})
    };
    render(){
        return(
            <div>
            <h1 className='display-4 text-center mb-5'>Stack Todos</h1>
            <div>
            <Controller 
            term={this.state.searchTerm}
            view={this.state.view}
            handleSearch={this.handleSearch}
            toggleForm={this.toggleForm}
            handleFilter={this.handleFilter}
            changeView={this.changeView}
            clearSelected={this.clearSelected}
            clearComplete={this.clearComplete}
            reset={this.reset}
            />
            {this.getView()}
            
            </div>
            <Modal
            isOpen={this.state.isOpenTodoForm}
            toggle={this.toggleForm}>
            <ModalHeader toggle={this.toggleForm}>
            Create new Todo Item
            </ModalHeader>
            <ModalBody>
            <CreateTodoForm createTodo={this.createTodo}/>
            </ModalBody>
            </Modal>
            </div>
        );
    }
}
export default Todos;