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
    <div class="relative overflow-hidden flex flex-col justify-space max-w-md rounded-lg dark:bg-gray-800 dark:border-gray-700 w-[500px] h-[85vh] mr-[75px]  shadow-[rgba(0,_0,_0,_0.4)_0px_10px_20px]">
      <div class="flex flex-col gap-3 items-center">
        <img
          class="rounded-t-lg object-cover h-[30%] w-full"
          src={data.data.fig}
          alt=""
        />
        <h5 class="text-2xl tracking-tight text-PBlue tracking-tight my-1">
          {data.data.Sname}
        </h5>
        <p class="px-4 text-lg font-medium leading-7 text-black text-justify">
          {data.data.text}
        </p>
      </div>
    </div>
  );
};

export default SampleCard;
