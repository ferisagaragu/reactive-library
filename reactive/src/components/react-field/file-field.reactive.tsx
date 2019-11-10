import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';

interface Props {
  className?: string;
  accept: string;
  isLoad?: boolean;
  loadMessage?: string;
  preview?: boolean;
  onSelectFile: Function;
}

interface State {
  fileRender: any;
}

export class FileFieldReactive extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      fileRender: null
    }
  }

  private onSelectFile(file: any): void {
    const { onSelectFile } = this.props;
    onSelectFile(file);
    this.setState({ fileRender: URL.createObjectURL(file) });
  }
  
  render() {
    const { className, accept, children, isLoad, preview, loadMessage } = this.props;
    const { fileRender } = this.state;

    return (
      <div className="text-center">
        {
          preview &&
            <>
              <img className="mb-2" src={ fileRender } width="128" height="128"/>
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
            type="file" 
            accept={ accept } 
            onChange={ (evt: any) => this.onSelectFile(evt.target.files[0]) }
            disabled={ isLoad }
          />
        </span>
      </div>
    )
  }
}