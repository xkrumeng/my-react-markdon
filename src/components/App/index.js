import React from 'react';
import Marked from 'marked';
import Editor from '../Editor'
import Previewer from '../Previewer'
import './index.css';

// 编辑器主题
const themes = [ 'ambiance',
  'chaos',
  'chrome',
  'clouds',
  'clouds_midnight',
  'cobalt',
  'crimson_editor',
  'dawn',
  'dracula',
  'dreamweaver',
  'eclipse',
  'github',
  'gob',
  'gruvbox',
  'idle_fingers',
  'iplastic',
  'katzenmilch',
  'kr_theme',
  'kuroir',
  'merbivore',
  'merbivore_soft',
  'monokai',
  'mono_industrial',
  'pastel_on_dark',
  'solarized_dark',
  'solarized_light',
  'sqlserver',
  'terminal',
  'textmate',
  'tomorrow',
  'tomorrow_night',
  'tomorrow_night_blue',
  'tomorrow_night_bright',
  'tomorrow_night_eighties',
  'twilight',
  'vibrant_ink',
  'xcode' ]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      editText: '',
      previewText: '',
      theme: 'monokai'
    }
  }

  onEditorChange = (val) => {
    var _this = this;
    Marked.parse(val, function(err, res) {
      _this.setState({
        editText: val, 
        previewText: res
      });
    })
  }
  onSelectTheme = (ev) => {
    this.setState({
      theme: ev.target.value
    })
  }
  renderSelector() {
    let html = themes.map(item => {
      return <option value={item} key={item}>{item}</option>
    });
    
    return (
    <select className="selector" onChange={this.onSelectTheme}>
      {html}
    </select>
    )
  }
  
  render() {
    const  {editText, theme, previewText} = this.state;

    return (
      <div className="app">          
          {/* 左侧编辑窗口 */}
          <Editor onChange={this.onEditorChange} editText={editText} theme={theme} />
          {/* 分隔线 */}
          <div className="spliter"></div>
          {/* 右侧预览窗口 */}
          <Previewer previewText={previewText}/>

          {this.renderSelector()}
      </div>
    );
  }
}

export default App;

