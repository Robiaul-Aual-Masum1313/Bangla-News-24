export interface MainNewsType {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
export interface AcuDataArrayType {
  title: string;
  curationId: string;
  curationType: string;
  link: null;
  count: number;
  articles: MainNewsType[];
}

export interface MostReadDataType {
  id: string;
  title: string;
  link: string;
  category: string;
  firstPublished: string;
}

export interface SingleNewsType {
  id: string;
  title: string;
  tags: string[];
  byline: {
    name: string;
    role: string;
  }[];
  firstPublished: string;
  imageUrl: string;
  body: SingleNewsBodyType[];
  wordCount: number;
  source: string;
}
export type SingleNewsBodyType =| SingleNewsImageType | SingleNewsTextandSubheadingType ;

export interface SingleNewsImageType {
  type: 'image';
  url: string;
  caption: string;
  altText: string;
  copyrightHolder: string;
}
export interface SingleNewsTextandSubheadingType {
  type:  "text" | "subheading";
  text: string;
}
