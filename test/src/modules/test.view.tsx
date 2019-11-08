import React, { Component } from 'react';
import { LoginForm, Col, GradientButton, BugReport, Button, MultiSelect, DatePicker, registerLocale, es, moment, Firebase, convertJSONToArray } from 'reactive';

class TestView extends Component<any, any> {
  
  firebase: Firebase = new Firebase();

  constructor(props: any) {
    super(props);

    registerLocale('es', es);

    this.state = {
      startDate: new Date(),
      bugData: []
    };
  }

  componentDidMount() {
    this.firebase.on('bugReport', (snap: any) => {
      this.setState({ bugData: convertJSONToArray(snap.val())});
    });
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
    const { bugData } = this.state;

    return (
      <div>
        <div>
          { moment().format("DD/MM/YYYY") }
        </div>
        <BugReport
          bugData={ bugData }
          onCreateBug={ (bugData: any) => {
            this.firebase.update(`bugReport/${bugData.uid}`, bugData);
          }}
          adminRole={ true }
        >
          Tengo un problema
        </BugReport>

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
          selected={this.state.startDate}
          onChange={this.handleChange}
        />  
        <Col md={ 8 }>
          <LoginForm
            submitActions={ (formData: any) => console.log(formData) }
            cancel={ () => console.log('Cancelo') }
            showButtons={ true }
            
            icon={ <img alt="principal icon" src="https://icon-library.net/images/animated-icon-gif/animated-icon-gif-13.jpg" width="64" /> }

            textCancel="Registrar"
            classCancel="btn-hover purple-darkPurple"

            textSubmit="Entrar"
            classSubmit="btn-hover pink-orange"

            passwordLost={ <a href="/hola">¿Olvidaste tu contraseña?</a> }
          >
            <GradientButton variant="ligthBlue-purple">
              Iniciar sesión con Google
            </GradientButton>
          </LoginForm>

          <Button>Hola</Button>
        </Col>
      </div>
    );
  }
}

export default TestView;