import React, { useEffect } from "react";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import ReadMoreBtn from "../common/ReadMoreBtn";
import { useLocation, Link } from "react-router-dom";

const AboutSection = () => {
  const path = useLocation();
  const data = path?.pathname.split("/").at(-1);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-10/12 flex-col  mx-auto mt-10 gap-20">
        <p className="section-heading flex w-full items-center justify-around mx-auto">
          About
        </p>
        <img
          src={p4}
          className="md:w-[75%] w-[90%] mx-auto object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:h-[60vh] h-[25vh]"
        />
        <div className="flex flex-col justify-around items-center md:w-full gap-10 mx-auto mb-6">
          <p className="text-lg font-light font-acumin leading-8 text-center">
            MAYTRA is a highly specialized boutique infrastructure advisory,
            economic consultancy, and engineering design firm with proven
            expertise in inclusive green growth, clean technology, climate
            finance, and environmental analytics. MAYTRA facilitates Global
            Green Growth by driving sustainable infrastructure development in
            the agriculture, natural resources, energy transition, urban
            development, WASH, and transportation sectors through customized
            advisory, analytics, design, and engineering solutions. With proven
            expertise in green finance, ESG, carbon markets, sustainability
            standards, environmental econometrics, geospatial and geoinformatics
            applications, and advanced technology, including clean technology,
            engineering technology, and materials technology, we assist global
            clients in planning, designing, executing, and commissioning their
            climate adaptation and climate mitigation projects and programs. We
            address some of the stressing global issues arising due to climate
            change, resource exploitation, and stressed ecosystems through smart
            innovations, data-backed analysis, critical design, and strategic
            insights. We also specialize in private and public international law
            practice and negotiations.
          </p>
          {data !== "about" && (
            <Link to={"/about"}>
              <ReadMoreBtn />
            </Link>
          )}
        </div>
      </div>

      {data && (
        <>
          <div className="flex w-10/12 flex-col  mx-auto mt-12 gap-20">
            <img
              src={p2}
              className="md:w-[75%] w-[90%] mx-auto object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:h-[60vh] h-[25vh]"
            />
            <div className="flex flex-col justify-around items-center md:w-full gap-10 mx-auto mb-6">
              <p className="text-lg font-light font-acumin leading-8 text-center">
                We at MAYTRA work with global businesses, international
                organizations, research institutions, and governments,
                facilitating smart innovations and enabling strategic value
                propositions through technology integration and sharing accurate
                research to attain inclusive green growth, impactful
                development, and market superiority. MAYTRA has established an
                Environmental, Social, and Governance Management System (ESGMS)
                that provides a systematic procedure to ensure our project
                approach is free of environmental, social, and governance risks,
                thus fulfilling the Principles of Responsible Investments (PRI)
                practices. <br /> <br />
                <span className="lg:block hidden">
                  {" "}
                  Through a global team of highly qualified multicultural
                  experts speaking almost 20 languages and currently working
                  across 26 countries worldwide, we facilitate smart innovations
                  and value creation in two broad themes related to Human
                  well-being – (1) Clean & healthy consumption in terms of
                  climate-smart agriculture, organic food sufficiency, clean
                  water & breathable air availability, and inclusive healthcare
                  systems, and (2) Sustainable living & development in terms of
                  renewable & clean energy access, energy efficiency, natural
                  resources optimization, sustainable infrastructure, liveable
                  eco-cities, and green transportation.
                </span>
              </p>
            </div>
          </div>

          <div className="flex w-10/12 flex-col  mx-auto mt-12 gap-20">
            <img
              src={p3}
              className="md:w-[75%] w-[90%] mx-auto object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:h-[60vh] h-[25vh]"
            />
            <div className="flex flex-col justify-around items-center md:w-full gap-10 mx-auto mb-6">
              <p className="text-lg font-light font-acumin leading-8 text-center">
                At MAYTRA, we work on clean technology, climate finance,
                financial engineering, climate risk assessment, climate conflict
                assessment, environmental valuation, carbon market analysis,
                carbon credit mechanism, ESG & socially responsible investing,
                sustainability standards, climate change adaptation and
                mitigation, climate-smart agriculture, sustainable, resilient
                infrastructure, and advisory on UNFCCC-initiated GEF (Global
                Environmental Facility) or GCF (Green Climate Fund) or programs
                like REDD+. Specific sectors we cover include agriculture, food
                and forestry, energy, energy efficiency and industry, cities,
                infrastructure and transportation, water, waste and sanitation,
                and mining, extractives, and resources. We aim to attain
                inclusive global green growth, ably supported by AI-assisted
                data platforms and deep research. Our social and client outreach
                involves exchanging ideas, sharing knowledge, providing
                strategic inputs, establishing finance linkages, and assisting
                in creating impact. We help businesses attain sustainability
                transition, clean technology integration, adapt to cutting-edge
                technologies, attain excellence in their processes, and create
                highly innovative and effective product offerings.
              </p>
            </div>
          </div>

          <div className="flex w-10/12 flex-col  mx-auto mt-12 gap-20">
            <img
              src={p1}
              className="md:w-[75%] w-[90%] mx-auto object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:h-[60vh] h-[25vh]"
            />
            <div className="flex flex-col justify-around items-center md:w-full gap-10 mx-auto mb-6">
              <p className="text-lg font-light font-acumin leading-8 text-center">
                Our project critical climate action planning and program design
                capabilities facilitate the successful implementation of climate
                adaptation and mitigation projects through comprehensive
                stakeholder engagement, sound economics, advanced engineering,
                and strategic insights. We provide strategy and technical
                assistance in green growth planning, clean energy transition,
                climate-smart agriculture, green buildings, smart urban
                development, water and waste management, clean transportation,
                and sustainable supply chains. We offer proficiency in advanced
                climate data analytics, including geospatial data analytics,
                environmental econometrics, and climate risk management. We
                conduct impact evaluations of developmental programs, undertake
                feasibility studies and environmental impact assessments,
                prepare DPRs and Master Plans, assess carbon footprints and
                carbon capture & utilization (CCU), advise on sustainability
                measures, and act as an accreditation agency for sustainability
                standards. We also provide research-backed intelligence and
                advice in highly specific areas of law, such as resources,
                technology, and construction. Our advisory is objective,
                accurate, strategic, and backed by a sound legal framework. We
                handle International commercial arbitrations in India,
                Singapore, the U.K., Switzerland, Canada, and many more. We also
                provide consultation on effective international commercial
                contracts and assist in contract negotiations.
              </p>
            </div>
          </div>

          <div className="flex w-10/12 flex-col  mx-auto mt-12 gap-20">
            <p className="flex w-full text-PBlue text-[60px] font-bold items-center justify-around mx-auto capitalize">
              Project Delivery
            </p>
            <img
              src={p5}
              className="md:w-[75%] w-[90%] mx-auto object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:h-[60vh] h-[25vh]"
            />
            <div className="flex flex-col justify-around items-center md:w-full gap-10 mx-auto mb-6">
              <p className="text-lg font-light font-acumin leading-8 text-center">
                MAYTRA’s approach to project delivery is strategic and dynamic,
                and we are able to deliver time-bound and highly optimized
                clean-technology infrastructure through our in-house resources
                and complex technical expertise. Our approach to program
                management is innovative and bold, and we are able to manage
                highly tactical developmental programs. Our dedication and
                involvement in our work are complete, and internationally, we
                are capable of working in the most fragile and vulnerable
                geographies. <br /> <br />
                <span className="lg:block hidden">
                  {" "}
                  Our project strategies are properly assessed, highly accurate,
                  and effective. They are the culmination of a perfect
                  understanding of client needs, the application of world-class
                  technologies, and time-bound deliveries. Irrespective of the
                  size or scale of the assignment, our engagement team of highly
                  capable domain knowledge experts and the backend support team
                  will always follow a structured process, including coordinated
                  project management practices and stringent quality control, to
                  attain successful deliveries. The process is characterized by
                  systematic research, insightful analysis, smart wisdom,
                  optimized strategy, and impactful projects.
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutSection;
