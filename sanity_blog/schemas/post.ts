export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required().error("This field is required"),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 100,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "except",
			title: "Except",
			type: "string",
			options: {
				maxLength: 200,
			},
		},
		{
			name: "source",
			title: "Source",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["https"],
				}),
		},
		{
			name: "demo",
			title: "Demo",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["https"],
				}),
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "reference", to: { type: "tag" } }],
			validation: (Rule) => Rule.required(),
		},
		{
			name: "updatedAt",
			title: "Updated at",
			type: "datetime",
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
