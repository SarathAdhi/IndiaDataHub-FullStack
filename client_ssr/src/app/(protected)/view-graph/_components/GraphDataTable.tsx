"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface TableRowProps {
  item: EximTableData;
  isParent: boolean;
}

const TableRowRenderer: React.FC<TableRowProps> = ({ item, isParent }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(!expanded);

  return (
    <>
      <TableRow className="[&>td]:even:bg-muted">
        <TableCell className="bg-background sticky left-0">
          {item.subItems && (
            <button onClick={handleExpand}>
              <ChevronRight
                className={cn("transition-all", expanded ? "rotate-90" : "")}
              />
            </button>
          )}
        </TableCell>

        <TableCell
          onClick={handleExpand}
          className="p-0 select-none cursor-pointer bg-background sticky left-10"
        >
          <div className={cn("p-4 border-r", !isParent && "pl-10")}>
            <span className="whitespace-nowrap">
              {isParent ? item.title[0] : item.Indicator}{" "}
              {item.subItems && `(${item.subItems?.length})`}
            </span>
          </div>
        </TableCell>

        {months.map((month) => (
          <TableCell key={month}>{item[month]?.toFixed(1)}</TableCell>
        ))}
      </TableRow>

      {expanded &&
        item.subItems?.map((subItem) => (
          <TableRowRenderer key={subItem.id} item={subItem} isParent={false} />
        ))}
    </>
  );
};

const GraphDataTable: React.FC<{ data: EximData }> = ({ data }) => {
  if (!data) return <h5 className="text-center">No data</h5>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="bg-muted sticky left-0"></TableHead>

          <TableHead className="p-0 bg-muted sticky left-10">
            <div className="p-4 border-r">Region</div>
          </TableHead>

          {months.map((month) => (
            <TableHead key={month} className="whitespace-nowrap">
              {month}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.tabledata.map((item) => (
          <TableRowRenderer key={item.id} item={item} isParent={true} />
        ))}
      </TableBody>
    </Table>
  );
};

export default GraphDataTable;

const months = [
  "May-22",
  "Jun-22",
  "Jul-22",
  "Aug-22",
  "Sep-22",
  "Oct-22",
  "Nov-22",
  "Dec-22",
  "Jan-23",
  "Feb-23",
  "Mar-23",
  "Apr-23",
  "May-23",
  "Jun-23",
  "Jul-23",
  "Aug-23",
  "Sep-23",
  "Oct-23",
  "Nov-23",
  "Dec-23",
  "Jan-24",
  "Feb-24",
  "Mar-24",
  "Apr-24",
  "May-24",
  "Jun-24",
];
