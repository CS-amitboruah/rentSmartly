import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { getLocalItem } from "./config";

type IProps = {
  secure: boolean;
  children: any;
};

const Authguard: FC<IProps> = ({ secure, children: Component }) => {
  const router = useRouter();

  useEffect(() => {
    const isTokenAvailable = getLocalItem("token");
    if (secure && !isTokenAvailable) {
      router.push("/login");
    } else if (!secure && isTokenAvailable) {
      router.push("/");
    }
  }, []);

  return <Component />;
};

export default Authguard;
