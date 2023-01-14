export interface Created_by {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface Last_episode_to_air {
	air_date: string;
	episode_number: number;
	id: number;
	name: string;
	overview: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
	vote_average: number;
	vote_count: number;
}

export interface Network {
	id: number;
	name: string;
	logo_path: string;
	origin_country: string;
}

export interface Production_company {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface Production_country {
	iso_3166_1: string;
	name: string;
}

export interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
}

export interface Spoken_language {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface ShowDetailsType {
	adult: boolean;
	backdrop_path: string;
	created_by: Created_by[];
	episode_run_time: any[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: Last_episode_to_air;
	name: string;
	next_episode_to_air?: any;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Production_company[];
	production_countries: Production_country[];
	seasons: Season[];
	spoken_languages: Spoken_language[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
}