import { useEffect, useState } from "react";
import HTTP from "../config";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../Utils/Loader";
import { useNavigate } from "react-router-dom";
import { Tvcard } from "../components";

export default function Search() {
  const [filterResult, setFilterResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(location.search);
  const queryParams = query.get("q");
  const navigate = useNavigate();

  useEffect(() => {
    const getSearch = setTimeout(async () => {
      setLoading(true);
      try {
        const result = await HTTP.get(`/search/shows?q=${queryParams}`);
        setFilterResult(result.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(getSearch);
  }, [queryParams]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (queryParams) {
      params.append("q", queryParams);
    } else {
      params.delete("q");
    }
    navigate({ search: params.toString() });
  }, [queryParams, navigate]);

  return (
    <Container className="mt-5 py-4 px-3">
      {error && <p>{error.message}</p>}
      {loading ? (
        <Loader />
      ) : (
        <>
          {filterResult.length > 0 ? (
            <>
              <p>{`${filterResult.length} results found for ${queryParams}`}</p>
              <div>
                <Row className="gy-4">
                  {filterResult.map((result) => (
                    <Col key={result.id} xs={6} md={4} xl={3}>
                      <Tvcard {...result.show} />
                    </Col>
                  ))}
                </Row>
              </div>
            </>
          ) : (
            <p>{`no results found for ${queryParams}`}</p>
          )}
        </>
      )}
    </Container>
  );
}
