import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type MyComponentProps = {
  //   children: React.ReactChild[] | React.ReactChild;
  children: ReactNode;
};
export default function Layout({ children }: MyComponentProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
