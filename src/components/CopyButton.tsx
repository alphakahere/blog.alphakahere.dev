import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const CopyButton = ({ codeToCopy }: { codeToCopy: string }) => {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(codeToCopy).then(() => {
			setIsCopied(true);
		});
		setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	};

	return (
		<button
			onClick={copyToClipboard}
			title={isCopied ? "Copié" : "Copier"}
			className="text-white"
		>
			{isCopied ? <GiCheckMark className="text-green-500" /> : <FaClipboard />}
		</button>
	);
};

export default CopyButton;
