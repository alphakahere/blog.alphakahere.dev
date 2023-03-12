export function Wave() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#732bf7"
				fill-opacity="1"
				d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,229.3C672,192,768,128,864,96C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
			></path>
		</svg>
	);
}

export function Wave2() {
	return (
		<svg
			width="100%"
			height="100%"
			id="svg"
			viewBox="0 0 1440 390"
			xmlns="http://www.w3.org/2000/svg"
			className="transition duration-300 ease-in-out delay-150"
		>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
					<stop offset="5%" stop-color="#732bf7"></stop>
					<stop offset="95%" stop-color="#9900ef"></stop>
				</linearGradient>
			</defs>
			<path
				d="M 0,400 C 0,400 0,200 0,200 C 93.10714285714289,243.57142857142856 186.21428571428578,287.1428571428571 314,270 C 441.7857142857142,252.85714285714286 604.2499999999998,174.99999999999997 729,139 C 853.7500000000002,103.00000000000003 940.7857142857144,108.85714285714286 1053,126 C 1165.2142857142856,143.14285714285714 1302.6071428571427,171.57142857142856 1440,200 C 1440,200 1440,400 1440,400 Z"
				stroke="none"
				stroke-width="0"
				fill="url(#gradient)"
				fill-opacity="1"
				className="transition-all duration-300 ease-in-out delay-150 path-0"
			></path>
		</svg>
	);
}
