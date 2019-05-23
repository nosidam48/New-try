import React from "react";

interface CustomInput {
    onChange(event: any),
    onSubmit(event: any),
    info: any
}

class Message extends React.Component<CustomInput> {
    constructor(props: any) {
        super(props)
    }

render() {
    return (
        <div>
        <form>
        <label htmlFor="message">Message:
        <input type="text" value={this.props.info.message} onChange={this.props.onChange} id="message" name="message"></input>
        </label>
        <br></br>
        <label htmlFor="position">Position: 
        <select value={this.props.info.position} onChange={this.props.onChange} id="position" name="position">
        <option value="topLeft">Top-left</option>
        <option value="topRight">Top-right</option>
        <option value="bottomLeft">Bottom-left</option>
        <option value="bottomRight">Bottom-right</option>
        </select>
        </label>
        <br></br>
        <label htmlFor="type">Type: 
        <select value={this.props.info.type} onChange={this.props.onChange} id="type" name="type">
        <option value="alert">Alert</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        </select>
        </label>
        <br></br>
        <button type="submit" id="submit" onClick={this.props.onSubmit}>Send Message</button>
        </form>
        </div>
    )
}
}

export default Message;