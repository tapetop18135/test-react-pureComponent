import React , {PureComponent} from 'react'
import Note from './Note'

export default class Notes extends PureComponent {

    state = {
        notes : ["Note#1","Note#2","Note#3","Note#4"]
    }


    handleChage = (Enote,index) => {
        console.log(Enote,index)
        this.setState({
            notes : [...this.state.notes.slice(0,index),Enote ,...this.state.notes.slice(index+1)]
        },() => {})
        // debugger
        // this.setState({notes : [,]})
    }

    render(){
        return(
            <ul>    
                {this.state.notes.map((note, index) => {
                    return (<Note key={index} index={index} valueNote={note} onChangeText={this.handleChage}></Note>)
                })}
            </ul>
        )

    }

}