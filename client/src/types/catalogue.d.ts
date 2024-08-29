interface Catalogue {
  _id: string;
  Id: string;
  Title: string;
  Source: string;
  Frequency: string;
  Unit: string;
  Tags: string;
  Tag2: string | null;
  Tag3: string | null;
  Parent: string | null;
  Sibling: string | null;
  Child: string | null;
  TagIdx1: string | null;
  TagIdx2: string | null;
  TagIdx3: string | null;
  OldSeries: string | null;
  StateData: string;
  GlobalData: string;
  Key_Series: string | null;
  Category: string | null;
  SubCategory: string | null;
  Description: string;
  Formula: string | null;
  Numerator: string | null;
  Denominator: string | null;
  Range: string;
  Coverage: string | null;
}
