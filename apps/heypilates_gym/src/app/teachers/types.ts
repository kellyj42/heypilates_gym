export type Teacher = {
  _id: string;
  name: string;
  title?: string;
  bio?: string;
  specialties?: string[];
  rating?: number;
  sessions?: number;
  isFeatured?: boolean;
  image?: {
    asset?: {
      url?: string;
    };
  };
};
