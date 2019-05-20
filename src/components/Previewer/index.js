import React from 'react';


class Previewer extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="panel" dangerouslySetInnerHTML={{__html: this.props.previewText}}></div>
    )
  }
}

export default Previewer;