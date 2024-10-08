import { useContext } from "react";
import { CLOUDNARY_IMAGE_ID } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resObj } = props;
  const{loggedInUser}=useContext(UserContext)
  

  return (
    <div className="RestaurentCard">
      <div className="img-container-res-card">
        <img
          className="img-container-res-card2"
          src={CLOUDNARY_IMAGE_ID + resObj?.info?.cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="res-name-container">
        <h4>{resObj.info?.name}</h4>

        {/* <h4>{resObj.cuisines.join(",")}</h4> */}
      </div>

      <div className="foods">
        <h4>{resObj.info?.locality} </h4>
      </div>
      <div className="Rating">{resObj.info?.avgRating} </div>
      <div className="timeofdelivery">
        <h4>{resObj.info?.costForTwo}</h4>
        <br />
        <h4>{resObj.info?.deliveryTime}minutes</h4>
        <h6>{loggedInUser}</h6>
      </div>
    </div>
  );
};

//higher order component
//input-Restaurentcard=>RestaurentcardPromoted

export const withPromotedLabel=(RestaurentCard)=>{
  return(props)=>{
    return(
      <div>
        {/* i have written Open in place of Promoted bcz promoted is removed from api by swiggy */}
        <label className="higherorderlabeloncard">Open</label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}
export default RestaurentCard;
