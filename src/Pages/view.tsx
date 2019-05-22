import React, { Component } from "react";
import Library from "../Components/Library"
import Form from "../Components/Form"

interface CustomInput {
    onChange: string,
    onSubmit: string
}


class View extends Component<CustomInput> { 
    constructor(props: CustomInput) {
        super(props);

    }

    state = {
        message: "",
        type: "alert",
        position: "top-left"
    }

    handleChange = (event: any) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event: any) => {
        event.preventDefault()

        let message: string = this.state.message
        let position: string = this.state.position
        let type: string = this.state.type;

        if (!message) {
            alert("Please enter a message!");
            return
        }
        let target = document.getElementById(position)

        let msgbox = document.createElement("p")

        msgbox.innerHTML = message;

        msgbox.classList.add(type);

        if(position === "topLeft" || position === "topRight") {
               target!.prepend(msgbox)
        }
        if (position === "bottomLeft" || position === "bottomRight") {
               target!.append(msgbox)
        }
        
        setTimeout(() => {
            msgbox.style.opacity = "0"
            msgbox.addEventListener("transitionend", destroyMessage, false)
            function destroyMessage() {
                target!.removeChild(msgbox)
            }
        }, 3000)
    }

    render() {
        const {onChange, onSubmit} = this.props
        return (
            <div>
                <Library
                options= {{
                    message: this.state.message,
                    type: this.state.type,
                    position: this.state.position  
                }}></Library>
                <Form onChange={this.handleChange} onSubmit={this.handleSubmit}></Form>
            </div>
        )
    }
    
}

export default View