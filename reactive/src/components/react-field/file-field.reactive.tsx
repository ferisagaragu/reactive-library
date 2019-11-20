import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';

interface Props {
  className?: string;
  classImage?: string;
  defaultImg?: string | React.ReactElement;
  accept: string;
  isLoad?: boolean;
  disabled?: boolean;
  loadMessage?: string;
  preview?: boolean;
  onSelectFile: Function;
  onInit?: Function;
}

interface State {
  fileRender: any;
}

export class FileFieldReactive extends React.Component<Props, State> {
  
  inputRef: any = null; 

  constructor(props: Props) {
    super(props);

    this.state = {
      fileRender: null
    }

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { onInit } = this.props;
    onInit && onInit(this.inputRef);
  }

  private onSelectFile(file: any): void {
    const { onSelectFile } = this.props;
    onSelectFile(file);
    this.setState({ fileRender: URL.createObjectURL(file) });
  }
  
  render() {
    const { className, accept, children, isLoad, preview, loadMessage, classImage, disabled, defaultImg } = this.props;
    const { fileRender } = this.state;

    return (
      <div className="text-center">
        {
          preview &&
            <>
              {
                typeof defaultImg === 'object' && !fileRender ?
                  defaultImg
                :
                  <img className={ `mb-2 ${classImage}` } src={ fileRender ? fileRender : defaultImg } width="128" height="128"/>
              }
              <br />
            </>
        }
        <span className={ `btn-file ${className} ${isLoad && 'btn-file-load'}` } >
          {
            isLoad ? 
              <FontAwesomeIcon icon="spinner" spin/>
            :
              <FontAwesomeIcon icon="file-upload" />
          }
          
          {
            children &&
              <> 
                <SpaceReactive />
                { 
                  isLoad ? 
                    loadMessage ? 
                      loadMessage
                    :
                      children
                  :
                    children
                }
              </>
          }
          <input 
            ref={ this.inputRef }
            type="file" 
            accept={ accept } 
            onChange={ (evt: any) => this.onSelectFile(evt.target.files[0]) }
            disabled={ isLoad || disabled }
          />
        </span>
      </div>
    )
  }
}