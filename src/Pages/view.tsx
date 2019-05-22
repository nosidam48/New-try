import React, { Component } from "react";
import Library from "../Components/Library"
import Form from "../Components/Form"


class View extends Component { 
    

    state = {
        message: "",
        type: "alert",
        position: "top-left",
        isOpen: false
    }

    handleChange = (event: any) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
    
        let message = this.state.message;
        this.setState({isOpen: true})
        if (!message) {
            alert("Please enter a message!");
            return
        }
        setTimeout(() => {
          this.setState({isOpen: false})
      }, 3000)
    }

    render() {

        return (
            <div>
                <Library
                options ={{
                    message: this.state.message,
                    type: this.state.type,
                    position: this.state.position,
                    isOpen: this.state.isOpen
                }}></Library>
                <Form onChange={this.handleChange} onSubmit={this.handleSubmit} info={this.state}></Form>
            </div>
        )
    }
    
}

export default View