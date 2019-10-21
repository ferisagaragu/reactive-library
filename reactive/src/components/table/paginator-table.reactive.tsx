import * as React from 'react';
import { Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import keyReactive from '../key/key.reactive';

interface Props {
  elementsLength: number;
  defaultSelect: number;
  showNumber: number;
  onSelectedPage: Function;
}

interface State {
  pageSelected: number;
  nodeSelected: number;
}

export default class PaginatorTableReactive extends React.Component<Props, State> {
  
  maxPage: number = 0;

  constructor(props: Props) {
    super(props);

    this.state = {
      pageSelected: 0,
      nodeSelected: this.props.defaultSelect
    }
  }

  private renderPagination(): Array<React.ReactElement> {
    const { nodeSelected } = this.state;
    const { elementsLength, showNumber } = this.props;
    const pageNumber = Math.round(elementsLength / showNumber);
    let pages: Array<React.ReactElement> = [];
    let countPages: number = 1;
    const out: Array<any> = [];

    for (let i: number = 0; i < pageNumber; i++) {
      if ((i + 1) === nodeSelected) {
        pages.push(
          <Pagination.Item key={ keyReactive() } active>
            { 1 + i }
          </Pagination.Item>
        );
      } else {
        pages.push(
          <Pagination.Item 
            key={ keyReactive() }
            onClick={ () => this.onClickNode(i + 1) }
          >
            { 1 + i }
          </Pagination.Item>
        );
      }

      if (countPages === showNumber) {
        out.push(pages);
        pages = [];
        countPages = 1;
      } else {
        countPages++;
      }

      if (pageNumber === (i + 1)) {
        out.push(pages);
      }
    }

    this.maxPage = out.length - 1;
    return out;
  }

  private onClickNode(nodeSelected: number): void {
    const { onSelectedPage } = this.props;
    this.setState({ nodeSelected });
    onSelectedPage(nodeSelected);
  }

  render() {
    const { pageSelected, nodeSelected } = this.state;
    const { elementsLength, showNumber } = this.props;

    return (
      <div>
        { `Mostrando ${nodeSelected * showNumber} a ${(nodeSelected * showNumber) + showNumber} de ${elementsLength} elementos` }

        <Pagination className="float-right">
          <Pagination.Item
            onClick={ () => this.setState({ pageSelected: pageSelected - 1 }) }
            disabled={ pageSelected === 0 }
          >
            <FontAwesomeIcon icon="angle-left" />
          </Pagination.Item>

          { this.renderPagination()[pageSelected] }

          <Pagination.Item
            onClick={ () => this.setState({ pageSelected: pageSelected + 1 }) }
            disabled={ this.maxPage === pageSelected }
          >
            <FontAwesomeIcon icon="angle-right" />
          </Pagination.Item>
        </Pagination>
      </div>
    );
  }
}