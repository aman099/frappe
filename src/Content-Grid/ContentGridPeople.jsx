import ContentCardPeople from "./ContentCardPeople";

import people_1 from "../assets/profile-pics/people-pro-pics/people-1.png";
import people_2 from "../assets/profile-pics/people-pro-pics/people-2.jpg";
import people_3 from "../assets/profile-pics/people-pro-pics/people-3.jpg";
import people_4 from "../assets/profile-pics/people-pro-pics/people-4.jpg";
import people_6 from "../assets/profile-pics/people-pro-pics/people-6.jpg";
import people_7 from "../assets/profile-pics/people-pro-pics/people-7.jpg";
import people_8 from "../assets/profile-pics/people-pro-pics/people-8.jpg";
import people_11 from "../assets/profile-pics/people-pro-pics/people-11.jpg";
import people_14 from "../assets/profile-pics/people-pro-pics/people-14.jpg";
import people_15 from "../assets/profile-pics/people-pro-pics/people-15.jpg";
import people_16 from "../assets/profile-pics/people-pro-pics/people-16.jpg";
import people_23 from "../assets/profile-pics/people-pro-pics/people-23.png";

const cardItemsPeople = [
  {
    id: 1,
    profileImg: people_1,
    name: "Osman Koçak",
  },
  {
    id: 2,
    profileImg: people_2,
    name: "Saurabh Vlog",
  },
  {
    id: 3,
    profileImg: people_3,
    name: "Jeet Patel",
  },
  {
    id: 4,
    profileImg: people_4,
    name: "Abdirahman Abdikadir Farah",
  },
  {
    id: 5,
    profileImg: null,
    name: "Sigma Chaudhary",
  },
  {
    id: 6,
    profileImg: people_6,
    name: "Mohammad Riyad",
  },
  {
    id: 7,
    profileImg: people_7,
    name: "Anhad Arora",
  },
  {
    id: 8,
    profileImg: people_8,
    name: "Hiren Khakhkhar",
  },
  {
    id: 9,
    profileImg: null,
    name: "Anshul Tungaria",
  },
  {
    id: 10,
    profileImg: null,
    name: "Faeq Subhi Ibrahim IBRAHIM",
  },
  {
    id: 11,
    profileImg: people_11,
    name: "Brian R. Amolo",
  },
  {
    id: 12,
    profileImg: null,
    name: "shabana khan",
  },
  {
    id: 13,
    profileImg: null,
    name: "Bronson John",
  },
  {
    id: 14,
    profileImg: people_14,
    name: "Saffat Gazi",
  },
  {
    id: 15,
    profileImg: people_15,
    name: "Colin Shah",
  },
  {
    id: 16,
    profileImg: people_16,
    name: "JOSHUA MICHAEL",
  },
  {
    id: 17,
    profileImg: null,
    name: "Phạm Công Thành",
  },
  {
    id: 18,
    profileImg: null,
    name: "Sivaram",
  },
  {
    id: 19,
    profileImg: null,
    name: "Sivaram",
  },
  {
    id: 20,
    profileImg: null,
    name: "psharma@dexciss.com",
  },
  {
    id: 21,
    profileImg: null,
    name: "Song Vo",
  },
  {
    id: 22,
    profileImg: null,
    name: "Guilherme Aramizo Rebeiro",
  },
  {
    id: 23,
    profileImg: people_23,
    name: "محمد زياد",
  },
  {
    id: 24,
    profileImg: null,
    name: "DGteam Ch",
  },
];

function ContentGridPeople() {
  return (
    <div
      className="content grid grid-cols-4 gap-8 mx-5 py-4
    mb-40"
    >
      <ContentCardPeople cardItemsPeople={cardItemsPeople} />
      <button className="show-more-btn btn py-2 px-3 text-sm font-semibold">
        Load More
      </button>
    </div>
  );
}

export default ContentGridPeople;
