import { PropsWithChildren } from "react";
import Header from "../Header";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
