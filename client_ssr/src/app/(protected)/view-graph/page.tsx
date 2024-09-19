import { Button } from "@/components/ui/button";
import { fetchFunc } from "@/lib/fetch";
import CountrySelectButton from "./_components/CountrySelectButton";
import GraphDataTable from "./_components/GraphDataTable";

type Props = {
  searchParams: {
    country: string;
  };
};

const GraphPage = async ({ searchParams }: Props) => {
  const country = searchParams.country || "USA";
  const { data } = (await fetchFunc.get(`/exim?country=${country}`, {
    next: {
      tags: [`exim_${country}`],
    },
  })) as {
    data: EximData & {
      fetchDetails: string;
    };
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4>Summary ({country} mn)</h4>

        <div className="flex items-center gap-2">
          <CountrySelectButton country={country} />

          <Button variant="outline">Export</Button>
        </div>
      </div>

      <p>BACKEND: {data?.fetchDetails}</p>

      {data.message ? (
        <h5 className="text-center">
          {data.message.map(({ message }) => message).join(", ")}
        </h5>
      ) : (
        <div className="h-[calc(100vh-190px)] rounded-md border overflow-auto">
          <GraphDataTable data={data as EximData} />
        </div>
      )}
    </div>
  );
};

export default GraphPage;
