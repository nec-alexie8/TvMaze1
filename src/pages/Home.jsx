import { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tvcard } from "../components";
import Loader from "../Utils/Loader";
import useFetchData from "../hooks/fetchData";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const { data, error, loading } = useFetchData("/shows");

  const filterRating = data.filter((show) => show.rating.average >= 8.9);

  if (error) return <p className="mt-5 py-5">{error.message}</p>;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="d-lg-flex">
            <Container fluid className="py-4">
              {filterRating.slice(0, 3).map((item, i) => (
                <div key={item.id}>
                  <div
                    className={
                      i === current ? "bgcolor text-white p-1" : "colorText"
                    }
                  >
                    <h1
                      className="text-uppercase"
                      onClick={() => setCurrent(i)}
                    >
                      {item.name}
                    </h1>
                  </div>
                  <hr />
                </div>
              ))}
            </Container>

            <Container fluid className="homBoxA bgColorB text-white py-4">
              {filterRating.map((item, i) => (
                <div key={item.id}>
                  {i === current && (
                    <>
                      <h1 className="fs-5 fw-bold">{item.name}</h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.summary.slice(0, 200) + "...",
                        }}
                      />
                      <Link to={`/tvshow/${item.id}`}>See More</Link>
                    </>
                  )}
                </div>
              ))}
            </Container>

            <div className="homeBoxB">
              {filterRating.map((item, i) => (
                <div key={item.id}>
                  {i === current && (
                    <div className="imgBox">
                      <Image
                        src={item.image.original}
                        className="w-100 h-100"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Container className="mt-5">
            <Row className="gy-5">
              {data.slice(0, 30).map((item) => (
                <Col xs={6} md={4} lg={3} key={item.id}>
                  <Tvcard {...item} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}
