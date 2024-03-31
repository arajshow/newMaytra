import icon1 from "../assets/icon/advisory.png";
import icon2 from "../assets/icon/analytics-icon.png";
import icon3 from "../assets/icon/architectural-icon.png";
import icon4 from "../assets/icon/engineering.png";

export const serviceList = [
  {
    heading: "Advisory Services",
    icon: <img
							src={icon1}
							className=" w-[55px] h-[40px]"
						/>,
    description: "We specialize in technology, finance, policy, & regulatory advisory.",
  },
  {
    heading: "Analytics Services",
    icon: <img
							src={icon2}
							className=" w-[55px] h-[40px]"
						/>,
    description: "We focus on research, analysis, and assessments using advanced data science.",
  },

  {
    heading: "Architectural Services",
    icon: <img
							src={icon3}
							className=" w-[55px] h-[40px]"
						/>,
    description: "Our architectural practice blends artistry, creativity, and technical expertise.",
  },
  {
    heading: "Engineering Services",
    icon: <img
							src={icon4}
							className=" w-[55px] h-[40px]"
						/>,
    description: "We focus on problem-solving through rigorous applications of science and mathematics.",
  }
];