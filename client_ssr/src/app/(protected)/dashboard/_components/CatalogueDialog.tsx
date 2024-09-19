"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const CatalogueDialog = ({
  selectedCatalogue,
  setSelectedCatalogue,
}: {
  selectedCatalogue: Catalogue | undefined;
  setSelectedCatalogue: (value: Catalogue | undefined) => void;
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Dialog
      open={!!selectedCatalogue}
      onOpenChange={(value) => {
        if (!value) setSelectedCatalogue(undefined);
      }}
    >
      <DialogContent className="w-full !max-w-4xl">
        <DialogHeader>
          <DialogTitle>Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-start gap-28">
            <div>
              <h6>Category</h6>
              <p>{selectedCatalogue?.Category}</p>
            </div>

            <div>
              <h6>Series</h6>
              <p>{selectedCatalogue?.Title}</p>
            </div>
          </div>

          <div>
            <h6>Path</h6>
            <p>
              {selectedCatalogue?.Category} {" > "}
              {selectedCatalogue?.SubCategory}
            </p>
          </div>

          <hr />

          <div className="grid grid-cols-4 gap-8">
            <div>
              <h6>Unit</h6>
              <p>{selectedCatalogue?.Unit}</p>
            </div>

            <div>
              <h6>Coverage</h6>
              <p>{selectedCatalogue?.Coverage || "-"}</p>
            </div>

            <div>
              <h6>Date Range</h6>
              <p>{selectedCatalogue?.Range}</p>
            </div>

            <div>
              <h6>Frequency</h6>
              <p>{selectedCatalogue?.Frequency}</p>
            </div>
          </div>

          <hr />

          <div className="grid gap-4">
            <p className="font-medium">
              Source:{" "}
              <a
                className="underline"
                href="https://www.india.gov.in/official-website-reserve-bank-india"
              >
                RBI
              </a>
            </p>

            <div>
              <h5>Footnotes</h5>

              <ul className="list-decimal list-inside">
                <li>
                  Citation: Identifying Number From The Page Content Reference.
                </li>
                <li>Footnote Text: Identification Or Source Of Information.</li>
                <li>
                  Back-To-Citation Link: Navigates Back To Original Page Text.
                </li>

                {readMore && (
                  <>
                    <li>
                      Citation: Identifying Number From The Page Content
                      Reference.
                    </li>
                    <li>
                      Footnote Text: Identification Or Source Of Information.
                    </li>
                    <li>
                      Back-To-Citation Link: Navigates Back To Original Page
                      Text.
                    </li>
                  </>
                )}
              </ul>

              <button
                className="underline font-bold text-sm"
                onClick={() => setReadMore(!readMore)}
              >
                Read {readMore ? "less" : "more"}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CatalogueDialog;
