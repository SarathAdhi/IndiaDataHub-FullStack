import GraphPageSkeleton from "@/components/GraphPageSkeleton";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import PageLayout from "@/layouts/PageLayout";
import React from "react";
import {
  Await,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
const GraphDataTable = React.lazy(() => import("@/components/GraphDataTable"));

const GraphPage = () => {
  const { data } = useLoaderData() as {
    data: EximData;
  };

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const country = searchParams.get("country") || "USA";

  return (
    <PageLayout className="p-0 overflow-auto">
      <div className="p-4 flex items-center justify-between">
        <h4>Summary ({country} mn)</h4>

        <div className="flex items-center gap-2">
          <Select
            className="w-40"
            defaultValue={country}
            options={[
              { label: "USA", value: "USA" },
              { label: "IND", value: "IND" },
              { label: "UAE", value: "UAE" },
              { label: "AUS", value: "AUS" },
            ]}
            onValueChange={(value) => {
              // window.location.href = `/view-graph?country=${value}`;
              navigate(`/view-graph?country=${value}`, { replace: true });
            }}
          />

          <Button variant="outline">Export</Button>
        </div>
      </div>

      <div className="mx-4 h-[calc(100vh-150px)] overflow-auto">
        <React.Suspense fallback={<GraphPageSkeleton />}>
          <Await
            resolve={data}
            errorElement={
              <h5 className="text-red-500 text-center">
                Something went wrong!
              </h5>
            }
          >
            {(data) => <GraphDataTable data={data} />}
          </Await>
        </React.Suspense>
      </div>
    </PageLayout>
  );
};

export default GraphPage;
