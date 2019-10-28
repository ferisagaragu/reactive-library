import * as React from 'react';
import HeaderTable from './model/header-table.reactive.model';
import Table from './table.reactive';
import PaginatorTableReactive from './paginator-table.reactive';
import { splitArrayReactive } from '../util/array.reactive';
import InputSearchTable from './input-search-table.reactive';
import { foreachJSONReactive, removeInJSONArrayReactive } from '../util/json.reactive';

interface Props {
  className?: string;
  variant?: 'dark';
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
  disabledPage: boolean;
  searchData: Array<any>;
  isSearch: boolean;
}

export default class RenderTableReactive extends React.Component<Props, State> {

  pagerRef: any = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      pageSelected: 0,
      disabledPage: false,
      searchData: [],
      isSearch: false
    }

    this.pagerRef = React.createRef();
  }

  private renderPagerElements(): Array<any> {
    const { tableData, showElements } = this.props;
    const { searchData, isSearch } = this.state;

    return splitArrayReactive(
      isSearch ? searchData : tableData, 
      showElements ? showElements : 5
    );
  }

  private renderElmentShowMessage(): Array<any> {
    const { tableData, showElements, pageMessage } = this.props;
    const { searchData, isSearch }: any = this.state;
    const split = showElements ? showElements : 5;
    let elmentNumber: Array<number> = [];
    const out: Array<string> = [];
    let baseData: Array<any> = isSearch ? searchData : tableData;

    for (let index = 1; index <= baseData.length; index++) {
      elmentNumber.push(index);
    }

    elmentNumber = splitArrayReactive(elmentNumber, split);
    elmentNumber.forEach((element: any) => {
      const message = pageMessage ?
        pageMessage
          .replace('$(init)', element[0])
          .replace('$(end)', element[element.length - 1])
          .replace('$(length)', `${baseData.length}`)
        : `Showing ${element[0]} to ${element[element.length - 1]} of ${baseData.length} entries`;
      out.push(message);
    });

    return out;
  }

  private onCreate(fromData: any, finalData: Array<any>) {
    const { onCreate } = this.props;
    const { pageSelected } = this.state;

    if (onCreate) {
      if (finalData[pageSelected].length === 0) {
        this.setState({ pageSelected: finalData.length , disabledPage: false });
      } else {
        this.setState({ disabledPage: false });
      }
      onCreate(fromData);
    }
  }

  private onCreateEnd(finalData: Array<any>): void {
    const { pageShow, pager } = this.props;
    
    if (pager) {
      this.pagerRef.current.state.showPages =
        this.convertToInteger(
          finalData.length / (pageShow ? pageShow : 5)
        );
      
      this.setState({ pageSelected: finalData.length - 1, disabledPage: true });
    }
  }

  private onEdit(element: any) {
    const { onEdit } = this.props;
    this.setState({ disabledPage: false });
    if (onEdit) {
      onEdit(element);
    }
  }

  private onDropEnd(element: any, finalData: Array<any>): void {
    const { onDrop, pager } = this.props;
    const { pageSelected, isSearch, searchData } = this.state;

    if (isSearch) {
      removeInJSONArrayReactive(searchData, 'uid', element.uid);
    }

    if (pager) {
      if (finalData.length === 1) {
        this.setState({ pageSelected: pageSelected - 1 })
      }
    } 

    if (onDrop) {
      onDrop(element);
    }
  }

  private onSearch(value: string): void {
    const { tableData } = this.props;

    const filterData = tableData.filter(element => {
      let tableText = '';

      foreachJSONReactive(element, (value: string, key: string) => {
        if (key !== 'uid') {
          tableText += value;
        }
      });

      if (tableText.toLowerCase().includes(value.toLowerCase())) {
        return element;
      }
    });

    this.setState({ 
      searchData: 
        filterData ? 
        filterData : [], 
      isSearch: value !== '',
      pageSelected: 0 
    });
  }

  private convertToInteger(convert: number) {
    if (convert % 1 == 0) {
      return convert - 1;
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
      dropAlertTitle,
      dropAlertText,
      pager,
      pageShow,
      showElements,
      variant,
      className
    } = this.props;
    const { pageSelected, disabledPage, searchData, isSearch } = this.state;

    const finalData = this.renderPagerElements();
    const showMessage = this.renderElmentShowMessage();

    return (
      <div>
        <Table 
          className={ className }
          variant={ variant }
          animate={ animate }
          header={ header }
          tableData={ pager ? finalData[pageSelected] : isSearch ? searchData : tableData }
          isLoad={ isLoad }
          noTableData={ noTableData }
          search={ search }
          noSearchResult={ noSearchResult }
          actionsLabel={ actionsLabel }
          create={ create }
          edit={ edit }
          drop={ drop }
          showElements={ showElements ? showElements : 5 }
          initCreate={ () => this.onCreateEnd(finalData) }
          onCreate={ (element: any) => this.onCreate(element, finalData) }
          onCreateCancel={ () => this.setState({ pageSelected: finalData.length - 1, disabledPage: false }) }
          initEdit={ () =>  this.setState({ disabledPage: true }) }
          onEditCancel={ () =>  this.setState({ disabledPage: false }) }
          onEdit={ (element: any) => this.onEdit(element) }
          onDrop={ (element: any) => this.onDropEnd(element, finalData[pageSelected]) }
          dropAlertTitle={ dropAlertTitle }
          dropAlertText={ dropAlertText }
          searchHTML={
            <InputSearchTable 
              placeholder={ searchPlaceholder ? searchPlaceholder : '' }
              onSearch={ (value: string) => this.onSearch(value) }
              disabled={ disabledPage || (isLoad ? isLoad : false) }
            />
          }
          isSearch={ isSearch }
        />
        
        {
          (tableData && pager) &&
            tableData.length !== 0 && !(isSearch ? searchData.length === 0 : false) &&
              <PaginatorTableReactive 
                ref={ this.pagerRef }
                value={ pageSelected }
                numberPages={ finalData.length }
                split={ pageShow ? pageShow : 5 }
                pageMessage={ showMessage[pageSelected] }
                onChange={ (select: number) => this.setState({ pageSelected: select }) }
                disabled={ disabledPage }
              />
        }
      </div>  
    );
  }
}