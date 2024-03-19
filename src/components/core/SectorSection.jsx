import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "./Horizontal-scroll";
import { sectorList } from "../../data/sectorList";
import SampleCard from "./SampleCard";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
	position: relative;
	width: 100%;
	min-height: 100vh;
`;

const BumperSection = styled.section`
	text-align: center;
	padding: 16px;
`;

const CardsContainer = styled.div`
	position: relative;
	height: 100%;
	padding: 0 0 0 250px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const SampleCards = React.memo(() =>
	sectorList.map((data, i) => (
		<SampleCard key={`sampleCard-${i}`} data={data} />
	))
);

// const SampleCards = () => (
// 	<div>
// 		{sectorList.map((data, id) => (
// 			<SampleCard key={`sampleCard-${id}`} data={data} />
// 		))}
// 	</div>
// );

const SectorSection = () => {
	return (
		<div className="w-screen bg-Pyellow">
			<div className="w-11/12 flex flex-col gap-12 my-32 items-center mx-auto pt-32">
				<p className="text-5xl text-black font-bold">
					Our <span className="text-PBlue">Sector</span>
				</p>
				<GlobalStyle />
				<Main>
					<BumperSection>
						<h4 className="text-xl text-galeryBlack">
							As an emerging consulting, technology, and design group, we are
							responsibly contributing to international development, global
							green growth, and climate action. Our principles are aligned with
							SDGs, and that has created immense opportunities for us to make a
							positive impact on the economy, society, and environment through
							our contributions to sustainability, productivity, and knowledge.
							It is in the sectors of agriculture, energy, natural resources, or
							transportation that our expertise matters to engineer innovations,
							while the infrastructure and urban development sectors engineer
							our creativity in technology innovation, platform design, and
							legal advisory.
						</h4>
					</BumperSection>
					<HorizontalSection className="sm:block hidden">
						<HorizontalScroll>
							<CardsContainer>
								<SampleCards />
							</CardsContainer>
						</HorizontalScroll>
					</HorizontalSection>
				</Main>
			</div>
		</div>
	);
};

export default SectorSection;
