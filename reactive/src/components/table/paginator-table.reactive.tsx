import * as React from 'react';
import { Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { splitArrayReactive } from '../util/array.reactive';
import keyReactive from '../key/key.reactive';

interface Props {
  numberPages: number;
  split: number;
  value: number;
  disabled: boolean;
  pageMessage: React.ReactElement;
  onChange: Function;
}

interface State {
  showPages: number;
}

export default class PaginatorTableReactive extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      showPages: 0
    }
  }

  private renderPages(): Array<React.ReactElement> {
    const { value, onChange, numberPages, split, disabled } = this.props;
    const pages: Array<React.ReactElement> = [];
    
    for (let index: number = 0; index < numberPages; index++) {
      pages.push(
        <Pagination.Item
          key={ keyReactive() }
          active={ index === value }
          onClick={ () => onChange(index) }
          disabled={ disabled }
        >
          { (index + 1) }
        </Pagination.Item>
      );
    }

    return splitArrayReactive(pages, split);
  }
  
  render() {
    const { showPages } = this.state;
    const { pageMessage, disabled } = this.props;
    const pages: any = this.renderPages();
    const renderPages: Array<React.ReactElement> = pages[showPages];
    
    return (
      <>
        { pageMessage }

        <Pagination className="float-right">
          <Pagination.Item
            onClick={ () => this.setState({ showPages: 0 }) }
            disabled={ showPages === 0 || disabled }
          >
            <FontAwesomeIcon icon="angle-double-left" />
          </Pagination.Item>

          <Pagination.Item
            onClick={ () => this.setState({ showPages: showPages - 1 }) }
            disabled={ showPages === 0 || disabled }
          >
            <FontAwesomeIcon icon="angle-left" />
          </Pagination.Item>

          { renderPages }

          <Pagination.Item
            onClick={ () => this.setState({ showPages: showPages + 1 }) }
            disabled={ (pages.length - 1) === showPages || disabled }
          >
            <FontAwesomeIcon icon="angle-right" />
          </Pagination.Item>

          <Pagination.Item
            onClick={ () => this.setState({ showPages: (pages.length - 1) }) }
            disabled={ (pages.length - 1) === showPages || disabled }
          >
            <FontAwesomeIcon icon="angle-double-right" />
          </Pagination.Item>
        </Pagination>
      </>
    );
  }
}