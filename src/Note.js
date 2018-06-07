import React , {PureComponent} from 'react'

export default class Note extends PureComponent {

    state = {
        noteText : this.props.valueNote
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(this.props.valueNote , nextProps.valueNote)
    //     console.log(this.props.valueNote !== nextProps.valueNote)
        
        
    //     // console.log(this.props.valueNote !== nextProps)
    //     return this.props.valueNote !== nextProps.valueNote
    // }

    
    componentWillUpdate(){
        // debugger
        console.log("will Update")
    }


    handleChangeNote = (e) => {
        this.props.onChangeText(e.target.value,this.props.index)
        // this.setState({noteText : e.target.value}, () => {
        //     this.props.onChangeText(this.state.noteText,this.props.index)
        // })
    }

    render(){
        return(<li><input type="text" defaultValue={this.props.valueNote} onChange={this.handleChangeNote} /><p>{this.props.valueNote}</p></li>)
    }

}