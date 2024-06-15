import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfFile from "../../Assets/../Assets/BENJELLOUN-ABDELMAJID-CV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Smooth scroll to the top of the component on page change
    document.querySelector('.resume').scrollIntoView({ behavior: 'smooth' });
  }, [pageNumber]); // Trigger effect whenever pageNumber changes

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Start from the first page
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage(event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    changePage(-1);
  }

  function nextPage(event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    changePage(1);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={previousPage}
            disabled={pageNumber <= 1}
            style={{ marginRight: "10px", maxWidth: "120px" }}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            style={{ maxWidth: "120px" }}
          >
            Next
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
