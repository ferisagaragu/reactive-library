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

  private renderPagerElements(): Array<any> {
    const { tableData, showElements } = this.props;

    return splitArrayReactive(
      tableData, 
      showElements ? showElements : 5
    );
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
      pageShow
    } = this.props;
    const { pageSelected } = this.state;
    const finalData = this.renderPagerElements();

    return (
      <>
        <Table 
          animate={ animate }
          header={ header }
          tableData={ pager ? finalData[pageSelected]: tableData }
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
                value={ pageSelected }
                numberPages={ finalData.length }
                split={ pageShow ? pageShow : 5 }
                onChange={ (select: number) => this.setState({ pageSelected: select }) }
              />
        }
      </>  
    );
  }
}