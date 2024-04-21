import "./Review.css";

function Ans(props) {
  const{review , imgSrc , reviewerName ,reviewerDesignation} = props;
  return (
    <div>
      <div className="review">
        <p>{review}</p>
      </div>
      <div className="reviewer-details">
        <img src={imgSrc} alt="image of the reviewer"></img>
        <div>
          <p className="reviewer-name">{reviewerName}</p>
          <p>{reviewerDesignation}</p>
        </div>
      </div>
    </div>
  );
}
export default Ans;
