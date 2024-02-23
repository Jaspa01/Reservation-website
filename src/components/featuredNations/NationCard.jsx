const NationCard = (props) => {
  const { imgUrl, title, description } = props.data;

  return (
    <div className="n-card">
      <img src={imgUrl} alt="" />
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className="card-btn">Explore</button>
    </div>
  );
};

export default NationCard;