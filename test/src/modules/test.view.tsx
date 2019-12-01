import React, { Component } from 'react';
import { MultiSelect, DatePicker, registerLocale, es, moment, Firebase, FileField, Editor } from 'reactive';

class TestView extends Component<any, any> {
  
  firebase: Firebase = new Firebase();
  editor: any;

  constructor(props: any) {
    super(props);

    registerLocale('es', es);

    this.state = {
      startDate: new Date(),
      isLoad: false
    };

    this.editor = React.createRef();
  }

  componentDidMount() {
    console.log(this.editor);
    console.log(document.getElementsByClassName('tox-notifications-container')[0]);
  }

  handleChange = (date: any) => {
    this.setState({
      startDate: date
    });
  };

  onEditorStateChange: Function = (editorState: any) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { isLoad } = this.state;

    return (
      <div>
        <Editor
          ref={ this.editor }
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor |' +
              'alignleft aligncenter alignright alignjustify |' +
              'bullist numlist outdent indent | removeformat | help'
          }}
          onChange={(content: any, editor: any) => { console.log(content); console.log(editor); }}
       />
       
        <FileField 
          className="btn-outline-bug btn"
          onSelectFile={ (file: any) => {
            /*this.setState({ isLoad: true });
            this.firebase.putStorage('/test/readme.md', file, (url: string) => {
              console.log(url);
              this.setState({ isLoad: false });
            });*/
          }}
          accept=""
          loadMessage="Subiendo el archivo"
          isLoad={ isLoad }
          preview={ true }
          classImage="rounded-circle"
        >
          Sube un archivo
        </FileField>

        <div>
          { moment().format("DD/MM/YYYY") }
        </div>
        

        <MultiSelect
          onChange={ () => { console.log('cambio') } }
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]}
        />    

        <DatePicker
          locale={ es }
          className="form-control"
          selected={ this.state.startDate }
          onChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default TestView;