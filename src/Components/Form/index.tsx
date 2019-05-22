import React from "react";
import "./style.css";

class Message extends React.Component {

    

render() {
    return (
        <div>
        <form>
        <label htmlFor="message">Message:
        <input type="text" value={this.state.message} onChange={this.handleChange} id="message" name="message"></input>
        </label>
        <br></br>
        <label htmlFor="position">Position: 
        <select value={this.state.position} onChange={this.handleChange} id="position" name="position">
        <option value="topLeft">Top-left</option>
        <option value="topRight">Top-right</option>
        <option value="bottomLeft">Bottom-left</option>
        <option value="bottomRight">Bottom-right</option>
        </select>
        </label>
        <br></br>
        <label htmlFor="type">Type: 
        <select value={this.state.type} onChange={this.handleChange} id="type" name="type">
        <option value="alert">Alert</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        </select>
        </label>
        <br></br>
        <button type="submit" id="submit" onClick={this.handleSubmit}>Send Message</button>
        </form>
        </div>
    )
}
}

export default Message;