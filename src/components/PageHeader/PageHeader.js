//first page hidder
import React,{useContext} from "react";
import {Context} from '../../Context'

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {

const value = useContext(Context)

  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">GIU Careers</h1>
          <h3 className="d-none d-sm-block">
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
          </h3>
        </div>
      </Container>
    </div>
  );
}
