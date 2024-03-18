import React, { useState } from "react";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		pass: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();

		if (
			formData.email === process.env.REACT_APP_USERNAME &&
			formData.pass === process.env.REACT_APP_PASS
		) {
			localStorage.setItem(
				"maytra",
				JSON.stringify(process.env.REACT_APP_TOKEN)
			);
			navigate("/blog/create");
		} else {
			if (formData.email !== process.env.REACT_APP_USERNAME) {
				toast.error("id or password is wrong");
				setFormData({
					email: "",
					pass: "",
				});
			} else if (formData.pass !== process.env.REACT_APP_PASS) {
				toast.error("password is wrong");
				setFormData({
					email: formData.email,
					pass: "",
				});
			}
		}
	};

	function changeHandler(event) {
		const { name, value } = event.target;

		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	return (
		<>
			<section className="bg-white text-black">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-[#FAF9F6] rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
								Sign in to your account
							</h1>
							<form
								onSubmit={submitHandler}
								className="space-y-4 md:space-y-6"
								action="#"
							>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-black "
									>
										username
									</label>
									<input
										type="text"
										name="email"
										id="email"
										onChange={changeHandler}
										value={formData.email}
										className="bg-gray-50 border border-PGray text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="@abc123"
										required=""
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-black"
									>
										Password
									</label>
									<input
										type="password"
										name="pass"
										id="password"
										placeholder="••••••••"
										onChange={changeHandler}
										value={formData.pass}
										className="bg-gray-50 border border-PGray text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										required=""
									/>
								</div>
								<button
									type="submit"
									class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								>
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Login;
