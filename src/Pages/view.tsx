import React, { Component } from "react";
import SingleNote from "../Components/Library"

export interface Props {
    isOpen: boolean,
    message: string,
    type: string,
    position: string,
}

interface State {
    noteToShow:
        Array<{
            message: string,
            position: string,
            type: string,
            key: string
        }>;

}

class View extends Component<Props, State> { 
    noteArray: Array<any>;
    noteCounter: number;

    constructor(props: Props) {
        super(props);

    this.noteArray = []

    this.state = {
        noteToShow: []
    }

    this.noteCounter = 0

}

    componentDidUpdate(lastProps: Props, lastState: State) {
        if (lastProps.isOpen !== this.props.isOpen && this.props.isOpen) {
            this.addSingleNote(this.props.message, this.props.type, this.props.position);
        }
    }

    addSingleNote(message: string, type: string, position: string): void {

        const note = {
            message: message,
            position: position,
            type: type,
            key: String(this.noteCounter)
        };

        this.updateNoteList(note);
    }

    updateNoteList(note: any): void {

        this.noteCounter++;
        
        this.noteArray.push(note);

        this.setState( {
            noteToShow: this.noteArray
        });

        setTimeout(() => {
            console.log(("removed: " + note));
            
            this.noteArray.shift()
        }, 3000)
    }

    render() {
        const positionList = ["topLeft", "topRight", "bottomLeft", "bottomRight"]
        return (
            <section id="all-notifications">
                {
                    positionList.map((position, index) => (
                        // Create a container for each position of notification
                        <div className="notification-area" id={position} key={index}>
                            {(this.state.noteToShow || []).map(note => {
                                // If we are in the right container, we show the component
                                // If not, we return empty
                                if (position === note.position) {
                                    return <SingleNote
                                        message={note.message}
                                        position={note.position}
                                        type={note.type}
                                        key={note.key}
                                        isOpen={this.props.isOpen}
                                    />
                                } else return ''
                            })}
                        </div>
                    ))
                }
            </section>
        )
    }
    
}

export default View