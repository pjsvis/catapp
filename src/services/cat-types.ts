export interface Cat {
  breeds: Breeds[];
  created_at: string;
  height: number;
  id: string;
  original_filename: string;
  sub_id: string;
  url: string;
  width: number;
}

export interface Breeds {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  cat_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface VotePost {
  image_id: string;
  sub_id: string;
  value: number;
}

export interface UploadResponse {
  status: number;
  message: string;
  level: string;
}
