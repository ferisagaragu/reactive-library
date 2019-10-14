import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableReactive from './components/table/table.reactive';
declare type Props = {
    text: string;
};
export default class ExampleComponent extends React.Component<Props> {
    render(): JSX.Element;
}
export declare const Table: typeof TableReactive;
export {};
