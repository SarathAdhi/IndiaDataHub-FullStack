"use client";

import { Select } from "@/components/ui/select";
import { useRouter } from "next-nprogress-bar";

const CountrySelectButton = ({ country = "" }) => {
  const { replace } = useRouter();

  async function handleCountryChange(value: string) {
    replace(`/view-graph?country=${value}`);
  }

  return (
    <Select
      className="w-40"
      defaultValue={country}
      options={[
        { label: "USA", value: "USA" },
        { label: "IND", value: "IND" },
        { label: "UAE", value: "UAE" },
        { label: "AUS", value: "AUS" },
      ]}
      onValueChange={handleCountryChange}
    />
  );
};

export default CountrySelectButton;
