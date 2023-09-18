import { PortableTextComponents } from "@portabletext/react";
import React from "react";
import CodeBlocks from "./CodeBlocks";

type CodeBlock = {
	value: { code: string; filename: string; language: string };
};
// `components` object you'll pass to PortableText
const PortableSerializers: Partial<PortableTextComponents> = {
	types: {
		codeBlock: ({ value }: CodeBlock) => {
			const { language, code } = value;
			return <CodeBlocks language={language} code={code} />;
		},
	},

	block: {
		// @ts-ignore
		h1: ({ children }) => (
			<h1 className="text-3xl font-semibold mb-3 leading-10"># {children}</h1>
		),
		h2: ({ children }) => (
			<h1 className="text-xl font-semibold mb-3 mt-3 leading-10"># {children}</h1>
		),
		h3: ({ children }) => (
			<h1 className="text-3xl font-semibold mb-3 leading-10"># {children}</h1>
		),
	},

	marks: {
		code: ({ children }: { children: any }) => (
			<pre className="bg-gray-700 p-3 rounded">
				<code>{children}</code>
			</pre>
		),
		em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,

		link: ({ value, children }) => {
			const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
			return (
				<a
					href={value?.href}
					target={target}
					rel={
						target === "_blank"
							? "noindex nofollow noopener noreferrer"
							: ""
					}
				>
					{children}
				</a>
			);
		},
	},
};

export default PortableSerializers;
