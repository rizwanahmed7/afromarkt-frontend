import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product from "../assets/product.png";
import N from "../assets/Naira.png";
import NairaGrey from "../assets/NairaGrey.png";
import { COLORS } from "../consatants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slices/Cart";
import { useState } from "react";
import { toast } from "react-toastify";
function CardC({ title, ship, image }) {
  const [count, setCount] = useState(1);
  const QtyFunAdd = () => {
    setCount(count + 1);
  };
  const QtyFundecrease = () => {
    setCount(count - 1);
  };
  const { Items } = useSelector((state) => state.Cart);
  const [added, setAdded] = useState(false);
  const Dispatch = useDispatch();
  const AddToCart = () => {
    Dispatch(addToCart());
    toast("Item Added To Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setAdded(true);
  };
  return (
    <Card style={{ border: "unset", marginBlock: 10 }}>
      <div
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "100px",
          backgroundColor: COLORS.grey,
          color: COLORS.red,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          padding: "10px",
          fontWeight: "bold",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
      >
        -10%
      </div>
      <Card.Img
        style={{ height: "165px", width: "165px", maxWidth: "100%" }}
        variant="top"
        src={image}
        className="m-auto mt-3 mb-3"
      />
      <Card.Body>
        <Card.Text style={{ fontSize: "12px" }} className="mb-2">
          {title ? title : "Mini Crossbody Tote Bag"}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Text
              className="mb-0"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              <img src={N} />
              22,500
            </Card.Text>
            <del style={{ color: "grey" }}>
              <Card.Text
                style={{
                  fontSize: "12px",
                  color: COLORS.darkgrey,
                  lineHeight: 1,
                }}
              >
                <img src={NairaGrey} />
                24,750
              </Card.Text>
            </del>
          </div>
          <div>
            {added ? (
              <div className=" f d-flex  justify-content-center align-items-center">
                <button
                  className="btn btn-primary"
                  style={{
                    padding: "2px 10px",
                    borderRadius: 0,
                    background: "rgb(29, 113, 184)",
                  }}
                  onClick={count > 1 ? QtyFundecrease : null}
                >
                  -
                </button>
                <input
                  value={count}
                  style={{
                    width: 40,
                    border: "unset",
                    textAlign: "center",
                  }}
                />
                <button
                  className="btn btn-primary"
                  style={{
                    padding: "2px 10px",
                    borderRadius: 0,
                    background: "rgb(29, 113, 184)",
                  }}
                  onClick={QtyFunAdd}
                >
                  +
                </button>
              </div>
            ) : (
              <Button
                size="sm"
                style={{
                  border: "unset",
                  fontSize: "14px",
                  backgroundColor: COLORS.yellow,
                  color: "black",
                }}
                onClick={AddToCart}
              >
                Add To Cart{" "}
              </Button>
            )}
          </div>
        </div>
        <p
          style={{ fontSize: 10 }}
          className="text-success mt-2 mb-0 text-small"
        >
          {ship && ship}
        </p>
      </Card.Body>
    </Card>
  );
}

export default CardC;
