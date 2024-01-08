export interface Project {
	name: string,
	description: string,
	technologies: string[],
	url?: string,
	repository: string,
	date: Date,
	image?: string 
}
