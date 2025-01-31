export type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  id: number;
  height: number;
  weight: number;
};

export type Article = {
  createdAt: Date;
  name: string;
  id: string;
  text: string;
  title: string;
};

export type User = {
  name: string;
  avatar: string;
  id: string;
};
