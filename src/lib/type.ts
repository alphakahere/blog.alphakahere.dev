export interface Post {
	_id: string;
	slug: {
		current: string;
		type: "slug";
	};
	title: string;
	source: string;
	demo: string;
	body: any;
	except: string;
	mainImage: string;
	tags: string[];
	estimatedReadingTime: number;
	_createdAt: string;
	_updatedAt: string;
	publishedAt: string;
}
