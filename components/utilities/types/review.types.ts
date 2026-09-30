export type Review = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  comment: string;
};

export type RatingFilter = "all" | 1 | 2 | 3 | 4 | 5;