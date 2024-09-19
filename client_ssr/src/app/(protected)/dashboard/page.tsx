import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { fetchFunc } from "@/lib/fetch";
import {
  BookmarkIcon,
  ChartLineIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  FilterIcon,
  PinIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import CatalogueDataTable from "./_components/CatalogueDataTable";

const DashboardPage = async () => {
  const [{ data: catalogues }, { data: categories }] = await Promise.all([
    fetchFunc.get<Catalogue[]>("/catalogues", {
      next: {
        tags: ["catalogues"],
      },
    }),
    fetchFunc.get<
      {
        Category: string;
        SubCategories: string[];
      }[]
    >("/catalogues/categories", {
      next: {
        tags: ["categories"],
      },
    }),
  ]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChevronLeftIcon />

          <h5>Economic Monitor</h5>
        </div>

        <div className="flex items-center divide-x">
          <div className="space-x-3 pr-3">
            <ButtonWithIcon Icon={SearchIcon} />

            <ButtonWithIcon Icon={BookmarkIcon} />

            <ButtonWithIcon Icon={FilterIcon} />
          </div>

          <div className="flex items-center space-x-3 pl-3">
            <Button variant="ghost" className="h-9">
              {"Selected (2)"}
            </Button>

            <ButtonWithIcon Icon={ShoppingCartIcon} />

            <ButtonWithIcon Icon={PinIcon} />

            <Button className="h-9" asChild>
              <Link href="/view-graph">
                <ChartLineIcon className="size-5" />
                View Graph
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-4">
        <div className="max-w-60 grid w-full h-full space-y-2">
          <div className="bg-primary/20 py-2 px-3 rounded-lg">
            <span className="text-xs">Category:</span>

            <div className="flex items-center justify-between">
              <h6>India & States</h6>

              <ChevronDownIcon className="size-5" />
            </div>
          </div>

          <div className="flex-1 h-[calc(100vh-216px)] bg-primary/10 p-3 rounded-lg space-y-2 overflow-auto">
            <div className="bg-background rounded-md p-3">
              <h6>Homepage</h6>
            </div>

            <Accordion type="multiple">
              {categories?.map(({ Category, SubCategories }) => (
                <AccordionItem
                  key={Category}
                  value={Category}
                  className="w-full"
                >
                  <AccordionTrigger className="w-full h-10 rounded-md !text-base hover:bg-muted justify-start">
                    <p className="font-medium">{Category}</p>
                  </AccordionTrigger>

                  <AccordionContent className="pl-4">
                    {SubCategories.map((subCategory) => (
                      <Button
                        key={subCategory}
                        className="w-full flex items-center justify-between"
                        variant="ghost"
                      >
                        {subCategory}
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <CatalogueDataTable catalogues={catalogues || []} />
      </div>
    </div>
  );
};

export default DashboardPage;
