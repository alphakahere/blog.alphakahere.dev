import { ClipboardCheck, Clipboard } from "lucide-react";
import React, { useState } from "react";

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
			{isCopied ? <ClipboardCheck className="text-green-500" /> : <Clipboard />}
		</button>
	);
};

export default CopyButton;
