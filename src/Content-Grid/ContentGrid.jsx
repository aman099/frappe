import ContentCard from "./ContentCard";

// Back ground Images
import img1 from "../assets/bg-pics/img-1.png";
import img2 from "../assets/bg-pics/img-2.png";
import img3 from "../assets/bg-pics/img-3.png";
import img4 from "../assets/bg-pics/img-4.png";
import img5 from "../assets/bg-pics/img-5.png";
import img6 from "../assets/bg-pics/img-6.png";
import img7 from "../assets/bg-pics/img-7.png";
import img8 from "../assets/bg-pics/img-8.png";
import img9 from "../assets/bg-pics/img-9.png";
import img10 from "../assets/bg-pics/img-10.png";
import img11 from "../assets/bg-pics/img-11.png";
import img12 from "../assets/bg-pics/img-12.jpeg";

import img14 from "../assets/bg-pics/img-14.jpeg";
import img15 from "../assets/bg-pics/img-15.png";
import img16 from "../assets/bg-pics/img-16.png";
import img17 from "../assets/bg-pics/img-17.png";
import img18 from "../assets/bg-pics/img-18.png";

// Profile Images
import profile1 from "../assets/profile-pics/profile-pic-1.jpeg";
import profile2 from "../assets/profile-pics/profile-pic-2.jpg";
import profile3 from "../assets/profile-pics/profile-pic-3.jpeg";
import profile4 from "../assets/profile-pics/profile-pic-4.png";
import profile5 from "../assets/profile-pics/profile-pic-5.gif";
import profile6_1 from "../assets/profile-pics/profile-pic-6.1.png";
import profile6_2 from "../assets/profile-pics/profile-pic-6.2.jpeg";
import profile10 from "../assets/profile-pics/profile-pic-10.png";
import profile14 from "../assets/profile-pics/profile-pic-14.jpg";

import chat from "../assets/logo/chat.png";

const cardItems = [
  {
    id: 0,
    img: img1,
    info_1: "8",
    info_2: "10213",
    info_3: "4.69",
    detail_para_1: "Introduction to ERPNext",
    detail_para_2: "ERPNext is the world's best free and open source ERP",
    profileImg1: profile1,
    profileImg2: null,
    profileName: "Reema Mehta",
    labeltag_1: "BEGINNER",
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 1,
    img: img2,
    info_1: "27",
    info_2: "5649",
    info_3: "4.91",
    detail_para_1: "Frappe Framework Course",
    detail_para_2: "Introducing Frappe Framework Beginner Course",
    profileImg1: profile2,
    profileImg2: null,
    profileName: "Eby Mathew",
    labeltag_1: "BEGINNER",
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 2,
    img: img3,
    info_1: "28",
    info_2: "4474",
    info_3: "5.0",
    detail_para_1: "Accounting",
    detail_para_2:
      "Learn Accounting concepts and get started with the ERPNext accounting module",
    profileImg1: profile3,
    profileImg2: null,
    profileName: "Linet Sherin Varghese",
    labeltag_1: null,
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 3,
    img: img4,
    info_1: "45",
    info_2: "3057",
    info_3: "5.0",
    detail_para_1: "Library Management with Frappe Framework",
    detail_para_2:
      "In this guide, you will learn how to use the Frappe framework by creating a Library Management App",
    profileImg1: profile4,
    profileImg2: null,
    profileName: "Faris Ansari",
    labeltag_1: "BEGINNER",
    labeltag_2: "PYTHON",
    labeltag_3: null,
  },
  {
    id: 4,
    img: img5,
    info_1: "7",
    info_2: "2625",
    info_3: "5.0",
    detail_para_1: "Manufacturing",
    detail_para_2: "Course on how to use Manufacturing Module in ERPNext",
    profileImg1: profile5,
    profileImg2: null,
    profileName: "Fafadia Tech",
    labeltag_1: "MANUFACTURING",
    labeltag_2: "PRODUCTION PLANNING",
    labeltag_3: null,
  },
  {
    id: 5,
    img: img6,
    info_1: "9",
    info_2: "2547",
    info_3: "5.0",
    detail_para_1: "Human Resources Management",
    detail_para_2:
      "This course covers employee master data management, lifecycle, leaves, attendance, recruitment, and training.",
    profileImg1: profile6_1,
    profileImg2: profile6_2,
    profileName: "Basawaraj and Linet",
    labeltag_1: "BEGINNER",
    labeltag_2: "FREE",
    labeltag_3: "HR",
  },
  {
    id: 6,
    img: img7,
    info_1: "11",
    info_2: "2372",
    info_3: "4.67",
    detail_para_1: "Inventory Management",
    detail_para_2:
      "Learn how the built-in Inventory Module in ERPNext, helps you gain insight and manage your inventory efficiently",
    profileImg1: profile6_2,
    profileImg2: null,
    profileName: "Linet Sherin Varghese",
    labeltag_1: "NEW COURSE",
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 7,
    img: img8,
    info_1: "6",
    info_2: "2251",
    info_3: "5.0",
    detail_para_1: "Customer Relationship Management",
    detail_para_2: "Supercharge your Sales processes.",
    profileImg1: profile6_1,
    profileImg2: profile6_2,
    profileName: "Basawaraj and Linet",
    labeltag_1: null,
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 8,
    img: img9,
    info_1: "5",
    info_2: "2051",
    info_3: "4.5",
    detail_para_1: "Project Management",
    detail_para_2:
      "Learn project management, task management, timesheets, project accounting, and reporting.",
    profileImg1: profile6_1,
    profileImg2: profile6_2,
    profileName: "Basawaraj and Linet",
    labeltag_1: null,
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 9,
    img: img10,
    info_1: "10",
    info_2: "1990",
    info_3: "4.5",
    detail_para_1: "ERPNext Payroll",
    detail_para_2: "A Biggener's guide to ERPNext Payroll",
    profileImg1: profile10,
    profileImg2: null,
    profileName: "n0c0de",
    labeltag_1: "BEGINNER",
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 10,
    img: img11,
    info_1: "8",
    info_2: "1794",
    info_3: "4.69",
    detail_para_1: "Procurement",
    detail_para_2: "Learn all about managing procurement using ERPNext",
    profileImg1: profile6_1,
    profileImg2: profile6_2,
    profileName: "Basawaraj and Linet",
    labeltag_1: "BEGINNER",
    labeltag_2: "BUYING",
    labeltag_3: "FREE",
  },
  {
    id: 11,
    img: img12,
    info_1: "5",
    info_2: "1774",
    info_3: "5.0",
    detail_para_1: "Website Management",
    detail_para_2: "ERPNext is the world's best free and open source ERP",
    profileImg1: profile6_2,
    profileImg2: null,
    profileName: "Linet Sherin Varghese",
    labeltag_1: null,
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 12,
    img: img5,
    info_1: "6",
    info_2: "1530",
    info_3: "4.6",
    detail_para_1: "Production Planning and Execution",
    detail_para_2: "Production Planning and Execution",
    profileImg1: profile5,
    profileImg2: null,
    profileName: "Fafadia Tech",
    labeltag_1: null,
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 13,
    img: img14,
    info_1: "8",
    info_2: "1493",
    info_3: "4.89",
    detail_para_1: "Introducing Frappe LMS",
    detail_para_2:
      "Frappe LMS is an easy-to-use, open-source learning management system.",
    profileImg1: profile14,
    profileImg2: null,
    profileName: "Jannat Patel",
    labeltag_1: "NEW PRODUCT",
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 14,
    img: img15,
    info_1: "6",
    info_2: "1210",
    info_3: "4.4",
    detail_para_1: "Sales Management",
    detail_para_2:
      "This Sales Management Course takes you through a use-case-based tutorial and gives you a deeper understanding of how the Selling Module in ERPNext will help you run your business efficiently!",
    profileImg1: profile6_2,
    profileImg2: null,
    profileName: "Linet Sherin Varghese",
    labeltag_1: "VERSION 14",
    labeltag_2: "BEGINNER",
    labeltag_3: "ERPNEXT",
  },
  {
    id: 15,
    img: img16,
    info_1: "4",
    info_2: "1135",
    info_3: "5.0",
    detail_para_1: "Customer Support Executive",
    detail_para_2:
      "Learn ticket management, service level agreements, warranty claims, maintenance management, and reporting",
    profileImg1: profile6_1,
    profileImg2: profile6_2,
    profileName: "Basawaraj and Linet",
    labeltag_1: null,
    labeltag_2: null,
    labeltag_3: null,
  },
  {
    id: 16,
    img: img17,
    info_1: "4",
    info_2: "1090",
    info_3: "5.0",
    detail_para_1: "ERPNext E-Commerce",
    detail_para_2:
      "Learn to take your business Online and manage it all using Ecommerce Management in ERPNext!",
    profileImg1: profile6_2,
    profileImg2: null,
    profileName: "Linet Sherin Varghese",
    labeltag_1: "BEGINNER",
    labeltag_2: "ERPNEXT",
    labeltag_3: null,
  },
  {
    id: 17,
    img: img18,
    info_1: "6",
    info_2: "508",
    info_3: "4.5",
    detail_para_1: "Healthcare Management",
    detail_para_2:
      "Learn to set up ERPNext for healthcare providers by creating master data, learning to manage patients, consultation process, lab activities as well as inpatient management",
    profileImg1: profile6_2,
    profileImg2: null,
    profileName: "Linet Sherin Varghese",
    labeltag_1: "ERPNEXT",
    labeltag_2: null,
    labeltag_3: null,
  },
];

function ContentGrid({ index, option }) {
  return (
    <>
      {index === 0 ? (
        <main
          className="content grid grid-cols-3 gap-8 mx-5 py-4
    mb-16"
        >
          <ContentCard cardItems={cardItems} option={option} />
        </main>
      ) : (
        <div
          className="upcoming mx-5 py-16
        mb-16 mt-4 grid place-items-center border rounded-lg"
        >
          <div className="upcoming-infos flex gap-4 items-center">
            <div className="upcoming-img">
              <img
                style={{ width: "2.75rem", height: "2.75rem" }}
                src={chat}
                alt="Chat logo"
              />
            </div>
            <div className="upcoming-info flex flex-col">
              <p className="font text-lg font-semibold">No Upcoming Courses</p>
              <p>There are no upcoming courses on this site</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentGrid;
