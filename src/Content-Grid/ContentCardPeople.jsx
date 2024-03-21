function ContentCardPeople({ cardItemsPeople }) {
  return (
    <>
      {cardItemsPeople.map((card, idx) => (
        <div
          key={idx}
          className="card-content flex items-center gap-4 border rounded-lg cursor-pointer py-3 px-5"
        >
          <div className="people-img-container">
            {card.profileImg != null ? (
              <img
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={card.profileImg}
                alt={`${card.name} Profile Pic`}
              />
            ) : (
              <div className="profile-img-alphabet">
                <span>{card.name.charAt(0).toUpperCase()}</span>
              </div>
            )}
          </div>
          <div className="people-name">
            <span>{card.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContentCardPeople;
