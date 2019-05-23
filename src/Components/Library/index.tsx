import React from "react";

export interface Props {
  message: string;
  position: string;
  type: string;
  key: string;
  isOpen: boolean
  duration?: number;
}

interface State {
  expired: boolean;
}

class Note extends React.Component<Props, State> {

  show(message: string, position: string, type: string): object {
      const classNames = `note ${position} ${type}`;
      
      return (
          <div className={classNames} >
              <p className="text-notif">
                  {message}
              </p>
          </div>
      )
  }

  
  render() {
      
      return this.props.isOpen ? this.show(this.props.message, this.props.position, this.props.type): "";
  }

}

export default Note;