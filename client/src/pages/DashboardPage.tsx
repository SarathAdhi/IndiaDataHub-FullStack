import { Button } from "@/components/ui/button";
import PageLayout from "@/layouts/PageLayout";
import {
  BookmarkIcon,
  ChartLineIcon,
  ChevronLeftIcon,
  ChevronRight,
  FilterIcon,
  LucideIcon,
  PinIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";

const ButtonWithIcon = ({ Icon }: { Icon: LucideIcon }) => (
  <Button size="icon" variant="outline" className="size-9">
    <Icon className="size-5" />
  </Button>
);

const DashboardPage = () => {
  return (
    <PageLayout className="gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChevronLeftIcon />

          <h4>Economic Monitor</h4>
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

            <Button className="h-9">
              <ChartLineIcon className="size-5" />
              View Graph
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-6 gap-4">
        <div className="grid w-full h-full space-y-2">
          <div className="bg-primary/20 py-2 px-3 rounded-lg">
            <span className="text-xs">Category:</span>

            <h6>India & States</h6>
          </div>

          <div className="flex-1 h-[calc(100vh-216px)] bg-primary/10 p-3 rounded-lg space-y-4 overflow-auto">
            <div className="bg-background rounded-md p-3">
              <h6>Homepage</h6>
            </div>

            {Array.from({ length: 50 }).map(() => (
              <div className="flex items-center">
                <ChevronRight className="size-4" />

                <p className="font-medium">Banking</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3">Eight</div>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
