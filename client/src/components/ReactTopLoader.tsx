import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";

const ReactTopLoader = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }, [navigation.state]);

  return <Outlet />;
};

export default ReactTopLoader;
