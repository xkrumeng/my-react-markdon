import React from 'react';

import AceEditor from "react-ace";
import "brace/mode/markdown";
// 导入主题
import 'brace/theme/ambiance';
import 'brace/theme/chaos';
import 'brace/theme/chrome';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';
import 'brace/theme/cobalt';
import 'brace/theme/crimson_editor';
import 'brace/theme/dawn';
import 'brace/theme/dracula';
import 'brace/theme/dreamweaver';
import 'brace/theme/eclipse';
import 'brace/theme/github';
import 'brace/theme/gob';
import 'brace/theme/gruvbox';
import 'brace/theme/idle_fingers';
import 'brace/theme/iplastic';
import 'brace/theme/katzenmilch';
import 'brace/theme/kr_theme';
import 'brace/theme/kuroir';
import 'brace/theme/merbivore';
import 'brace/theme/merbivore_soft';
import 'brace/theme/monokai';
import 'brace/theme/mono_industrial';
import 'brace/theme/pastel_on_dark';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/sqlserver';
import 'brace/theme/terminal';
import 'brace/theme/textmate';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night';
import 'brace/theme/tomorrow_night_blue';
import 'brace/theme/tomorrow_night_bright';
import 'brace/theme/tomorrow_night_eighties';
import 'brace/theme/twilight';
import 'brace/theme/vibrant_ink';
import 'brace/theme/xcode';

class Editor extends React.Component {

  constructor(props) {
    super(props)  
    this.state = {
      width: '100%',
      height: '100%'
    }
  }

  onScroll = (ev) => {
    console.log(ev)
  }

  render() {   
    const {theme, editText, onChange} = this.props;
    const {width, height} = this.state;
    return (
      <div className="panel">
          <AceEditor
            mode="markdown"
            theme={theme}
            onChange={onChange}
            onScroll={this.onScroll}
            value={editText}
            width={width}
            height={height}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
      </div>
    )
  }
}

export default Editor