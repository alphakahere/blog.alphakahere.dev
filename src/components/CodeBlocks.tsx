import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "./CopyButton";
// react-syntax-highlighter
interface Props {
	language: string;
	code: string;
}
const CodeBlocks = ({ language, code }: Props) => {
	return (
		<div className="bg-zinc-800 rounded-lg pt-3 mb-8">
			<div className="flex justify-end items-center px-3 gap-3 py-1 text-white">
				{language && (
					<p>
						langage:{" "}
						<span className="text-blue-500">
							{language}
						</span>
					</p>
				)}
				<CopyButton codeToCopy={code} />
			</div>
			<Highlight
				theme={themes.vsDark}
				code={code}
				language={language ?? "jsx"}
			>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre
						style={style}
						className="p-3 rounded overflow-x-auto"
					>
						{tokens.map((line, i) => (
							<div
								key={i}
								{...getLineProps({ line })}
							>
								{line.map((token, key) => (
									<span
										key={key}
										{...getTokenProps({
											token,
										})}
									/>
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	);
};

export default CodeBlocks;
