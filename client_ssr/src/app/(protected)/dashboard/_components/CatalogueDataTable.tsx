"use client";

import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BookmarkIcon,
  CirclePlusIcon,
  MoreVerticalIcon,
  PinIcon,
} from "lucide-react";
import { useState } from "react";
import CatalogueDialog from "./CatalogueDialog";

const CatalogueDataTable = ({ catalogues }: { catalogues: Catalogue[] }) => {
  const [selectedCatalogue, setSelectedCatalogue] = useState<Catalogue>();

  return (
    <>
      <div className="w-full h-[calc(100vh-140px)] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>New Release ({catalogues.length})</TableHead>
              <TableHead>Range</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Coverage</TableHead>
              <TableHead>Actions</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {catalogues.map((catalogue) => (
              <TableRow key={catalogue._id}>
                <TableCell>
                  <h6 className="mb-2">{catalogue.Title}</h6>

                  <span className="bg-sky-100 rounded-sm py-1 px-2 !text-xs font-medium text-blue-800">
                    {catalogue.Category} / {catalogue.SubCategory}
                  </span>
                </TableCell>

                <TableCell className="grid w-52">
                  <span>{catalogue.Range}</span>
                  <span className="text-muted-foreground">
                    {catalogue.Frequency}
                  </span>
                </TableCell>

                <TableCell>{catalogue.Unit}</TableCell>

                <TableCell className="space-x-2">
                  <span className="bg-sky-100 rounded-sm py-1 px-2 !text-xs font-medium text-blue-800">
                    {catalogue.StateData}
                  </span>

                  <span className="bg-sky-100 rounded-sm py-1 px-2 !text-xs font-medium text-blue-800">
                    {catalogue.GlobalData}
                  </span>
                </TableCell>

                <TableCell>
                  <div className="flex items-center">
                    <ButtonWithIcon Icon={BookmarkIcon} variant="ghost" />

                    <ButtonWithIcon Icon={CirclePlusIcon} variant="ghost" />

                    <ButtonWithIcon Icon={PinIcon} variant="ghost" />
                  </div>
                </TableCell>

                <TableCell>
                  <ButtonWithIcon
                    Icon={MoreVerticalIcon}
                    variant="ghost"
                    onClick={() => setSelectedCatalogue(catalogue)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <CatalogueDialog {...{ selectedCatalogue, setSelectedCatalogue }} />
    </>
  );
};

export default CatalogueDataTable;
