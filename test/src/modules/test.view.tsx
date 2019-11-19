import React, { Component } from 'react';
import { LoginForm, MultiSelect, DatePicker, registerLocale, es, moment, Firebase, FileField, Cookies, UserData } from 'reactive';

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
        
          <LoginForm
            className=""
            classIcon=""
            classLogin=""
            classRegist=""
            classGoogle=""
            classRecover=""
            classCancelRecover=""
            classRegistForm=""
            classCancelRegist=""
            iconUrl=""

            textEmail=""
            textpassword=""
            textRegist=""
            textLogin=""
            textGoogle=""
            textPasswordLost=""
            textLoginMessage="Bienvenido $(name)"

            textCancelRecover=""
            textRecover=""

            textRegistForm=""
            textCancelRegist=""

            //isLoading
            googleSingin
          
          
            onLogin={ (userData: UserData) => {
              console.log(userData);
            }}
            onRegist={ () => {} }


  

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