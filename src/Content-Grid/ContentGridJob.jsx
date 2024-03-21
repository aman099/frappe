import ContentCardJob from "./ContentCardJob";

import img1 from "../assets/logo/company-logos/company-1.jpg";
import img2 from "../assets/logo/company-logos/company-2.png";
import img3 from "../assets/logo/company-logos/company-3.png";
import img4 from "../assets/logo/company-logos/company-4.png";
import img5 from "../assets/logo/company-logos/company-5.png";
import img6 from "../assets/logo/company-logos/company-6.jpg";
import img7 from "../assets/logo/company-logos/company-7.png";
import img8 from "../assets/logo/company-logos/company-8.png";
import img9 from "../assets/logo/company-logos/company-9.png";
import img10 from "../assets/logo/company-logos/company-10.png";
import img11 from "../assets/logo/company-logos/company-11.jpg";
import img12 from "../assets/logo/company-logos/company-12.png";
import img13 from "../assets/logo/company-logos/company-13.png";
import img14 from "../assets/logo/company-logos/company-14.png";
import img15 from "../assets/logo/company-logos/company-15.jpeg";
import img16 from "../assets/logo/company-logos/company-16.jpg";
import img17 from "../assets/logo/company-logos/company-17.jpeg";
import img18 from "../assets/logo/company-logos/company-18.jpg";
import img19 from "../assets/logo/company-logos/company-19.png";
import img20 from "../assets/logo/company-logos/company-20.png";
import img21 from "../assets/logo/company-logos/company-21.png";
import img22 from "../assets/logo/company-logos/company-22.png";

const cardItemsJob = [
  {
    id: 1,
    job: "Indian Frappe Developer",
    companyLogo: img1,
    companyName: "Smart Solutions",
    jobLocation: "Egypt",
    jobType: "Full Time",
    datePosted: "Mar 18, 2024",
  },
  {
    id: 2,
    job: "Consultant",
    companyLogo: img2,
    companyName: "EPRGulf",
    jobLocation: "Doha",
    jobType: "Full Time",
    datePosted: "Mar 10, 2024",
  },
  {
    id: 3,
    job: "ERP NEXT DEVELOPER SPECIALIST",
    companyLogo: img3,
    companyName: "Monarch Business Solutions Private Limited",
    jobLocation: "KOCHI, KERALA - INDIA",
    jobType: "Full Time",
    datePosted: "Mar 7, 2024",
  },
  {
    id: 4,
    job: "Junior Software Developer",
    companyLogo: img4,
    companyName: "Mission20 Zero",
    jobLocation: "India",
    jobType: "Full Time",
    datePosted: "Mar 7, 2024",
  },
  {
    id: 5,
    job: "ERP Next Specialist",
    companyLogo: img5,
    companyName: "Digipod",
    jobLocation: "Bangalore",
    jobType: "Contract",
    datePosted: "Mar 1, 2024",
  },
  {
    id: 6,
    job: "Frappe Developer",
    companyLogo: img6,
    companyName: "MNT Solutions Pvt Ltd",
    jobLocation: "Mumbai, Delhi, Dehradun",
    jobType: "Full Time",
    datePosted: "Feb 29, 2024",
  },
  {
    id: 7,
    job: "Senior Frappe/ERPNext Engineer",
    companyLogo: img7,
    companyName: "rtCamp",
    jobLocation: "Pune, India (Hybrid) | ₹14L - ₹18L p.a.",
    jobType: "Full Time",
    datePosted: "Feb 12, 2024",
  },
  {
    id: 8,
    job: "ERPNext Engineer",
    companyLogo: img8,
    companyName: "Chandorkar Technologies OPC Pvt Ltd",
    jobLocation: "Pune",
    jobType: "Full Time",
    datePosted: "Jan 30, 2024",
  },
  {
    id: 9,
    job: "Business Analyst / ERP Implementation Consultant",
    companyLogo: img9,
    companyName: "Mission20 Zero",
    jobLocation: "Doha, Qatar",
    jobType: "Full Time",
    datePosted: "Jan 28, 2024",
  },
  {
    id: 10,
    job: "Frappe Developer",
    companyLogo: img10,
    companyName: "Wahni IT SOlutions",
    jobLocation: "Thrissur, Kerela, India",
    jobType: "Full Time",
    datePosted: "Jan 17, 2024",
  },
  {
    id: 11,
    job: "ERPNext Developer",
    companyLogo: img11,
    companyName: "CitrusLeaf Software",
    jobLocation: "Indore",
    jobType: "Full Time",
    datePosted: "Jan 11, 2024",
  },
  {
    id: 12,
    job: "ERP Software Sales Manager",
    companyLogo: img12,
    companyName: "Invento Software Limited",
    jobLocation: "Dhaka, Bangladesh",
    jobType: "Full Time",
    datePosted: "Jan 8, 2024",
  },
  {
    id: 13,
    job: "Frappe / ERPNext Developer",
    companyLogo: img13,
    companyName: "CitiXsys Tech Solutions",
    jobLocation: "Noida",
    jobType: "Full Time",
    datePosted: "Jan 8, 2024",
  },
  {
    id: 14,
    job: "Frappe Developer 2",
    companyLogo: img14,
    companyName: "Home Alankar",
    jobLocation: "Bangalore",
    jobType: "Full Time",
    datePosted: "Dec 26, 2023",
  },
  {
    id: 15,
    job: "Frappe Deveops - Press Setup",
    companyLogo: img15,
    companyName: "RNIT Solutions & Services Ltd",
    jobLocation: "Hyderabad",
    jobType: "Freelance",
    datePosted: "Dec 15, 2023",
  },
  {
    id: 16,
    job: "ERP Flow Customisation",
    companyLogo: img16,
    companyName: "GRANDEH",
    jobLocation: "Pune",
    jobType: "Full Time",
    datePosted: "Dec 13, 2023",
  },
  {
    id: 17,
    job: "looking for Frappe Developer",
    companyLogo: img17,
    companyName: "Innodev Technologies",
    jobLocation: "Kazakhstan",
    jobType: "Freelance",
    datePosted: "Dec 12, 2023",
  },
  {
    id: 18,
    job: "Frappe Developer",
    companyLogo: img18,
    companyName: "Home Alankar",
    jobLocation: "Bangalore",
    jobType: "Full Time",
    datePosted: "Dec 12, 2023",
  },
  {
    id: 19,
    job: "Frappe / ERPNext Developer",
    companyLogo: img19,
    companyName: "Stockarea",
    jobLocation: "Chennai",
    jobType: "Full Time",
    datePosted: "Dec 6, 2023",
  },
  {
    id: 20,
    job: "ERP Software Developer",
    companyLogo: img20,
    companyName: "Mission20 Zero",
    jobLocation: "India",
    jobType: "Full Time",
    datePosted: "Nov 28, 2023",
  },
  {
    id: 21,
    job: "ERPNext Developer",
    companyLogo: img21,
    companyName: "Oasis Tech Solutions LLC",
    jobLocation: "Oman",
    jobType: "Full Time",
    datePosted: "Nov 14, 2023",
  },
  {
    id: 22,
    job: "frappe front-end UI",
    companyLogo: img22,
    companyName: "ARD",
    jobLocation: "Remotely",
    jobType: "Full Time",
    datePosted: "Nov 14, 2023",
  },
];

function ContentGridJob() {
  return (
    <main
      className="content grid grid-cols-2 gap-8 mx-5 py-4
mb-16"
    >
      <ContentCardJob cardItemsJob={cardItemsJob} />
    </main>
  );
}

export default ContentGridJob;
