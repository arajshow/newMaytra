import React, { useEffect, useRef, useState } from "react";
import { headerItems } from "../../data/headerItems";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
	const location = useLocation();
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);
	function matchRoute(route) {
		return matchPath({ path: route }, location.pathname);
	}

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setShowMenu(false);
		}
	};

	const handleResize = () => {
		if (window.innerWidth >= 768) {
			setShowMenu(false); // Close the menu if screen size is medium or larger
		}
	};

	// Effect to add resize event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (showMenu) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showMenu]);

	return (
		<div className="flex flex-col  items-center justify-center  gap-2 border-b-2 border-b-PGreen">
			{/* image */}
			<Link to="/" className="pb-8">
				<img
					src={logo}
					loading="lazy"
					className="rounded-xl p-1 m-1 border-2 items-center border-white w-[120px] h-[120px]"
				/>
			</Link>

			<div
				className={`absolute flex justify-end top-[150px] md:hidden w-full p-3 text-4xl ${
					showMenu ? "hidden" : "block"
				}`}
			>
				<FiMenu className="text-black " onClick={toggleMenu} />
			</div>

			{/* Nav links */}
			<nav className="flex justify-between items-center">
				{/* Menu icon for small screens */}

				{/* Dropdown menu */}
				{showMenu && (
					<div
						ref={menuRef}
						className={`absolute z-50 translate-y-28 -translate-x-2 right-0 mt-2 w-48 bg-galeryBlack text-white rounded-lg shadow-lg py-2 px-2`}
					>
						<ul>
							{headerItems.map((data) => (
								<li key={data.id} className="">
									<Link to={data?.link}>
										<p
											className={`capitalize text-[24px] ${
												matchRoute(data?.link)
													? " text-white font-semibold"
													: "text-PGray"
											} hover:scale-95 hover:text-white cursor-pointer transition-all duration-200`}
										>
											{data.title}
										</p>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Main navigation */}
				<ul className={`md:flex md:flex-row md:gap-x-12 hidden`}>
					{headerItems.map((data) => (
						<li key={data.id} className="">
							<Link to={data?.link}>
								<p
									className={`capitalize text-[24px] ${
										matchRoute(data?.link)
											? " text-PBlue font-semibold"
											: "text-black"
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
