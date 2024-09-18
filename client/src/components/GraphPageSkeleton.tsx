import { cn } from "@/lib/utils";

const Skeleton = ({ isLightColor = false }) => {
  return (
    <div
      className={cn(
        "w-full h-12 animate-pulse",
        isLightColor ? "border-b" : "bg-muted"
      )}
    />
  );
};

const GraphPageSkeleton = () => {
  return (
    <div className="grid gap-0.5">
      <div className="grid grid-cols-5 gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>

      {Array.from({ length: 10 }).map((_, index) => (
        <div className="grid grid-cols-5 gap-0.5" key={index}>
          <Skeleton isLightColor />
          <Skeleton isLightColor />
          <Skeleton isLightColor />
          <Skeleton isLightColor />
          <Skeleton isLightColor />
        </div>
      ))}
    </div>
  );
};

export default GraphPageSkeleton;
