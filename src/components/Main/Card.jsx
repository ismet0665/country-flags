const Card = (data) => {
  // console.log("ne geliyo", data);
  const { title, desc, image, date } = data;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="date">
        <p>{date}</p>
      </div>

      <img src={image} alt="" />

      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
