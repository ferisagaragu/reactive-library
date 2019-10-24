import * as React from 'react';
import HeaderTable from './model/header-table.reactive.model';
import Table from './table.reactive';
import PaginatorTableReactive from './paginator-table.reactive';
import { splitArrayReactive } from '../util/array.reactive';

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
  pageShow?: number;
  pageMessage?: string;
}

interface State {
  pageSelected: number;
}

export default class RenderTableReactive extends React.Component<Props, State> {

  pagerRef: any = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      pageSelected: 0
    }

    this.pagerRef = React.createRef();
  }

  private renderPagerElements(): Array<any> {
    const { tableData, showElements } = this.props;

    return splitArrayReactive(
      tableData, 
      showElements ? showElements : 5
    );
  }

  private renderElmentShowMessage(): Array<any> {
    const { tableData, showElements, pageMessage } = this.props;
    const split = showElements ? showElements : 5;
    let elmentNumber: Array<number> = [];
    const out: Array<string> = [];

    for (let index = 1; index <= tableData.length; index++) {
      elmentNumber.push(index);
    }

    elmentNumber = splitArrayReactive(elmentNumber, split);
    elmentNumber.forEach((element: any) => {
      const message = pageMessage ?
        pageMessage
          .replace('${init}', element[0])
          .replace('${end}', element[element.length - 1])
          .replace('${length}', `${tableData.length}`)
        : `Showing ${element[0]} to ${element[element.length - 1]} of ${tableData.length} entries`;
      out.push(message);
    });

    return out;
  }

  private onCreateEnd(element: any, finalData: Array<any>): void {
    const { onCreate, pageShow } = this.props;
    console.log(finalData.length / (pageShow ? pageShow : 5));
    this.pagerRef.current.state.showPages =
      this.convertToInteger(
        finalData.length / (pageShow ? pageShow : 5)
      );
    
    this.setState({ pageSelected: finalData.length - 1 });
    if (onCreate) {
      onCreate(element);
    }
  }

  private onDropEnd(element: any, finalData: Array<any>): void {
    const { onDrop } = this.props;
    const { pageSelected } = this.state;

    if (finalData.length === 1) {
      this.setState({ pageSelected: pageSelected - 1 })
    }

    if (onDrop) {
      onDrop(element);
    }
  }

  private convertToInteger(convert: number) {
    if (convert % 1 == 0) {
      return convert;
    } else {
      return Math.trunc(convert);
    }
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
      onEdit,
      dropAlertTitle,
      dropAlertText,
      pager,
      pageShow
    } = this.props;
    const { pageSelected } = this.state;
    const finalData = this.renderPagerElements();
    const showMessage = this.renderElmentShowMessage();

    return (
      <>
        <Table 
          animate={ animate }
          header={ header }
          tableData={ pager ? finalData[pageSelected] : tableData }
          isLoad={ isLoad }
          noTableData={ noTableData }
          search={ search }
          searchPlaceholder={ searchPlaceholder }
          noSearchResult={ noSearchResult }
          actionsLabel={ actionsLabel }
          create={ create }
          edit={ edit }
          drop={ drop }
          onCreate={ (element: any) => this.onCreateEnd(element, finalData) }
          onEdit={ onEdit }
          onDrop={ (element: any) => this.onDropEnd(element, finalData[pageSelected]) }
          dropAlertTitle={ dropAlertTitle }
          dropAlertText={ dropAlertText }
        />
        
        {
          (tableData && pager) &&
            tableData.length !== 0 &&
              <PaginatorTableReactive 
                ref={ this.pagerRef }
                value={ pageSelected }
                numberPages={ finalData.length }
                split={ pageShow ? pageShow : 5 }
                pageMessage={ showMessage[pageSelected] }
                onChange={ (select: number) => this.setState({ pageSelected: select }) }
              />
        }
      </>  
    );
  }
}