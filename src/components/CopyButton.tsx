import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const CopyButton = ({ codeToCopy }: { codeToCopy: string }) => {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(codeToCopy).then(() => {
			setIsCopied(true);
		});
	};

	return (
		<button onClick={copyToClipboard} title={isCopied ? "Copié" : "Copier"}>
			{isCopied ? "Copied!" : <FaClipboard />}
		</button>
	);
};

export default CopyButton;
