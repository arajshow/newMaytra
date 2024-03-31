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
		<div class="relative overflow-hidden flex flex-col justify-between max-w-md bg-Back border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 w-[500px] h-[80vh] mr-[75px]  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
			<div class="flex flex-col gap-4 items-center">
				<img
					class="rounded-t-lg object-center h-[47%] w-full "
					src={data.data.fig}
					alt=""
				/>
				<h5 class="mb-2 text-xl font-bold tracking-tight text-PBlue">
					{data.data.Sname}
				</h5>
				<p class="px-4 text-lg font-medium leading-7 text-black">
					{data.data.text}
				</p>
			</div>
		</div>
	);
};

export default SampleCard;
