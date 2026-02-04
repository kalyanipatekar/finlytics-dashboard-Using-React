const RightCard = ({ title, role, price, img, onView, onEdit, onDelete }) => {
  return (
    <div className="pro-card">

      <img src={img} className="pro-img" />

      <div className="pro-info">
        <h4>{title}</h4>
        <p>{role}</p>
      </div>

      <div className="pro-right">
        <span className="price">{price}</span>

        <div className="btn-group">
          <button onClick={onView}>View</button>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
