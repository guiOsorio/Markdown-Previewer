import React, { Component } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Text from '../components/Text/Text';

const marked = require('marked');

/* https://github.com/kallaway/react-markdown-previewer/blob/master/src/App.js */

class App extends Component {
  state = {
    editFull: false,
    previewFull: false,
    text: ""
  }

componentDidUpdate() { console.log(this.state.text) }

editFull = () => this.setState({ editFull: !this.state.editFull })

previewFull = () => this.setState({ previewFull: !this.state.previewFull })

updateText = function(text) {
  this.setState({ text })
}

  render() {
    const { editFull, previewFull, text } = this.state;

    return (
      <div className="container">
        {
          previewFull ? "" :
            <div className="row">
              {editFull ? "" : <div className="col-3"></div>}
              <div className={editFull ? "editFull col-12 text-center my-3 d-flex flex-column p-0" : "edit col-6 text-center mt-3 d-flex flex-column p-0"}>
                {
                  editFull ? 
                    <Header 
                      divClass="editToolbar m-0 pl-2 pr-1"
                      hClass="editTitleFull float-left"
                      iClass="iconFullEdit float-right mr-3"
                      title="Editor"
                      fullScreen={this.editFull}
                    /> :
                    <Header 
                      divClass="editToolbar m-0 pl-2 pr-1"
                      hClass="editElement float-left"
                      iClass="icon float-right"
                      title="Editor"
                      fullScreen={this.editFull}
                    />
                }
                <Text 
                  class="editText justify-self-end"
                  value={text}
                  onChange={(event) => this.updateText(event.target.value)}
                />
              </div>
              {editFull ? "" : <div className="col-3"></div>}
            </div>
        }
        {
          editFull ? "" :
            <div className="row">
              {previewFull ? "" : <div className="col-2"></div>}
              <div className={previewFull ? "previewFull col-12 my-3 d-flex flex-column p-0" : "preview col-8 my-4 d-flex flex-column p-0"}>
                {
                  previewFull ? 
                    <Header
                      divClass="previewToolbar pl-3 pr-2"
                      hClass="previewTitleFull float-left h-100 mb-0"
                      iClass="iconFullPrev previewIcon float-right mr-3"
                      title="Preview"
                      fullScreen={this.previewFull}
                    /> :
                    <Header
                      divClass="previewToolbar pl-3 pr-2"
                      hClass="previewTitle float-left h-100 mb-0"
                      iClass="icon previewIcon float-right"
                      title="Preview"
                      fullScreen={this.previewFull}
                    />
                }
                <div class="previewText justify-self-end" dangerouslySetInnerHTML = {{__html: marked(text)}}></div>
              </div>
              {previewFull ? "" : <div className="col-2"></div>}
            </div>
        }
      </div>
    );
  }
}
 
export default App;