import { PortableTextComponents } from "@portabletext/react";
import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "./CopyButton";

// `components` object you'll pass to PortableText
const PortableSerializers: Partial<PortableTextComponents> = {
	types: {
		codeBlock: (node: { value: { code: string; filename: string; language: string } }) => {
			const { language, filename, code } = node.value;
			return (
				<div className="bg-zinc-800 pt-3">
					<div className="flex justify-end px-3">
						<p>
							language: <span className="opacity-70">{language}</span>
						</p>
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
								className="p-2 rounded overflow-x-auto"
							>
								{tokens.map((line, i) => (
									<div key={i} {...getLineProps({ line })}>
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
		},
	},

	block: {
		// @ts-ignore
		h1: ({ children }) => (
			<h1 className="text-3xl font-bold mb-3 leading-10">#{children}</h1>
		),
	},

	marks: {
		// code: ({ children }: { children: any }) => (
		// 	<pre className="bg-gray-700 p-3 rounded">
		// 		<code>{children}</code>
		// 	</pre>
		// ),
	},
};

export default PortableSerializers;
