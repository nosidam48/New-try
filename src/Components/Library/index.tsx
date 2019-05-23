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

class SingleNote extends React.Component<Props, State> {

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
      console.log(this.props)
      // If the notification state is not expired, we show it
      // If it is, we return an empty element ''
      return this.props.isOpen ? this.show(this.props.message, this.props.position, this.props.type): "";
  }

}

export default SingleNote;