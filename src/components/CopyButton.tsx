import React, { useState } from "react";

const CopyButton = ({ codeToCopy }: { codeToCopy: string }) => {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(codeToCopy).then(() => {
			setIsCopied(true);
		});
	};

	return <button onClick={copyToClipboard}>{isCopied ? "Copied!" : "Copy"}</button>;
};

export default CopyButton;
