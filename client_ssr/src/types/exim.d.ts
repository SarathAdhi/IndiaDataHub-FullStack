interface EximTableData {
  title: string[];
  id: string;
  Indicator: string;
  Identifier: string;
  hierarchy: string;
  parent: string;
  subItems?: EximTableData[];
  [key: string]: unknown;
}

interface EximData {
  country: string;
  exim_type: string;
  frequency: string;
  tabledata: EximTableData[];
  message?: {
    message: string;
  }[];
}
