import * as React from 'react';
import HeaderTable from './model/header-table.reactive.model';
import Table from './table.reactive';
import PaginatorTableReactive from './paginator-table.reactive';

interface Props {
  //className?: string;
  //variant?: string;
  animate?: boolean;
  header: Array<HeaderTable>;
  tableData: Array<any>;
  isLoad?: boolean;
  noTableData?: string;
  
  search?: boolean;
  searchPlaceholder?: string;
  noSearchResult?: string;

  actionsLabel?: string;
  
  create?: boolean;
  edit?: boolean;
  drop?: boolean;
  
  onCreate?: Function;
  onEdit?: Function;
  onDrop?: Function;

  dropAlertTitle?: string;
  dropAlertText?: string;
  showElements?: number;
  pager?: boolean;
  pagerShowNumber?: number;
}

interface State {
  pageSelected: number;
}

export default class RenderTableReactive extends React.Component<Props, State> {
  
  pageNumberLength: number = 0;

  constructor(props: Props) {
    super(props);

    this.state = {
      pageSelected: 0
    }
  }

  private renderPagerElements() {
    const { tableData, pager, showElements } = this.props;

    if (pager) {
      let countPages: number = 1;
      let pageNumber: number = tableData.length;
      let pages: Array<any> = [];
      const out: Array<any> = [];
      const pagerShowEnd = showElements ? showElements : 5;

      for (let i: number = 0; i < pageNumber; i++) {
        pages.push(tableData[i]);
        
        if (countPages === pagerShowEnd) {
          out.push(pages);
          pages = [];
          countPages = 1;
        } else {
          countPages++;
        }

        if (pageNumber === (i + 1)) {
          if (pages.length !== 0) {
            out.push(pages);
          }
        }
      }

      console.log(out);
      this.pageNumberLength = out.length;
      return out;
    }

    return tableData;
  }

  private validDropPage(pageSelected: number): any {
    const elements = this.renderPagerElements()[pageSelected];

    console.log(`pageNumberLength ${this.pageNumberLength - 1}`);
    console.log(`pageSelect ${pageSelected}`);
    console.log(this.pageNumberLength > pageSelected);

    if (elements) {
      if (!(this.pageNumberLength > pageSelected)) {
        this.setState({ pageSelected: pageSelected - 1 });
      }
      return elements;
    }

    return [];
  }

  render() {
    const { 
      animate,
      header,
      tableData,
      isLoad,
      noTableData,
      search,
      searchPlaceholder,
      noSearchResult,
      actionsLabel,
      create,
      edit,
      drop,
      onCreate,
      onEdit,
      onDrop,
      dropAlertTitle,
      dropAlertText,
      pager,
      pagerShowNumber
    } = this.props;
    const { pageSelected } = this.state;

    console.log(this.validDropPage(pageSelected));

    return (
      <>
        <Table 
          animate={ animate }
          header={ header }
          tableData={ this.validDropPage(pageSelected) ? this.validDropPage(pageSelected) : [] }
          isLoad={ isLoad }
          noTableData={ noTableData }
          search={ search }
          searchPlaceholder={ searchPlaceholder }
          noSearchResult={ noSearchResult }
          actionsLabel={ actionsLabel }
          create={ create }
          edit={ edit }
          drop={ drop }
          onCreate={ onCreate }
          onEdit={ onEdit }
          onDrop={ onDrop }
          dropAlertTitle={ dropAlertTitle }
          dropAlertText={ dropAlertText }
        />
        
        {
          (tableData && pager) &&
            tableData.length !== 0 &&
              <PaginatorTableReactive 
                elementsLength={ tableData.length }
                pageNumber={ this.pageNumberLength }
                defaultSelect={ pageSelected + 1 }
                maxPagesRender={ pagerShowNumber ? pagerShowNumber : 5 }
                onSelectedPage={ (nodeSelected: number) => this.setState({ pageSelected: nodeSelected - 1 }) }
              />
        }
      </>  
    );
  }
}