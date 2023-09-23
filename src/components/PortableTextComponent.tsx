import { PortableTextComponents } from "@portabletext/react";
import React from "react";
import CodeBlocks from "./CodeBlocks";
import { checkIfImageUrl } from "@/lib/utils";
import Image from "next/image";

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
			<h1 className="text-2xl font-semibold mb-3 leading-10"># {children}</h1>
		),
		h2: ({ children }) => (
			<h1 className="text-xl font-semibold mb-3 mt-3 leading-10"> {children}</h1>
		),
		h3: ({ children }) => (
			<h1 className="text-lg font-semibold mb-3 mt-3 leading-10"># {children}</h1>
		),
		normal: ({ children }) => <p className="text-justify mb-3">{children}</p>,
		blockquote: ({ children }) => (
			<blockquote className="border-l-[4px] border-l-blue-500  block p-2 mb-3">
				{children}
			</blockquote>
		),
	},

	marks: {
		code: ({ children }: { children: any }) => (
			<pre className="bg-zinc-700 p-3 rounded">
				<code>{children}</code>
			</pre>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
		strong: ({ children }) => <strong className="font-bold">{children}</strong>,
		highlight: ({ children }) => (
			<span className="border border-blue-200 bg-blue-100 rounded text-dark p-4 mb-5 block">
				<span>💡</span>
				{children}
			</span>
		),
		link: ({ value, children }) => {
			const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
			if (checkIfImageUrl(value?.href)) {
				return (
					<Image
						src={value?.href}
						width={200}
						height={500}
						alt={children?.toString() ?? "image d'illustration"}
						className="w-auto h-auto m-auto rounded-lg mt-3 mb-5 lg:max-h-[700px]"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				);
			}
			return (
				<a
					href={value?.href}
					target={target}
					rel={
						target === "_blank"
							? "noindex nofollow noopener noreferrer"
							: ""
					}
					className="text-blue-500 underline underline-offset-4"
				>
					{children}
				</a>
			);
		},
	},

	list: {
		bullet: ({ children }) => <ul className="list-disc mb-4 pl-5">{children}</ul>,
		number: ({ children }) => <ol className="list-decimal mb-4 pl-5">{children}</ol>,
	},

	listItem: {
		bullet: ({ children }) => <li className="mb-2">{children}</li>,

		checkmarks: ({ children }) => <li>✅ {children}</li>,
	},
};

export default PortableSerializers;
