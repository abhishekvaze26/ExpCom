export class Source{
  id:string;
  name:string;
}

export class News{
  source:Source;
  author:string;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:Date;
  content:string
}

export class NewsRsponse{
  status:string;
  totalResults:number;
  articles:News[];
}
