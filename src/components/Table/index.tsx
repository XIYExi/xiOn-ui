import React from "react";
import Table, {BaseTableProps} from "./Table";
import  {BaseTableHeaderProps} from "./TableHeader";
import TableHeaderItem, {BaseTableHeaderItemProps} from "./TableHeaderItem";
import TableRow, {BaseTableRowProps} from "./TableRow";
import TableItem, {BaseTableItemProps, TableItemProps} from "./TableItem";
import TableFooter, {BaseTableFooterProps} from "./TableFooter";
import TableHeader from "./TableHeader";
import TableBody, {BaseTableBodyProps} from "./TableBody";


export type ITableComponent = React.FC<BaseTableProps> & {
    Header: React.FC<BaseTableHeaderProps>;
    HeaderItem: React.FC<BaseTableHeaderItemProps>;
    Row: React.FC<BaseTableRowProps>;
    Item: React.FC<BaseTableItemProps>;
    Footer: React.FC<BaseTableFooterProps>;
    Body: React.FC<BaseTableBodyProps>;
}

const ITable = Table as ITableComponent;
ITable.Header = TableHeader;
ITable.HeaderItem = TableHeaderItem;
ITable.Row = TableRow;
ITable.Item = TableItem;
ITable.Footer = TableFooter;
ITable.Body = TableBody;

export default ITable;