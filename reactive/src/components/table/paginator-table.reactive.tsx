import * as React from 'react';
import { Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import keyReactive from '../key/key.reactive';

interface Props {}

interface State {
  maxPage: number;
  pageSelected: number;
  nodeSelected: number;
}

export default class PaginatorTableReactive extends React.Component<Props, State> {
  
  maxPageLength: number = 0;

  constructor(props: Props) {
    super(props);

    this.state = {
      maxPage: -1,
      pageSelected: 0,
      nodeSelected: 1
    }
  }

  componentDidMount() {
    this.setState({ maxPage: this.maxPageLength });
  }
  
  private renderPagination(): Array<React.ReactElement> {
    const { nodeSelected } = this.state;
    const pageNumber = 20;
    let pages: Array<React.ReactElement> = [];
    let countPages: number = 1;
    let passPage: boolean = true;
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

      if (countPages === 5) {
        out.push(pages);
        pages = [];
        countPages = 1;
        passPage = false;
      } else {
        countPages++;
        passPage = true;
      }

      if (pageNumber === (i + 1) && passPage) {
        out.push(pages);
      }
    }

    this.maxPageLength = out.length - 1;
    return out;
  }

  private onClickNode(nodeSelected: number): void {
    this.setState({ nodeSelected });
  }

  render() {
    const { pageSelected, maxPage } = this.state;

    console.log(pageSelected);
    console.log(maxPage);

    return (
      <>
        <Pagination className="ml-5">
          <Pagination.Item
            onClick={ () => this.setState({ pageSelected: pageSelected - 1 }) }
            disabled={ pageSelected === 0 }
          >
            <FontAwesomeIcon icon="angle-left" />
          </Pagination.Item>

          { this.renderPagination()[pageSelected] }

          <Pagination.Item
            onClick={ () => this.setState({ pageSelected: pageSelected + 1 }) }
            disabled={ maxPage === pageSelected }
          >
            <FontAwesomeIcon icon="angle-right" />
          </Pagination.Item>
        </Pagination>
      </>  
    );
  }
}