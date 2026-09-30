export type Avatar = {
  src: string;
  alt: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: Avatar;
};

export type CommunitySection = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};