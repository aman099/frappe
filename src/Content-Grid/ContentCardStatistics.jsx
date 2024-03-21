function ContentCardStatistics({ cardItemsStatistics }) {
  return (
    <>
      {cardItemsStatistics.map((card, idx) => (
        <div
          key={idx}
          className="card-content flex flex-col border rounded-lg cursor-pointer p-4"
        >
          <div className="stats-title">{card.headingStats}</div>
          <div className="statistics">{card.stats}</div>
        </div>
      ))}
    </>
  );
}

export default ContentCardStatistics;
