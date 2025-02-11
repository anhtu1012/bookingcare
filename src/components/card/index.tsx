import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { Card, Col, Row, Skeleton } from "antd";

function CardMain({ doctor, product }) {
  console.log(doctor);

  const isDoctor = Boolean(doctor);
  const item = isDoctor ? doctor : product;
  const imageUrl = isDoctor ? item.image : item.productImages[0]?.imageUrl;
  const id = isDoctor ? item.id : item.productID;
  const lastName = isDoctor ? item.lastName : item.productName;
  const firstName = isDoctor ? item.firstName : item.productName;
  const position = isDoctor ? item.positionData.value_vi : item.productName;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product || doctor) {
      setLoading(false);
    }
  }, [product, doctor]);

  const handleClick = async () => {
    if (isDoctor) {
      navigate(`/doctor-detail/${id}`);
    } else {
      navigate(`/product-details/${id}`);
    }
  };

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <Card
      onClick={handleClick}
      hoverable
      style={{
        width: 250,
      }}
      className="cart-product"
      cover={
        <div className="image-container">
          <img alt="example" src={imageUrl} className="product-image" />
        </div>
      }
    >
      <Row style={{ height: "100px" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2 className="title_card">
            {position} Bác Sĩ {firstName} {lastName}
          </h2>
        </Col>
        <Col
          span={24}
          style={{
            textAlign: "center",
            height: "60px",
            textTransform: "uppercase",
          }}
        >
          <h3 style={{ color: "gray", fontSize: "15px" }}>{lastName}</h3>
        </Col>
      </Row>
    </Card>
  );
}

export default CardMain;
