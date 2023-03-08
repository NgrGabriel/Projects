import { Navigation } from "../components/Navigation";

export function Layout(props) {
  return (
    <>
      <Navigation></Navigation>
      <main>{props.children}</main>
    </>
  );
}