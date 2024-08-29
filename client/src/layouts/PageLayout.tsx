import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />

      <div className={cn("flex flex-col flex-1 p-4", className)}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
