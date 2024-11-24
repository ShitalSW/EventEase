import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Card({
  id,
  image1,
  eventname,
  location,
  price,
  
}) {
  const Navigate = useNavigate();
  return (
    <div
      className="card"
      style={{ width: "22rem", borderRadius: "20px", margin: "20px" }}
    >
      <img
        className="card-img-top"
        src={image1}
        alt="Card image cap"
        style={{ height: "20rem", borderRadius: "20px", padding: "6px" }}
      />
      <div className="card-body">
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ border: "none" }}>
                <span className="card-title">{eventname}</span>
              </td>
              
            </tr>
            <tr>
              <td style={{ border: "none" }}>
                <span className="card-title">
                  <i className="bi bi-geo-alt"></i>
                  {location}
                </span>
              </td>
              <td style={{ border: "none", textAlign: "right" }}>
                <span className="card-title">
                  <i className="bi bi-currency-rupee"></i>₹{price}/-
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ border: "none" }}>
                <span className="card-title">
                  <i
                    className="bi bi-suit-heart-fill"
                    style={{ cursor: "pointer" }}
                    // onClick={() =>
                    //   onAddToWishlist({ servicename, rating, location, price })
                    // }
                  ></i>
                </span>
              </td>
              <td style={{ border: "none", textAlign: "right" }}>
                <button className="btn btn-primary"><Link to={`/events/${id}`}>View</Link></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
