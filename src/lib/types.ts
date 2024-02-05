export type ImageCollection = {
	file: ImageMetadata;
	alt: string;
}

export type Project = {
	title: string;
	period: string;
	designation: string;
	technologies: string[];
	description: string;
	links: {
		logo: string;
		href: string;
	}[];
};

export type Job = {
	company: string;
	href: string;
	designation: string;
	period: string;
	points: string[];
};

export type Blog = {
	title: string;
	tags: string[];
	link?: string;
	date?: Date;
};
