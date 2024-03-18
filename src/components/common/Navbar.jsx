import React from "react";
import { headerItems } from "../../data/headerItems";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
	const location = useLocation();
	function matchRoute(route) {
		return matchPath({ path: route }, location.pathname);
	}

	return (
		<div className="flex flex-col  items-center justify-center  gap-2 border-b-2 border-b-PGreen">
			{/* image */}
			<Link to="/">
				<img
					src={logo}
					loading="lazy"
					className="rounded-xl p-1 m-1 border-2 items-center border-white "
				/>
			</Link>

			{/* Nav links */}
			<nav className="">
				<ul className="flex flex-row md:gap-x-12">
					{headerItems.map((data) => (
						<li key={data.id} className="">
							<Link to={data?.link}>
								<p
									className={` capitalize text-[24px] ${
										matchRoute(data?.link)
											? " text-PBlue hidden md:block font-semibold"
											: "text-black hidden md:block"
									} hover:scale-95 hover:text-PBlue cursor-pointer transition-all duration-200`}
								>
									{data.title}
								</p>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
