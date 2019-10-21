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
  pager?: boolean;
  pagerShowNumber?: number;
}

interface State {
  pageSelected: number;
}

export default class RenderTableReactive extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      pageSelected: 0
    }
  }

  private renderPagerElements() {
    const { tableData, pager, pagerShowNumber } = this.props;

    if (pager) {
      let countPages: number = 1;
      let pageNumber: number = tableData.length;
      let pages: Array<any> = [];
      const out: Array<any> = [];
      const pagerShowEnd = pagerShowNumber ? pagerShowNumber : 5;

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
          out.push(pages);
        }
      }

      console.log(out);
      return out;
    }

    return tableData;
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

    return (
      <>
        <Table 
          animate={ animate }
          header={ header }
          tableData={ this.renderPagerElements()[0] ? this.renderPagerElements()[pageSelected] : [] }
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
                defaultSelect={ 1 }
                showNumber={ pagerShowNumber ? pagerShowNumber : 5 }
                onSelectedPage={ (nodeSelected: number) => this.setState({ pageSelected: nodeSelected - 1 }) }
              />
        }
      </>  
    );
  }
}