function Card({ cloth, discount, price,img }) {
  return (
    <div className="card">
      <img
        height="200px"
        src="https://tse4.mm.bing.net/th?id=OIP.z1U3djPWI_hQOJGBHaTY8AHaJX&pid=Api&P=0&h=220"
        alt=""
      />
      <div>
        <h2>{cloth}</h2>
        <h2>{discount}</h2>
        <h3>Shop Now</h3>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default Card;
