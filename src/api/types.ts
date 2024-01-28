import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
};

export enum ErrorCode {
  Forbidden = 'FORBIDDEN',
}

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String']['output'];
  searchTvSeries: TvSeriesSearchOutput;
};

export type QuerySearchTvSeriesArgs = {
  input?: InputMaybe<TvSeriesInput>;
};

export type TvSeriesInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type TvSeriesItem = {
  __typename?: 'TvSeriesItem';
  firstAirDate?: Maybe<Scalars['Float']['output']>;
  genre?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  originCountry?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  originalLanguage?: Maybe<Scalars['String']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  posterPath?: Maybe<Scalars['String']['output']>;
  voteAverage?: Maybe<Scalars['Float']['output']>;
  voteCount?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type TvSeriesSearchOutput = {
  __typename?: 'TvSeriesSearchOutput';
  foundCount: Scalars['Int']['output'];
  items: Array<TvSeriesItem>;
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type SearchTvSeriesQueryVariables = Exact<{
  input?: InputMaybe<TvSeriesInput>;
}>;

export type SearchTvSeriesQuery = {
  __typename?: 'Query';
  searchTvSeries: {
    __typename?: 'TvSeriesSearchOutput';
    page: number;
    perPage: number;
    totalCount: number;
    items: Array<{
      __typename?: 'TvSeriesItem';
      firstAirDate?: number | null;
      genre?: Array<string | null> | null;
      id?: string | null;
      name?: string | null;
      originCountry?: Array<string | null> | null;
      originalLanguage?: string | null;
      originalName?: string | null;
      overview?: string | null;
      popularity?: number | null;
      posterPath?: string | null;
      voteAverage?: number | null;
      voteCount?: number | null;
      year?: number | null;
    }>;
  };
};

export const SearchTvSeriesDocument = gql`
  query SearchTvSeries($input: TvSeriesInput) {
    searchTvSeries(input: $input) {
      page
      perPage
      totalCount
      items {
        firstAirDate
        genre
        id
        name
        originCountry
        originalLanguage
        originalName
        overview
        popularity
        posterPath
        voteAverage
        voteCount
        year
      }
    }
  }
`;
