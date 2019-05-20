import React from 'react';
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript';
import './preview.css'

class Previewer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    hljs.registerLanguage('javascript', javascript)
  }

  render() {
    return (
      <div className="panel">
        <div className="preview" dangerouslySetInnerHTML={{__html: this.props.previewText}}></div>
      </div>
    )
  }
}

export default Previewer;