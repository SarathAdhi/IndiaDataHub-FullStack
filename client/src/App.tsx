import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { getBrowserRouter } from "./routers.tsx";
import { useAppStore } from "./store/index.ts";

const router = getBrowserRouter;

const App = () => {
  const { getUser } = useAppStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser().finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <div className="h-screen grid place-content-center">
        <Loader2 className="animate-spin size-10" />
      </div>
    );

  return <RouterProvider router={router} />;
};

export default App;
