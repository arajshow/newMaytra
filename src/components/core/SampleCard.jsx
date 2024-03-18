import React from "react";
import ReadMoreBtn from "../common/ReadMoreBtn";

// const SampleCard = styled.div`
// 	position: relative;
// 	height: 300px;
// 	width: 500px;
// 	background-color: #111f30;
// 	margin-right: 75px;
// 	flex-shrink: 0;
// `;

const SampleCard = (data) => {
	return (
		<div class="relative overflow-hidden max-w-md bg-GreenLight border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[500px] h-[80%] mr-[75px]">
			<img
				class="rounded-t-lg object-center h-[47%] "
				src={data.data.fig}
				alt=""
			/>
			<div class="p-5 items-center">
				<a href="#">
					<h5 class="mb-2 text-xl font-bold tracking-tight text-PBlue">
						{data.data.Sname}
					</h5>
				</a>
				<p class="mb-4 text-md font-medium leading-6 text-black">
					{data.data.text}
				</p>
				<div className="w-[50%] items-center">
					<ReadMoreBtn />
				</div>
			</div>
		</div>
	);
};

export default SampleCard;
