import "./ContentCard.css";

function ContentCard({ cardItems, option }) {
  return (
    <>
      {option === "Most Popular" &&
        cardItems
          .sort((a, b) => b.info_2 - a.info_2)
          .map((card, idx) => (
            <div
              key={idx}
              className="card-content flex flex-col border rounded-lg cursor-pointer"
            >
              <div className="img-container h-44 bg-cover bg-center bg-no-repeat overflow-clip">
                <img style={{ width: "100%" }} src={card.img} alt="" />
                {card.labeltag_1 != null && (
                  <span className="image-label">{card.labeltag_1}</span>
                )}
                {card.labeltag_2 != null && (
                  <span
                    className={`image-label ${
                      card.labeltag_2 === "PRODUCTION PLANNING" ? "ml-10" : ""
                    }`}
                  >
                    {card.labeltag_2}
                  </span>
                )}
                {card.labeltag_3 != null && (
                  <span
                    className={`image-label ${
                      card.labeltag_3 === "ERPNEXT" ||
                      card.labeltag_3 === "FREE"
                        ? "ml-7"
                        : ""
                    }`}
                  >
                    {card.labeltag_3}
                  </span>
                )}
              </div>

              <div className="course-info-container padding-container p-6">
                <div className="info-container flex justify-between items-center mb-2">
                  <span>
                    <i className="fa-solid fa-book-open"></i> {card.info_1}
                  </span>
                  <span>
                    <i className="fa-solid fa-users"></i> {card.info_2}
                  </span>
                  <span>
                    <i className="fa-regular fa-star"></i> {card.info_3}
                  </span>
                </div>
                <div className="details-containe mb-5">
                  <h5 className="text-lg font-semibold">
                    {card.detail_para_1}
                  </h5>
                  <p className="ds text-sm">
                    {card.detail_para_2.split(" ").length > 8
                      ? card.detail_para_2.split(" ").slice(0, 9).join(" ") +
                        "..."
                      : card.detail_para_2}
                  </p>
                </div>
                <div
                  className={`profile-container flex justify-between ${
                    idx === 1 || idx === 7 || idx === 9 || idx === 12
                      ? "mt-10"
                      : ""
                  }`}
                >
                  <div className="pro-pic">
                    <div
                      className={`profile-information flex items-center gap-2 `}
                    >
                      <img
                        style={{
                          height: "28px",
                          width: "28px",
                          borderRadius: "50%",
                        }}
                        src={card.profileImg1}
                        alt=""
                      />
                      {card.profileImg2 != null && (
                        <img
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                            marginLeft: "-17px",
                          }}
                          src={card.profileImg2}
                          alt=""
                        />
                      )}
                      <span className="text-sm">{card.profileName}</span>
                    </div>
                  </div>
                  <div className="pricing">Free</div>
                </div>
              </div>
            </div>
          ))}
      {option === "Highest Rated" &&
        cardItems
          .sort((a, b) => b.info_3 - a.info_3)
          .map((card, idx) => (
            <div
              key={idx}
              className="card-content flex flex-col border rounded-lg cursor-pointer"
            >
              <div className="img-container h-44 bg-cover bg-center bg-no-repeat overflow-clip">
                <img style={{ width: "100%" }} src={card.img} alt="" />
                {card.labeltag_1 != null && (
                  <span className="image-label">{card.labeltag_1}</span>
                )}
                {card.labeltag_2 != null && (
                  <span
                    className={`image-label ${
                      card.labeltag_2 === "PRODUCTION PLANNING" ? "ml-10" : ""
                    }`}
                  >
                    {card.labeltag_2}
                  </span>
                )}
                {card.labeltag_3 != null && (
                  <span
                    className={`image-label ${
                      card.labeltag_3 === "ERPNEXT" ||
                      card.labeltag_3 === "FREE"
                        ? "ml-7"
                        : ""
                    }`}
                  >
                    {card.labeltag_3}
                  </span>
                )}
              </div>

              <div className="course-info-container padding-container p-6">
                <div className="info-container flex justify-between items-center mb-2">
                  <span>
                    <i className="fa-solid fa-book-open"></i> {card.info_1}
                  </span>
                  <span>
                    <i className="fa-solid fa-users"></i> {card.info_2}
                  </span>
                  <span>
                    <i className="fa-regular fa-star"></i> {card.info_3}
                  </span>
                </div>
                <div className="details-containe mb-5">
                  <h5 className="text-lg font-semibold">
                    {card.detail_para_1}
                  </h5>
                  <p className="ds text-sm">
                    {card.detail_para_2.split(" ").length > 8
                      ? card.detail_para_2.split(" ").slice(0, 9).join(" ") +
                        "..."
                      : card.detail_para_2}
                  </p>
                </div>
                <div
                  className={`profile-container flex justify-between ${
                    idx === 4 || idx === 8 || idx === 13 || idx === 15
                      ? "mt-10"
                      : ""
                  }`}
                >
                  <div className="pro-pic">
                    <div
                      className={`profile-information flex items-center gap-2 `}
                    >
                      <img
                        style={{
                          height: "28px",
                          width: "28px",
                          borderRadius: "50%",
                        }}
                        src={card.profileImg1}
                        alt=""
                      />
                      {card.profileImg2 != null && (
                        <img
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                            marginLeft: "-17px",
                          }}
                          src={card.profileImg2}
                          alt=""
                        />
                      )}
                      <span className="text-sm">{card.profileName}</span>
                    </div>
                  </div>
                  <div className="pricing">Free</div>
                </div>
              </div>
            </div>
          ))}

      {option === "Newest" &&
        cardItems
          .sort((a, b) => a.info_2 - b.info_2)
          .map((card, idx) => (
            <div
              key={idx}
              className="card-content flex flex-col border rounded-lg cursor-pointer"
            >
              <div className="img-container h-44 bg-cover bg-center bg-no-repeat overflow-clip">
                <img style={{ width: "100%" }} src={card.img} alt="" />
                {card.labeltag_1 != null && (
                  <span className="image-label">{card.labeltag_1}</span>
                )}
                {card.labeltag_2 != null && (
                  <span
                    className={`image-label ${
                      card.labeltag_2 === "PRODUCTION PLANNING" ? "ml-10" : ""
                    }`}
                  >
                    {card.labeltag_2}
                  </span>
                )}
                {card.labeltag_3 != null && (
                  <span
                    className={`image-label ${
                      card.labeltag_3 === "ERPNEXT" ||
                      card.labeltag_3 === "FREE"
                        ? "ml-7"
                        : ""
                    }`}
                  >
                    {card.labeltag_3}
                  </span>
                )}
              </div>

              <div className="course-info-container padding-container p-6">
                <div className="info-container flex justify-between items-center mb-2">
                  <span>
                    <i className="fa-solid fa-book-open"></i> {card.info_1}
                  </span>
                  <span>
                    <i className="fa-solid fa-users"></i> {card.info_2}
                  </span>
                  <span>
                    <i className="fa-regular fa-star"></i> {card.info_3}
                  </span>
                </div>
                <div className="details-containe mb-5">
                  <h5 className="text-lg font-semibold">
                    {card.detail_para_1}
                  </h5>
                  <p className="ds text-sm">
                    {card.detail_para_2.split(" ").length > 8
                      ? card.detail_para_2.split(" ").slice(0, 9).join(" ") +
                        "..."
                      : card.detail_para_2}
                  </p>
                </div>
                <div
                  className={`profile-container flex justify-between ${
                    idx === 3 ||
                    idx === 5 ||
                    idx === 10 ||
                    idx === 12 ||
                    idx === 14 ||
                    idx === 16 ||
                    idx === 17
                      ? "mt-7"
                      : ""
                  }`}
                >
                  <div className="pro-pic">
                    <div
                      className={`profile-information flex items-center gap-2 `}
                    >
                      <img
                        style={{
                          height: "28px",
                          width: "28px",
                          borderRadius: "50%",
                        }}
                        src={card.profileImg1}
                        alt=""
                      />
                      {card.profileImg2 != null && (
                        <img
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                            marginLeft: "-17px",
                          }}
                          src={card.profileImg2}
                          alt=""
                        />
                      )}
                      <span className="text-sm">{card.profileName}</span>
                    </div>
                  </div>
                  <div className="pricing">Free</div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}

export default ContentCard;
