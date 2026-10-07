// =========================
// Description Types
// =========================

export interface DescriptionFragmentModel {
  text: string;
  attributes: unknown[];
}

export interface DescriptionFragmentBlock {
  type: "fragment";
  model: DescriptionFragmentModel;
}

export interface DescriptionParagraphModel {
  text: string;
  blocks: DescriptionFragmentBlock[];
}

export interface DescriptionParagraphBlock {
  type: "paragraph";
  model: DescriptionParagraphModel;
}

export interface DescriptionTextModel {
  blocks: DescriptionParagraphBlock[];
}

export interface DescriptionTextBlock {
  type: "text";
  model: DescriptionTextModel;
}

export interface NewsDescription {
  blocks: DescriptionTextBlock[];
}


// =========================
// Body Types
// =========================

export interface SingleNewsImageType {
  type: "image";
  url: string;
  caption: string;
  altText: string;
  copyrightHolder: string;
}

export interface SingleNewsTextandSubheadingType {
  type: "text" | "subheading";
  text: string;
}

export type SingleNewsBodyType =
  | SingleNewsImageType
  | SingleNewsTextandSubheadingType;


// =========================
// Byline
// =========================

export interface NewsByline {
  name?: string;
  role?: string;
  url?: string;
}


// =========================
// Topic
// =========================

export interface NewsTopic {
  name?: string;
  slug?: string;
  id?: string;
}


// =========================
// Main Article Data
// =========================

export interface SingleNewsDataType {
  id: string;
  title: string;
  description: NewsDescription;
  link: string[];
  firstPublished: string;
  lastPublished: string;
  byline: NewsByline[];
  topics: NewsTopic[];
  tags: string[];
  imageUrl: string[];
  body: SingleNewsBodyType[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string[];
}


// =========================
// API Response
// =========================

export interface SingleNewsResponseType {
  success: boolean;
  cachedAt: string;
  data: SingleNewsDataType;
}