import * as React from 'react';
import './Components/Library/style.css';

// Import the components
import View from './Pages/view';
import Form from './Components/Form';

interface Props {

}

interface State {
    isOpen: boolean;
    formData: {
        message: string,
        type: string,
        position: string
    }
}

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
            formData: {
                message: "",
                type: "alert",
                position: "topLeft"
            }
        }
    }

    addNote(e: any) {
      e.preventDefault()
      
      let message = this.state.formData.message;
      if (!message) {
        alert("Enter a message fool!")
        return
      }
      this.setState({isOpen: true})
        // Toggle the state
        setTimeout(() => {
          this.setState({isOpen: false})

      }, 3000)

    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData, [name]: value
            }
        }));
    }

    public render() {
        return (
            <section role="main">
                <View
                    isOpen={this.state.isOpen}
                    message={this.state.formData.message}
                    type={this.state.formData.type}
                    position={this.state.formData.position}
                />
                <h1>Note Maker 3000</h1>
                <Form
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.addNote.bind(this)}
                    info={this.state.formData}
                />
            </section>
        );
    }
}

export default App;
