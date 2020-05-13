import Nav from "./nav";
//kimport "../style/Style.css";
//import "../style/sass/home.scss";
import Head from "next/head";
import Container from "react-bootstrap/Container";

const Layout = (props) => {
  return (
    <Container fluid>
      <Head>
        <title>AGIT Frontend Test</title>
      </Head>
      <Nav />
      {props.children}
    </Container>
  );
};
export default Layout;
