import ContentCardStatistics from "./ContentCardStatistics";

const cardItemsStatistics = [
  {
    id: 1,
    headingStats: "Published Courses",
    stats: 18,
  },
  {
    id: 2,
    headingStats: "Total Signups",
    stats: 26_748,
  },
  {
    id: 3,
    headingStats: "Enrollment Count",
    stats: 51_928,
  },
  {
    id: 4,
    headingStats: "Courses Completed",
    stats: 9_282,
  },
  {
    id: 5,
    headingStats: "Lessons Completed",
    stats: 1_78_784,
  },
];

function ContentGridStatistics() {
  return (
    <div
      className="content grid grid-cols-5 gap-8 mx-5 py-4
mb-10"
    >
      <ContentCardStatistics cardItemsStatistics={cardItemsStatistics} />
    </div>
  );
}

export default ContentGridStatistics;
