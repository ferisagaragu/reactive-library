import React, { Component } from 'react';
import { LoginForm, Col, MultiSelect, DatePicker, registerLocale, es, moment, Firebase, FileField, Cookies } from 'reactive';

class TestView extends Component<any, any> {
  
  firebase: Firebase = new Firebase();

  constructor(props: any) {
    super(props);

    registerLocale('es', es);

    this.state = {
      startDate: new Date(),
      isLoad: false
    };
  }

  componentDidMount() {
    //Cookies.set('name', 'value');
    console.log(Cookies.get('name'))
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
        <Col md={ 8 }>
          <LoginForm
            className="login"
            classIcon=""
            classLogin=""
            classRegist=""
            classGoogle=""
            iconUrl="https://icon-library.net/images/animated-icon-gif/animated-icon-gif-13.jpg"

            textUser="User =/"
            textpassword="Password =)"
            textRegist="Registrar =)"
            textLogin="Iniciar sesión =)"
            textGoogle="Iniciar sesión con Google =)"
            textPasswordLost="¿No recuerdas tu contraseña? =)"
          
            //isLoading
            googleSingin
          
          
            onLogin={ () => {} }
            onRegist={ () => {} }
          />
        </Col>

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