import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** columns and relationships of "deck_themes" */
export type DeckThemes = {
  __typename?: 'DeckThemes';
  /** An array relationship */
  decks: Array<Decks>;
  /** An aggregate relationship */
  decksAggregate: DecksAggregate;
  /** An array relationship */
  duelRecords: Array<DuelRecords>;
  /** An aggregate relationship */
  duelRecordsAggregate: DuelRecordsAggregate;
  id: Scalars['Int'];
  mainImgUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameKana: Scalars['String'];
};

/** columns and relationships of "deck_themes" */
export type DeckThemesDecksArgs = {
  distinctOn?: InputMaybe<Array<DecksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DecksOrderBy>>;
  where?: InputMaybe<DecksBoolExp>;
};

/** columns and relationships of "deck_themes" */
export type DeckThemesDecksAggregateArgs = {
  distinctOn?: InputMaybe<Array<DecksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DecksOrderBy>>;
  where?: InputMaybe<DecksBoolExp>;
};

/** columns and relationships of "deck_themes" */
export type DeckThemesDuelRecordsArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

/** columns and relationships of "deck_themes" */
export type DeckThemesDuelRecordsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

/** aggregated selection of "deck_themes" */
export type DeckThemesAggregate = {
  __typename?: 'DeckThemesAggregate';
  aggregate?: Maybe<DeckThemesAggregateFields>;
  nodes: Array<DeckThemes>;
};

/** aggregate fields of "deck_themes" */
export type DeckThemesAggregateFields = {
  __typename?: 'DeckThemesAggregateFields';
  avg?: Maybe<DeckThemesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DeckThemesMaxFields>;
  min?: Maybe<DeckThemesMinFields>;
  stddev?: Maybe<DeckThemesStddevFields>;
  stddevPop?: Maybe<DeckThemesStddevPopFields>;
  stddevSamp?: Maybe<DeckThemesStddevSampFields>;
  sum?: Maybe<DeckThemesSumFields>;
  varPop?: Maybe<DeckThemesVarPopFields>;
  varSamp?: Maybe<DeckThemesVarSampFields>;
  variance?: Maybe<DeckThemesVarianceFields>;
};

/** aggregate fields of "deck_themes" */
export type DeckThemesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DeckThemesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type DeckThemesAvgFields = {
  __typename?: 'DeckThemesAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "deck_themes". All fields are combined with a logical 'AND'. */
export type DeckThemesBoolExp = {
  _and?: InputMaybe<Array<DeckThemesBoolExp>>;
  _not?: InputMaybe<DeckThemesBoolExp>;
  _or?: InputMaybe<Array<DeckThemesBoolExp>>;
  decks?: InputMaybe<DecksBoolExp>;
  duelRecords?: InputMaybe<DuelRecordsBoolExp>;
  id?: InputMaybe<IntComparisonExp>;
  mainImgUrl?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameKana?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "deck_themes" */
export enum DeckThemesConstraint {
  /** unique or primary key constraint on columns "name" */
  DeckThemeNameKey = 'deck_theme_name_key',
  /** unique or primary key constraint on columns "id" */
  DeckThemePkey = 'deck_theme_pkey',
}

/** input type for incrementing numeric columns in table "deck_themes" */
export type DeckThemesIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "deck_themes" */
export type DeckThemesInsertInput = {
  decks?: InputMaybe<DecksArrRelInsertInput>;
  duelRecords?: InputMaybe<DuelRecordsArrRelInsertInput>;
  id?: InputMaybe<Scalars['Int']>;
  mainImgUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nameKana?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DeckThemesMaxFields = {
  __typename?: 'DeckThemesMaxFields';
  id?: Maybe<Scalars['Int']>;
  mainImgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameKana?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DeckThemesMinFields = {
  __typename?: 'DeckThemesMinFields';
  id?: Maybe<Scalars['Int']>;
  mainImgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameKana?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "deck_themes" */
export type DeckThemesMutationResponse = {
  __typename?: 'DeckThemesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DeckThemes>;
};

/** input type for inserting object relation for remote table "deck_themes" */
export type DeckThemesObjRelInsertInput = {
  data: DeckThemesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DeckThemesOnConflict>;
};

/** on_conflict condition type for table "deck_themes" */
export type DeckThemesOnConflict = {
  constraint: DeckThemesConstraint;
  update_columns?: Array<DeckThemesUpdateColumn>;
  where?: InputMaybe<DeckThemesBoolExp>;
};

/** Ordering options when selecting data from "deck_themes". */
export type DeckThemesOrderBy = {
  decks_aggregate?: InputMaybe<DecksAggregateOrderBy>;
  duelRecords_aggregate?: InputMaybe<DuelRecordsAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  mainImgUrl?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameKana?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: deck_themes */
export type DeckThemesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "deck_themes" */
export enum DeckThemesSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  MainImgUrl = 'mainImgUrl',
  /** column name */
  Name = 'name',
  /** column name */
  NameKana = 'nameKana',
}

/** input type for updating data in table "deck_themes" */
export type DeckThemesSetInput = {
  id?: InputMaybe<Scalars['Int']>;
  mainImgUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nameKana?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type DeckThemesStddevFields = {
  __typename?: 'DeckThemesStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type DeckThemesStddevPopFields = {
  __typename?: 'DeckThemesStddevPopFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type DeckThemesStddevSampFields = {
  __typename?: 'DeckThemesStddevSampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type DeckThemesSumFields = {
  __typename?: 'DeckThemesSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "deck_themes" */
export enum DeckThemesUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  MainImgUrl = 'mainImgUrl',
  /** column name */
  Name = 'name',
  /** column name */
  NameKana = 'nameKana',
}

/** aggregate var_pop on columns */
export type DeckThemesVarPopFields = {
  __typename?: 'DeckThemesVarPopFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type DeckThemesVarSampFields = {
  __typename?: 'DeckThemesVarSampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type DeckThemesVarianceFields = {
  __typename?: 'DeckThemesVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "decks" */
export type Decks = {
  __typename?: 'Decks';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  deckTheme: DeckThemes;
  /** An array relationship */
  duelRecords: Array<DuelRecords>;
  /** An aggregate relationship */
  duelRecordsAggregate: DuelRecordsAggregate;
  id: Scalars['Int'];
  memo: Scalars['String'];
  name: Scalars['String'];
  themeId: Scalars['Int'];
  userId: Scalars['String'];
};

/** columns and relationships of "decks" */
export type DecksDuelRecordsArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

/** columns and relationships of "decks" */
export type DecksDuelRecordsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

/** aggregated selection of "decks" */
export type DecksAggregate = {
  __typename?: 'DecksAggregate';
  aggregate?: Maybe<DecksAggregateFields>;
  nodes: Array<Decks>;
};

/** aggregate fields of "decks" */
export type DecksAggregateFields = {
  __typename?: 'DecksAggregateFields';
  avg?: Maybe<DecksAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DecksMaxFields>;
  min?: Maybe<DecksMinFields>;
  stddev?: Maybe<DecksStddevFields>;
  stddevPop?: Maybe<DecksStddevPopFields>;
  stddevSamp?: Maybe<DecksStddevSampFields>;
  sum?: Maybe<DecksSumFields>;
  varPop?: Maybe<DecksVarPopFields>;
  varSamp?: Maybe<DecksVarSampFields>;
  variance?: Maybe<DecksVarianceFields>;
};

/** aggregate fields of "decks" */
export type DecksAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DecksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "decks" */
export type DecksAggregateOrderBy = {
  avg?: InputMaybe<DecksAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DecksMaxOrderBy>;
  min?: InputMaybe<DecksMinOrderBy>;
  stddev?: InputMaybe<DecksStddevOrderBy>;
  stddev_pop?: InputMaybe<DecksStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DecksStddevSampOrderBy>;
  sum?: InputMaybe<DecksSumOrderBy>;
  var_pop?: InputMaybe<DecksVarPopOrderBy>;
  var_samp?: InputMaybe<DecksVarSampOrderBy>;
  variance?: InputMaybe<DecksVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "decks" */
export type DecksArrRelInsertInput = {
  data: Array<DecksInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DecksOnConflict>;
};

/** aggregate avg on columns */
export type DecksAvgFields = {
  __typename?: 'DecksAvgFields';
  id?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "decks" */
export type DecksAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "decks". All fields are combined with a logical 'AND'. */
export type DecksBoolExp = {
  _and?: InputMaybe<Array<DecksBoolExp>>;
  _not?: InputMaybe<DecksBoolExp>;
  _or?: InputMaybe<Array<DecksBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  deckTheme?: InputMaybe<DeckThemesBoolExp>;
  duelRecords?: InputMaybe<DuelRecordsBoolExp>;
  id?: InputMaybe<IntComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  themeId?: InputMaybe<IntComparisonExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "decks" */
export enum DecksConstraint {
  /** unique or primary key constraint on columns "id" */
  DecksPkey = 'decks_pkey',
  /** unique or primary key constraint on columns "name", "user_id" */
  DecksUserIdNameKey = 'decks_user_id_name_key',
}

/** input type for incrementing numeric columns in table "decks" */
export type DecksIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  themeId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "decks" */
export type DecksInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deckTheme?: InputMaybe<DeckThemesObjRelInsertInput>;
  duelRecords?: InputMaybe<DuelRecordsArrRelInsertInput>;
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  themeId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DecksMaxFields = {
  __typename?: 'DecksMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  themeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "decks" */
export type DecksMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DecksMinFields = {
  __typename?: 'DecksMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  themeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "decks" */
export type DecksMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "decks" */
export type DecksMutationResponse = {
  __typename?: 'DecksMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Decks>;
};

/** input type for inserting object relation for remote table "decks" */
export type DecksObjRelInsertInput = {
  data: DecksInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DecksOnConflict>;
};

/** on_conflict condition type for table "decks" */
export type DecksOnConflict = {
  constraint: DecksConstraint;
  update_columns?: Array<DecksUpdateColumn>;
  where?: InputMaybe<DecksBoolExp>;
};

/** Ordering options when selecting data from "decks". */
export type DecksOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  deckTheme?: InputMaybe<DeckThemesOrderBy>;
  duelRecords_aggregate?: InputMaybe<DuelRecordsAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: decks */
export type DecksPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "decks" */
export enum DecksSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  Name = 'name',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "decks" */
export type DecksSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  themeId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type DecksStddevFields = {
  __typename?: 'DecksStddevFields';
  id?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "decks" */
export type DecksStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DecksStddevPopFields = {
  __typename?: 'DecksStddevPopFields';
  id?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "decks" */
export type DecksStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DecksStddevSampFields = {
  __typename?: 'DecksStddevSampFields';
  id?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "decks" */
export type DecksStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type DecksSumFields = {
  __typename?: 'DecksSumFields';
  id?: Maybe<Scalars['Int']>;
  themeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "decks" */
export type DecksSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** update columns of table "decks" */
export enum DecksUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  Name = 'name',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  UserId = 'userId',
}

/** aggregate var_pop on columns */
export type DecksVarPopFields = {
  __typename?: 'DecksVarPopFields';
  id?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "decks" */
export type DecksVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DecksVarSampFields = {
  __typename?: 'DecksVarSampFields';
  id?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "decks" */
export type DecksVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DecksVarianceFields = {
  __typename?: 'DecksVarianceFields';
  id?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "decks" */
export type DecksVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  themeId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "duel_records" */
export type DuelRecords = {
  __typename?: 'DuelRecords';
  /** An object relationship */
  compDeckTheme: DeckThemes;
  compDeckThemeId: Scalars['Int'];
  duelDateTime: Scalars['timestamptz'];
  duelResult: DuelResultTypeEnum;
  /** An array relationship */
  duelResultReasons: Array<DuelResultReasons>;
  /** An aggregate relationship */
  duelResultReasonsAggregate: DuelResultReasonsAggregate;
  /** An object relationship */
  duelResultType: DuelResultType;
  id: Scalars['Int'];
  isFirstTurn: Scalars['Boolean'];
  memo: Scalars['String'];
  /** An object relationship */
  myDeck: Decks;
  myDeckId: Scalars['Int'];
  userId: Scalars['String'];
};

/** columns and relationships of "duel_records" */
export type DuelRecordsDuelResultReasonsArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

/** columns and relationships of "duel_records" */
export type DuelRecordsDuelResultReasonsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

/** aggregated selection of "duel_records" */
export type DuelRecordsAggregate = {
  __typename?: 'DuelRecordsAggregate';
  aggregate?: Maybe<DuelRecordsAggregateFields>;
  nodes: Array<DuelRecords>;
};

/** aggregate fields of "duel_records" */
export type DuelRecordsAggregateFields = {
  __typename?: 'DuelRecordsAggregateFields';
  avg?: Maybe<DuelRecordsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DuelRecordsMaxFields>;
  min?: Maybe<DuelRecordsMinFields>;
  stddev?: Maybe<DuelRecordsStddevFields>;
  stddevPop?: Maybe<DuelRecordsStddevPopFields>;
  stddevSamp?: Maybe<DuelRecordsStddevSampFields>;
  sum?: Maybe<DuelRecordsSumFields>;
  varPop?: Maybe<DuelRecordsVarPopFields>;
  varSamp?: Maybe<DuelRecordsVarSampFields>;
  variance?: Maybe<DuelRecordsVarianceFields>;
};

/** aggregate fields of "duel_records" */
export type DuelRecordsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "duel_records" */
export type DuelRecordsAggregateOrderBy = {
  avg?: InputMaybe<DuelRecordsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DuelRecordsMaxOrderBy>;
  min?: InputMaybe<DuelRecordsMinOrderBy>;
  stddev?: InputMaybe<DuelRecordsStddevOrderBy>;
  stddev_pop?: InputMaybe<DuelRecordsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DuelRecordsStddevSampOrderBy>;
  sum?: InputMaybe<DuelRecordsSumOrderBy>;
  var_pop?: InputMaybe<DuelRecordsVarPopOrderBy>;
  var_samp?: InputMaybe<DuelRecordsVarSampOrderBy>;
  variance?: InputMaybe<DuelRecordsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "duel_records" */
export type DuelRecordsArrRelInsertInput = {
  data: Array<DuelRecordsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DuelRecordsOnConflict>;
};

/** aggregate avg on columns */
export type DuelRecordsAvgFields = {
  __typename?: 'DuelRecordsAvgFields';
  compDeckThemeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  myDeckId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "duel_records" */
export type DuelRecordsAvgOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "duel_records". All fields are combined with a logical 'AND'. */
export type DuelRecordsBoolExp = {
  _and?: InputMaybe<Array<DuelRecordsBoolExp>>;
  _not?: InputMaybe<DuelRecordsBoolExp>;
  _or?: InputMaybe<Array<DuelRecordsBoolExp>>;
  compDeckTheme?: InputMaybe<DeckThemesBoolExp>;
  compDeckThemeId?: InputMaybe<IntComparisonExp>;
  duelDateTime?: InputMaybe<TimestamptzComparisonExp>;
  duelResult?: InputMaybe<DuelresulttypeenumComparisonExp>;
  duelResultReasons?: InputMaybe<DuelResultReasonsBoolExp>;
  duelResultType?: InputMaybe<DuelResultTypeBoolExp>;
  id?: InputMaybe<IntComparisonExp>;
  isFirstTurn?: InputMaybe<BooleanComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  myDeck?: InputMaybe<DecksBoolExp>;
  myDeckId?: InputMaybe<IntComparisonExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "duel_records" */
export enum DuelRecordsConstraint {
  /** unique or primary key constraint on columns "id" */
  DuelRecordsPkey = 'duel_records_pkey',
}

/** input type for incrementing numeric columns in table "duel_records" */
export type DuelRecordsIncInput = {
  compDeckThemeId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  myDeckId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "duel_records" */
export type DuelRecordsInsertInput = {
  compDeckTheme?: InputMaybe<DeckThemesObjRelInsertInput>;
  compDeckThemeId?: InputMaybe<Scalars['Int']>;
  duelDateTime?: InputMaybe<Scalars['timestamptz']>;
  duelResult?: InputMaybe<DuelResultTypeEnum>;
  duelResultReasons?: InputMaybe<DuelResultReasonsArrRelInsertInput>;
  duelResultType?: InputMaybe<DuelResultTypeObjRelInsertInput>;
  id?: InputMaybe<Scalars['Int']>;
  isFirstTurn?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  myDeck?: InputMaybe<DecksObjRelInsertInput>;
  myDeckId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DuelRecordsMaxFields = {
  __typename?: 'DuelRecordsMaxFields';
  compDeckThemeId?: Maybe<Scalars['Int']>;
  duelDateTime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  myDeckId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "duel_records" */
export type DuelRecordsMaxOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  duelDateTime?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DuelRecordsMinFields = {
  __typename?: 'DuelRecordsMinFields';
  compDeckThemeId?: Maybe<Scalars['Int']>;
  duelDateTime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  myDeckId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "duel_records" */
export type DuelRecordsMinOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  duelDateTime?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "duel_records" */
export type DuelRecordsMutationResponse = {
  __typename?: 'DuelRecordsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DuelRecords>;
};

/** input type for inserting object relation for remote table "duel_records" */
export type DuelRecordsObjRelInsertInput = {
  data: DuelRecordsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DuelRecordsOnConflict>;
};

/** on_conflict condition type for table "duel_records" */
export type DuelRecordsOnConflict = {
  constraint: DuelRecordsConstraint;
  update_columns?: Array<DuelRecordsUpdateColumn>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

/** Ordering options when selecting data from "duel_records". */
export type DuelRecordsOrderBy = {
  compDeckTheme?: InputMaybe<DeckThemesOrderBy>;
  compDeckThemeId?: InputMaybe<OrderBy>;
  duelDateTime?: InputMaybe<OrderBy>;
  duelResult?: InputMaybe<OrderBy>;
  duelResultReasons_aggregate?: InputMaybe<DuelResultReasonsAggregateOrderBy>;
  duelResultType?: InputMaybe<DuelResultTypeOrderBy>;
  id?: InputMaybe<OrderBy>;
  isFirstTurn?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  myDeck?: InputMaybe<DecksOrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: duel_records */
export type DuelRecordsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "duel_records" */
export enum DuelRecordsSelectColumn {
  /** column name */
  CompDeckThemeId = 'compDeckThemeId',
  /** column name */
  DuelDateTime = 'duelDateTime',
  /** column name */
  DuelResult = 'duelResult',
  /** column name */
  Id = 'id',
  /** column name */
  IsFirstTurn = 'isFirstTurn',
  /** column name */
  Memo = 'memo',
  /** column name */
  MyDeckId = 'myDeckId',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "duel_records" */
export type DuelRecordsSetInput = {
  compDeckThemeId?: InputMaybe<Scalars['Int']>;
  duelDateTime?: InputMaybe<Scalars['timestamptz']>;
  duelResult?: InputMaybe<DuelResultTypeEnum>;
  id?: InputMaybe<Scalars['Int']>;
  isFirstTurn?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  myDeckId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type DuelRecordsStddevFields = {
  __typename?: 'DuelRecordsStddevFields';
  compDeckThemeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  myDeckId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "duel_records" */
export type DuelRecordsStddevOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DuelRecordsStddevPopFields = {
  __typename?: 'DuelRecordsStddevPopFields';
  compDeckThemeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  myDeckId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "duel_records" */
export type DuelRecordsStddevPopOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DuelRecordsStddevSampFields = {
  __typename?: 'DuelRecordsStddevSampFields';
  compDeckThemeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  myDeckId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "duel_records" */
export type DuelRecordsStddevSampOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type DuelRecordsSumFields = {
  __typename?: 'DuelRecordsSumFields';
  compDeckThemeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  myDeckId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "duel_records" */
export type DuelRecordsSumOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** update columns of table "duel_records" */
export enum DuelRecordsUpdateColumn {
  /** column name */
  CompDeckThemeId = 'compDeckThemeId',
  /** column name */
  DuelDateTime = 'duelDateTime',
  /** column name */
  DuelResult = 'duelResult',
  /** column name */
  Id = 'id',
  /** column name */
  IsFirstTurn = 'isFirstTurn',
  /** column name */
  Memo = 'memo',
  /** column name */
  MyDeckId = 'myDeckId',
  /** column name */
  UserId = 'userId',
}

/** aggregate var_pop on columns */
export type DuelRecordsVarPopFields = {
  __typename?: 'DuelRecordsVarPopFields';
  compDeckThemeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  myDeckId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "duel_records" */
export type DuelRecordsVarPopOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DuelRecordsVarSampFields = {
  __typename?: 'DuelRecordsVarSampFields';
  compDeckThemeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  myDeckId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "duel_records" */
export type DuelRecordsVarSampOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DuelRecordsVarianceFields = {
  __typename?: 'DuelRecordsVarianceFields';
  compDeckThemeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  myDeckId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "duel_records" */
export type DuelRecordsVarianceOrderBy = {
  compDeckThemeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  myDeckId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "duel_result_reason_tags" */
export type DuelResultReasonTags = {
  __typename?: 'DuelResultReasonTags';
  /** An aggregate relationship */
  duelResultReasonsAggregate: DuelResultReasonsAggregate;
  /** An array relationship */
  duel_result_reasons: Array<DuelResultReasons>;
  /** An object relationship */
  duel_result_type: DuelResultType;
  id: Scalars['Int'];
  resultType: DuelResultTypeEnum;
  value: Scalars['String'];
};

/** columns and relationships of "duel_result_reason_tags" */
export type DuelResultReasonTagsDuelResultReasonsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

/** columns and relationships of "duel_result_reason_tags" */
export type DuelResultReasonTagsDuel_Result_ReasonsArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

/** aggregated selection of "duel_result_reason_tags" */
export type DuelResultReasonTagsAggregate = {
  __typename?: 'DuelResultReasonTagsAggregate';
  aggregate?: Maybe<DuelResultReasonTagsAggregateFields>;
  nodes: Array<DuelResultReasonTags>;
};

/** aggregate fields of "duel_result_reason_tags" */
export type DuelResultReasonTagsAggregateFields = {
  __typename?: 'DuelResultReasonTagsAggregateFields';
  avg?: Maybe<DuelResultReasonTagsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DuelResultReasonTagsMaxFields>;
  min?: Maybe<DuelResultReasonTagsMinFields>;
  stddev?: Maybe<DuelResultReasonTagsStddevFields>;
  stddevPop?: Maybe<DuelResultReasonTagsStddevPopFields>;
  stddevSamp?: Maybe<DuelResultReasonTagsStddevSampFields>;
  sum?: Maybe<DuelResultReasonTagsSumFields>;
  varPop?: Maybe<DuelResultReasonTagsVarPopFields>;
  varSamp?: Maybe<DuelResultReasonTagsVarSampFields>;
  variance?: Maybe<DuelResultReasonTagsVarianceFields>;
};

/** aggregate fields of "duel_result_reason_tags" */
export type DuelResultReasonTagsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DuelResultReasonTagsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "duel_result_reason_tags" */
export type DuelResultReasonTagsAggregateOrderBy = {
  avg?: InputMaybe<DuelResultReasonTagsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DuelResultReasonTagsMaxOrderBy>;
  min?: InputMaybe<DuelResultReasonTagsMinOrderBy>;
  stddev?: InputMaybe<DuelResultReasonTagsStddevOrderBy>;
  stddev_pop?: InputMaybe<DuelResultReasonTagsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DuelResultReasonTagsStddevSampOrderBy>;
  sum?: InputMaybe<DuelResultReasonTagsSumOrderBy>;
  var_pop?: InputMaybe<DuelResultReasonTagsVarPopOrderBy>;
  var_samp?: InputMaybe<DuelResultReasonTagsVarSampOrderBy>;
  variance?: InputMaybe<DuelResultReasonTagsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "duel_result_reason_tags" */
export type DuelResultReasonTagsArrRelInsertInput = {
  data: Array<DuelResultReasonTagsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DuelResultReasonTagsOnConflict>;
};

/** aggregate avg on columns */
export type DuelResultReasonTagsAvgFields = {
  __typename?: 'DuelResultReasonTagsAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "duel_result_reason_tags". All fields are combined with a logical 'AND'. */
export type DuelResultReasonTagsBoolExp = {
  _and?: InputMaybe<Array<DuelResultReasonTagsBoolExp>>;
  _not?: InputMaybe<DuelResultReasonTagsBoolExp>;
  _or?: InputMaybe<Array<DuelResultReasonTagsBoolExp>>;
  duel_result_reasons?: InputMaybe<DuelResultReasonsBoolExp>;
  duel_result_type?: InputMaybe<DuelResultTypeBoolExp>;
  id?: InputMaybe<IntComparisonExp>;
  resultType?: InputMaybe<DuelresulttypeenumComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "duel_result_reason_tags" */
export enum DuelResultReasonTagsConstraint {
  /** unique or primary key constraint on columns "id" */
  ResultReasonsPkey = 'result_reasons_pkey',
}

/** input type for incrementing numeric columns in table "duel_result_reason_tags" */
export type DuelResultReasonTagsIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "duel_result_reason_tags" */
export type DuelResultReasonTagsInsertInput = {
  duel_result_reasons?: InputMaybe<DuelResultReasonsArrRelInsertInput>;
  duel_result_type?: InputMaybe<DuelResultTypeObjRelInsertInput>;
  id?: InputMaybe<Scalars['Int']>;
  resultType?: InputMaybe<DuelResultTypeEnum>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DuelResultReasonTagsMaxFields = {
  __typename?: 'DuelResultReasonTagsMaxFields';
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DuelResultReasonTagsMinFields = {
  __typename?: 'DuelResultReasonTagsMinFields';
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "duel_result_reason_tags" */
export type DuelResultReasonTagsMutationResponse = {
  __typename?: 'DuelResultReasonTagsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DuelResultReasonTags>;
};

/** input type for inserting object relation for remote table "duel_result_reason_tags" */
export type DuelResultReasonTagsObjRelInsertInput = {
  data: DuelResultReasonTagsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DuelResultReasonTagsOnConflict>;
};

/** on_conflict condition type for table "duel_result_reason_tags" */
export type DuelResultReasonTagsOnConflict = {
  constraint: DuelResultReasonTagsConstraint;
  update_columns?: Array<DuelResultReasonTagsUpdateColumn>;
  where?: InputMaybe<DuelResultReasonTagsBoolExp>;
};

/** Ordering options when selecting data from "duel_result_reason_tags". */
export type DuelResultReasonTagsOrderBy = {
  duel_result_reasons_aggregate?: InputMaybe<DuelResultReasonsAggregateOrderBy>;
  duel_result_type?: InputMaybe<DuelResultTypeOrderBy>;
  id?: InputMaybe<OrderBy>;
  resultType?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: duel_result_reason_tags */
export type DuelResultReasonTagsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "duel_result_reason_tags" */
export enum DuelResultReasonTagsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ResultType = 'resultType',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "duel_result_reason_tags" */
export type DuelResultReasonTagsSetInput = {
  id?: InputMaybe<Scalars['Int']>;
  resultType?: InputMaybe<DuelResultTypeEnum>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type DuelResultReasonTagsStddevFields = {
  __typename?: 'DuelResultReasonTagsStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DuelResultReasonTagsStddevPopFields = {
  __typename?: 'DuelResultReasonTagsStddevPopFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DuelResultReasonTagsStddevSampFields = {
  __typename?: 'DuelResultReasonTagsStddevSampFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type DuelResultReasonTagsSumFields = {
  __typename?: 'DuelResultReasonTagsSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "duel_result_reason_tags" */
export enum DuelResultReasonTagsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ResultType = 'resultType',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type DuelResultReasonTagsVarPopFields = {
  __typename?: 'DuelResultReasonTagsVarPopFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DuelResultReasonTagsVarSampFields = {
  __typename?: 'DuelResultReasonTagsVarSampFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DuelResultReasonTagsVarianceFields = {
  __typename?: 'DuelResultReasonTagsVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "duel_result_reason_tags" */
export type DuelResultReasonTagsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "duel_result_reasons" */
export type DuelResultReasons = {
  __typename?: 'DuelResultReasons';
  /** An object relationship */
  duel_record: DuelRecords;
  /** An object relationship */
  duel_result_reason_tag: DuelResultReasonTags;
  id: Scalars['Int'];
  recordId: Scalars['Int'];
  resultTagId: Scalars['Int'];
};

/** aggregated selection of "duel_result_reasons" */
export type DuelResultReasonsAggregate = {
  __typename?: 'DuelResultReasonsAggregate';
  aggregate?: Maybe<DuelResultReasonsAggregateFields>;
  nodes: Array<DuelResultReasons>;
};

/** aggregate fields of "duel_result_reasons" */
export type DuelResultReasonsAggregateFields = {
  __typename?: 'DuelResultReasonsAggregateFields';
  avg?: Maybe<DuelResultReasonsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DuelResultReasonsMaxFields>;
  min?: Maybe<DuelResultReasonsMinFields>;
  stddev?: Maybe<DuelResultReasonsStddevFields>;
  stddevPop?: Maybe<DuelResultReasonsStddevPopFields>;
  stddevSamp?: Maybe<DuelResultReasonsStddevSampFields>;
  sum?: Maybe<DuelResultReasonsSumFields>;
  varPop?: Maybe<DuelResultReasonsVarPopFields>;
  varSamp?: Maybe<DuelResultReasonsVarSampFields>;
  variance?: Maybe<DuelResultReasonsVarianceFields>;
};

/** aggregate fields of "duel_result_reasons" */
export type DuelResultReasonsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "duel_result_reasons" */
export type DuelResultReasonsAggregateOrderBy = {
  avg?: InputMaybe<DuelResultReasonsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DuelResultReasonsMaxOrderBy>;
  min?: InputMaybe<DuelResultReasonsMinOrderBy>;
  stddev?: InputMaybe<DuelResultReasonsStddevOrderBy>;
  stddev_pop?: InputMaybe<DuelResultReasonsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DuelResultReasonsStddevSampOrderBy>;
  sum?: InputMaybe<DuelResultReasonsSumOrderBy>;
  var_pop?: InputMaybe<DuelResultReasonsVarPopOrderBy>;
  var_samp?: InputMaybe<DuelResultReasonsVarSampOrderBy>;
  variance?: InputMaybe<DuelResultReasonsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "duel_result_reasons" */
export type DuelResultReasonsArrRelInsertInput = {
  data: Array<DuelResultReasonsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DuelResultReasonsOnConflict>;
};

/** aggregate avg on columns */
export type DuelResultReasonsAvgFields = {
  __typename?: 'DuelResultReasonsAvgFields';
  id?: Maybe<Scalars['Float']>;
  recordId?: Maybe<Scalars['Float']>;
  resultTagId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "duel_result_reasons" */
export type DuelResultReasonsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "duel_result_reasons". All fields are combined with a logical 'AND'. */
export type DuelResultReasonsBoolExp = {
  _and?: InputMaybe<Array<DuelResultReasonsBoolExp>>;
  _not?: InputMaybe<DuelResultReasonsBoolExp>;
  _or?: InputMaybe<Array<DuelResultReasonsBoolExp>>;
  duel_record?: InputMaybe<DuelRecordsBoolExp>;
  duel_result_reason_tag?: InputMaybe<DuelResultReasonTagsBoolExp>;
  id?: InputMaybe<IntComparisonExp>;
  recordId?: InputMaybe<IntComparisonExp>;
  resultTagId?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "duel_result_reasons" */
export enum DuelResultReasonsConstraint {
  /** unique or primary key constraint on columns "record_id", "result_tag_id" */
  DuelResultReasonsDuelIdResultTagIdKey = 'duel_result_reasons_duel_id_result_tag_id_key',
  /** unique or primary key constraint on columns "id" */
  DuelResultReasonsPkey = 'duel_result_reasons_pkey',
}

/** input type for incrementing numeric columns in table "duel_result_reasons" */
export type DuelResultReasonsIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  recordId?: InputMaybe<Scalars['Int']>;
  resultTagId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "duel_result_reasons" */
export type DuelResultReasonsInsertInput = {
  duel_record?: InputMaybe<DuelRecordsObjRelInsertInput>;
  duel_result_reason_tag?: InputMaybe<DuelResultReasonTagsObjRelInsertInput>;
  id?: InputMaybe<Scalars['Int']>;
  recordId?: InputMaybe<Scalars['Int']>;
  resultTagId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type DuelResultReasonsMaxFields = {
  __typename?: 'DuelResultReasonsMaxFields';
  id?: Maybe<Scalars['Int']>;
  recordId?: Maybe<Scalars['Int']>;
  resultTagId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "duel_result_reasons" */
export type DuelResultReasonsMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DuelResultReasonsMinFields = {
  __typename?: 'DuelResultReasonsMinFields';
  id?: Maybe<Scalars['Int']>;
  recordId?: Maybe<Scalars['Int']>;
  resultTagId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "duel_result_reasons" */
export type DuelResultReasonsMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "duel_result_reasons" */
export type DuelResultReasonsMutationResponse = {
  __typename?: 'DuelResultReasonsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DuelResultReasons>;
};

/** on_conflict condition type for table "duel_result_reasons" */
export type DuelResultReasonsOnConflict = {
  constraint: DuelResultReasonsConstraint;
  update_columns?: Array<DuelResultReasonsUpdateColumn>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

/** Ordering options when selecting data from "duel_result_reasons". */
export type DuelResultReasonsOrderBy = {
  duel_record?: InputMaybe<DuelRecordsOrderBy>;
  duel_result_reason_tag?: InputMaybe<DuelResultReasonTagsOrderBy>;
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: duel_result_reasons */
export type DuelResultReasonsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "duel_result_reasons" */
export enum DuelResultReasonsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  RecordId = 'recordId',
  /** column name */
  ResultTagId = 'resultTagId',
}

/** input type for updating data in table "duel_result_reasons" */
export type DuelResultReasonsSetInput = {
  id?: InputMaybe<Scalars['Int']>;
  recordId?: InputMaybe<Scalars['Int']>;
  resultTagId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type DuelResultReasonsStddevFields = {
  __typename?: 'DuelResultReasonsStddevFields';
  id?: Maybe<Scalars['Float']>;
  recordId?: Maybe<Scalars['Float']>;
  resultTagId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "duel_result_reasons" */
export type DuelResultReasonsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DuelResultReasonsStddevPopFields = {
  __typename?: 'DuelResultReasonsStddevPopFields';
  id?: Maybe<Scalars['Float']>;
  recordId?: Maybe<Scalars['Float']>;
  resultTagId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "duel_result_reasons" */
export type DuelResultReasonsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DuelResultReasonsStddevSampFields = {
  __typename?: 'DuelResultReasonsStddevSampFields';
  id?: Maybe<Scalars['Float']>;
  recordId?: Maybe<Scalars['Float']>;
  resultTagId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "duel_result_reasons" */
export type DuelResultReasonsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type DuelResultReasonsSumFields = {
  __typename?: 'DuelResultReasonsSumFields';
  id?: Maybe<Scalars['Int']>;
  recordId?: Maybe<Scalars['Int']>;
  resultTagId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "duel_result_reasons" */
export type DuelResultReasonsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** update columns of table "duel_result_reasons" */
export enum DuelResultReasonsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  RecordId = 'recordId',
  /** column name */
  ResultTagId = 'resultTagId',
}

/** aggregate var_pop on columns */
export type DuelResultReasonsVarPopFields = {
  __typename?: 'DuelResultReasonsVarPopFields';
  id?: Maybe<Scalars['Float']>;
  recordId?: Maybe<Scalars['Float']>;
  resultTagId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "duel_result_reasons" */
export type DuelResultReasonsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DuelResultReasonsVarSampFields = {
  __typename?: 'DuelResultReasonsVarSampFields';
  id?: Maybe<Scalars['Float']>;
  recordId?: Maybe<Scalars['Float']>;
  resultTagId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "duel_result_reasons" */
export type DuelResultReasonsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DuelResultReasonsVarianceFields = {
  __typename?: 'DuelResultReasonsVarianceFields';
  id?: Maybe<Scalars['Float']>;
  recordId?: Maybe<Scalars['Float']>;
  resultTagId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "duel_result_reasons" */
export type DuelResultReasonsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
  resultTagId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "duel_result_type" */
export type DuelResultType = {
  __typename?: 'DuelResultType';
  /** An aggregate relationship */
  duelRecordsAggregate: DuelRecordsAggregate;
  /** An aggregate relationship */
  duelResultReasonTagsAggregate: DuelResultReasonTagsAggregate;
  /** An array relationship */
  duel_records: Array<DuelRecords>;
  /** An array relationship */
  duel_result_reason_tags: Array<DuelResultReasonTags>;
  value: Scalars['String'];
};

/** columns and relationships of "duel_result_type" */
export type DuelResultTypeDuelRecordsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

/** columns and relationships of "duel_result_type" */
export type DuelResultTypeDuelResultReasonTagsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonTagsOrderBy>>;
  where?: InputMaybe<DuelResultReasonTagsBoolExp>;
};

/** columns and relationships of "duel_result_type" */
export type DuelResultTypeDuel_RecordsArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

/** columns and relationships of "duel_result_type" */
export type DuelResultTypeDuel_Result_Reason_TagsArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonTagsOrderBy>>;
  where?: InputMaybe<DuelResultReasonTagsBoolExp>;
};

/** aggregated selection of "duel_result_type" */
export type DuelResultTypeAggregate = {
  __typename?: 'DuelResultTypeAggregate';
  aggregate?: Maybe<DuelResultTypeAggregateFields>;
  nodes: Array<DuelResultType>;
};

/** aggregate fields of "duel_result_type" */
export type DuelResultTypeAggregateFields = {
  __typename?: 'DuelResultTypeAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<DuelResultTypeMaxFields>;
  min?: Maybe<DuelResultTypeMinFields>;
};

/** aggregate fields of "duel_result_type" */
export type DuelResultTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DuelResultTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "duel_result_type". All fields are combined with a logical 'AND'. */
export type DuelResultTypeBoolExp = {
  _and?: InputMaybe<Array<DuelResultTypeBoolExp>>;
  _not?: InputMaybe<DuelResultTypeBoolExp>;
  _or?: InputMaybe<Array<DuelResultTypeBoolExp>>;
  duel_records?: InputMaybe<DuelRecordsBoolExp>;
  duel_result_reason_tags?: InputMaybe<DuelResultReasonTagsBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "duel_result_type" */
export enum DuelResultTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  DuelResultEnumPkey = 'duel_result_enum_pkey',
}

export enum DuelResultTypeEnum {
  Draw = 'DRAW',
  Lose = 'LOSE',
  Win = 'WIN',
}

/** input type for inserting data into table "duel_result_type" */
export type DuelResultTypeInsertInput = {
  duel_records?: InputMaybe<DuelRecordsArrRelInsertInput>;
  duel_result_reason_tags?: InputMaybe<DuelResultReasonTagsArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DuelResultTypeMaxFields = {
  __typename?: 'DuelResultTypeMaxFields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DuelResultTypeMinFields = {
  __typename?: 'DuelResultTypeMinFields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "duel_result_type" */
export type DuelResultTypeMutationResponse = {
  __typename?: 'DuelResultTypeMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DuelResultType>;
};

/** input type for inserting object relation for remote table "duel_result_type" */
export type DuelResultTypeObjRelInsertInput = {
  data: DuelResultTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DuelResultTypeOnConflict>;
};

/** on_conflict condition type for table "duel_result_type" */
export type DuelResultTypeOnConflict = {
  constraint: DuelResultTypeConstraint;
  update_columns?: Array<DuelResultTypeUpdateColumn>;
  where?: InputMaybe<DuelResultTypeBoolExp>;
};

/** Ordering options when selecting data from "duel_result_type". */
export type DuelResultTypeOrderBy = {
  duel_records_aggregate?: InputMaybe<DuelRecordsAggregateOrderBy>;
  duel_result_reason_tags_aggregate?: InputMaybe<DuelResultReasonTagsAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: duel_result_type */
export type DuelResultTypePkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "duel_result_type" */
export enum DuelResultTypeSelectColumn {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "duel_result_type" */
export type DuelResultTypeSetInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "duel_result_type" */
export enum DuelResultTypeUpdateColumn {
  /** column name */
  Value = 'value',
}

/** Boolean expression to compare columns of type "DuelResultTypeEnum". All fields are combined with logical 'AND'. */
export type DuelresulttypeenumComparisonExp = {
  _eq?: InputMaybe<DuelResultTypeEnum>;
  _in?: InputMaybe<Array<DuelResultTypeEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<DuelResultTypeEnum>;
  _nin?: InputMaybe<Array<DuelResultTypeEnum>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Int_Cast_Exp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** columns and relationships of "memos" */
export type Memos = {
  __typename?: 'Memos';
  memo: Scalars['String'];
};

/** aggregated selection of "memos" */
export type MemosAggregate = {
  __typename?: 'MemosAggregate';
  aggregate?: Maybe<MemosAggregateFields>;
  nodes: Array<Memos>;
};

/** aggregate fields of "memos" */
export type MemosAggregateFields = {
  __typename?: 'MemosAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<MemosMaxFields>;
  min?: Maybe<MemosMinFields>;
};

/** aggregate fields of "memos" */
export type MemosAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MemosSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "memos". All fields are combined with a logical 'AND'. */
export type MemosBoolExp = {
  _and?: InputMaybe<Array<MemosBoolExp>>;
  _not?: InputMaybe<MemosBoolExp>;
  _or?: InputMaybe<Array<MemosBoolExp>>;
  memo?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "memos" */
export enum MemosConstraint {
  /** unique or primary key constraint on columns "memo" */
  MemoPkey = 'Memo_pkey',
}

/** input type for inserting data into table "memos" */
export type MemosInsertInput = {
  memo?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type MemosMaxFields = {
  __typename?: 'MemosMaxFields';
  memo?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type MemosMinFields = {
  __typename?: 'MemosMinFields';
  memo?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "memos" */
export type MemosMutationResponse = {
  __typename?: 'MemosMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Memos>;
};

/** on_conflict condition type for table "memos" */
export type MemosOnConflict = {
  constraint: MemosConstraint;
  update_columns?: Array<MemosUpdateColumn>;
  where?: InputMaybe<MemosBoolExp>;
};

/** Ordering options when selecting data from "memos". */
export type MemosOrderBy = {
  memo?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: memos */
export type MemosPkColumnsInput = {
  memo: Scalars['String'];
};

/** select columns of table "memos" */
export enum MemosSelectColumn {
  /** column name */
  Memo = 'memo',
}

/** input type for updating data in table "memos" */
export type MemosSetInput = {
  memo?: InputMaybe<Scalars['String']>;
};

/** update columns of table "memos" */
export enum MemosUpdateColumn {
  /** column name */
  Memo = 'memo',
}

/** columns and relationships of "seasons" */
export type Seasons = {
  __typename?: 'Seasons';
  id: Scalars['Int'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  startDateTime: Scalars['timestamptz'];
};

/** aggregated selection of "seasons" */
export type SeasonsAggregate = {
  __typename?: 'SeasonsAggregate';
  aggregate?: Maybe<SeasonsAggregateFields>;
  nodes: Array<Seasons>;
};

/** aggregate fields of "seasons" */
export type SeasonsAggregateFields = {
  __typename?: 'SeasonsAggregateFields';
  avg?: Maybe<SeasonsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<SeasonsMaxFields>;
  min?: Maybe<SeasonsMinFields>;
  stddev?: Maybe<SeasonsStddevFields>;
  stddevPop?: Maybe<SeasonsStddevPopFields>;
  stddevSamp?: Maybe<SeasonsStddevSampFields>;
  sum?: Maybe<SeasonsSumFields>;
  varPop?: Maybe<SeasonsVarPopFields>;
  varSamp?: Maybe<SeasonsVarSampFields>;
  variance?: Maybe<SeasonsVarianceFields>;
};

/** aggregate fields of "seasons" */
export type SeasonsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SeasonsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type SeasonsAvgFields = {
  __typename?: 'SeasonsAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "seasons". All fields are combined with a logical 'AND'. */
export type SeasonsBoolExp = {
  _and?: InputMaybe<Array<SeasonsBoolExp>>;
  _not?: InputMaybe<SeasonsBoolExp>;
  _or?: InputMaybe<Array<SeasonsBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  note?: InputMaybe<StringComparisonExp>;
  startDateTime?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "seasons" */
export enum SeasonsConstraint {
  /** unique or primary key constraint on columns "id" */
  SeasonsPkey = 'seasons_pkey',
  /** unique or primary key constraint on columns "start_date_time" */
  SeasonsStartDateTimeKey = 'seasons_start_date_time_key',
}

/** input type for incrementing numeric columns in table "seasons" */
export type SeasonsIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "seasons" */
export type SeasonsInsertInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  startDateTime?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type SeasonsMaxFields = {
  __typename?: 'SeasonsMaxFields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type SeasonsMinFields = {
  __typename?: 'SeasonsMinFields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "seasons" */
export type SeasonsMutationResponse = {
  __typename?: 'SeasonsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Seasons>;
};

/** on_conflict condition type for table "seasons" */
export type SeasonsOnConflict = {
  constraint: SeasonsConstraint;
  update_columns?: Array<SeasonsUpdateColumn>;
  where?: InputMaybe<SeasonsBoolExp>;
};

/** Ordering options when selecting data from "seasons". */
export type SeasonsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  note?: InputMaybe<OrderBy>;
  startDateTime?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: seasons */
export type SeasonsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "seasons" */
export enum SeasonsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  StartDateTime = 'startDateTime',
}

/** input type for updating data in table "seasons" */
export type SeasonsSetInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  startDateTime?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type SeasonsStddevFields = {
  __typename?: 'SeasonsStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type SeasonsStddevPopFields = {
  __typename?: 'SeasonsStddevPopFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type SeasonsStddevSampFields = {
  __typename?: 'SeasonsStddevSampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type SeasonsSumFields = {
  __typename?: 'SeasonsSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "seasons" */
export enum SeasonsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  StartDateTime = 'startDateTime',
}

/** aggregate var_pop on columns */
export type SeasonsVarPopFields = {
  __typename?: 'SeasonsVarPopFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type SeasonsVarSampFields = {
  __typename?: 'SeasonsVarSampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type SeasonsVarianceFields = {
  __typename?: 'SeasonsVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "deck_themes" */
  deleteDeckThemes?: Maybe<DeckThemesMutationResponse>;
  /** delete single row from the table: "deck_themes" */
  deleteDeckThemesByPk?: Maybe<DeckThemes>;
  /** delete data from the table: "decks" */
  deleteDecks?: Maybe<DecksMutationResponse>;
  /** delete single row from the table: "decks" */
  deleteDecksByPk?: Maybe<Decks>;
  /** delete data from the table: "duel_records" */
  deleteDuelRecords?: Maybe<DuelRecordsMutationResponse>;
  /** delete single row from the table: "duel_records" */
  deleteDuelRecordsByPk?: Maybe<DuelRecords>;
  /** delete data from the table: "duel_result_reason_tags" */
  deleteDuelResultReasonTags?: Maybe<DuelResultReasonTagsMutationResponse>;
  /** delete single row from the table: "duel_result_reason_tags" */
  deleteDuelResultReasonTagsByPk?: Maybe<DuelResultReasonTags>;
  /** delete data from the table: "duel_result_reasons" */
  deleteDuelResultReasons?: Maybe<DuelResultReasonsMutationResponse>;
  /** delete single row from the table: "duel_result_reasons" */
  deleteDuelResultReasonsByPk?: Maybe<DuelResultReasons>;
  /** delete data from the table: "duel_result_type" */
  deleteDuelResultType?: Maybe<DuelResultTypeMutationResponse>;
  /** delete single row from the table: "duel_result_type" */
  deleteDuelResultTypeByPk?: Maybe<DuelResultType>;
  /** delete data from the table: "memos" */
  deleteMemos?: Maybe<MemosMutationResponse>;
  /** delete single row from the table: "memos" */
  deleteMemosByPk?: Maybe<Memos>;
  /** delete data from the table: "seasons" */
  deleteSeasons?: Maybe<SeasonsMutationResponse>;
  /** delete single row from the table: "seasons" */
  deleteSeasonsByPk?: Maybe<Seasons>;
  /** insert data into the table: "deck_themes" */
  insertDeckThemes?: Maybe<DeckThemesMutationResponse>;
  /** insert a single row into the table: "deck_themes" */
  insertDeckThemesOne?: Maybe<DeckThemes>;
  /** insert data into the table: "decks" */
  insertDecks?: Maybe<DecksMutationResponse>;
  /** insert a single row into the table: "decks" */
  insertDecksOne?: Maybe<Decks>;
  /** insert data into the table: "duel_records" */
  insertDuelRecords?: Maybe<DuelRecordsMutationResponse>;
  /** insert a single row into the table: "duel_records" */
  insertDuelRecordsOne?: Maybe<DuelRecords>;
  /** insert data into the table: "duel_result_reason_tags" */
  insertDuelResultReasonTags?: Maybe<DuelResultReasonTagsMutationResponse>;
  /** insert a single row into the table: "duel_result_reason_tags" */
  insertDuelResultReasonTagsOne?: Maybe<DuelResultReasonTags>;
  /** insert data into the table: "duel_result_reasons" */
  insertDuelResultReasons?: Maybe<DuelResultReasonsMutationResponse>;
  /** insert a single row into the table: "duel_result_reasons" */
  insertDuelResultReasonsOne?: Maybe<DuelResultReasons>;
  /** insert data into the table: "duel_result_type" */
  insertDuelResultType?: Maybe<DuelResultTypeMutationResponse>;
  /** insert a single row into the table: "duel_result_type" */
  insertDuelResultTypeOne?: Maybe<DuelResultType>;
  /** insert data into the table: "memos" */
  insertMemos?: Maybe<MemosMutationResponse>;
  /** insert a single row into the table: "memos" */
  insertMemosOne?: Maybe<Memos>;
  /** insert data into the table: "seasons" */
  insertSeasons?: Maybe<SeasonsMutationResponse>;
  /** insert a single row into the table: "seasons" */
  insertSeasonsOne?: Maybe<Seasons>;
  /** update data of the table: "deck_themes" */
  updateDeckThemes?: Maybe<DeckThemesMutationResponse>;
  /** update single row of the table: "deck_themes" */
  updateDeckThemesByPk?: Maybe<DeckThemes>;
  /** update data of the table: "decks" */
  updateDecks?: Maybe<DecksMutationResponse>;
  /** update single row of the table: "decks" */
  updateDecksByPk?: Maybe<Decks>;
  /** update data of the table: "duel_records" */
  updateDuelRecords?: Maybe<DuelRecordsMutationResponse>;
  /** update single row of the table: "duel_records" */
  updateDuelRecordsByPk?: Maybe<DuelRecords>;
  /** update data of the table: "duel_result_reason_tags" */
  updateDuelResultReasonTags?: Maybe<DuelResultReasonTagsMutationResponse>;
  /** update single row of the table: "duel_result_reason_tags" */
  updateDuelResultReasonTagsByPk?: Maybe<DuelResultReasonTags>;
  /** update data of the table: "duel_result_reasons" */
  updateDuelResultReasons?: Maybe<DuelResultReasonsMutationResponse>;
  /** update single row of the table: "duel_result_reasons" */
  updateDuelResultReasonsByPk?: Maybe<DuelResultReasons>;
  /** update data of the table: "duel_result_type" */
  updateDuelResultType?: Maybe<DuelResultTypeMutationResponse>;
  /** update single row of the table: "duel_result_type" */
  updateDuelResultTypeByPk?: Maybe<DuelResultType>;
  /** update data of the table: "memos" */
  updateMemos?: Maybe<MemosMutationResponse>;
  /** update single row of the table: "memos" */
  updateMemosByPk?: Maybe<Memos>;
  /** update data of the table: "seasons" */
  updateSeasons?: Maybe<SeasonsMutationResponse>;
  /** update single row of the table: "seasons" */
  updateSeasonsByPk?: Maybe<Seasons>;
};

/** mutation root */
export type Mutation_RootDeleteDeckThemesArgs = {
  where: DeckThemesBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDeckThemesByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDeleteDecksArgs = {
  where: DecksBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDecksByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDeleteDuelRecordsArgs = {
  where: DuelRecordsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDuelRecordsByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDeleteDuelResultReasonTagsArgs = {
  where: DuelResultReasonTagsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDuelResultReasonTagsByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDeleteDuelResultReasonsArgs = {
  where: DuelResultReasonsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDuelResultReasonsByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDeleteDuelResultTypeArgs = {
  where: DuelResultTypeBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDuelResultTypeByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDeleteMemosArgs = {
  where: MemosBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteMemosByPkArgs = {
  memo: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDeleteSeasonsArgs = {
  where: SeasonsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteSeasonsByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootInsertDeckThemesArgs = {
  objects: Array<DeckThemesInsertInput>;
  onConflict?: InputMaybe<DeckThemesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDeckThemesOneArgs = {
  object: DeckThemesInsertInput;
  onConflict?: InputMaybe<DeckThemesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDecksArgs = {
  objects: Array<DecksInsertInput>;
  onConflict?: InputMaybe<DecksOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDecksOneArgs = {
  object: DecksInsertInput;
  onConflict?: InputMaybe<DecksOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelRecordsArgs = {
  objects: Array<DuelRecordsInsertInput>;
  onConflict?: InputMaybe<DuelRecordsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelRecordsOneArgs = {
  object: DuelRecordsInsertInput;
  onConflict?: InputMaybe<DuelRecordsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelResultReasonTagsArgs = {
  objects: Array<DuelResultReasonTagsInsertInput>;
  onConflict?: InputMaybe<DuelResultReasonTagsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelResultReasonTagsOneArgs = {
  object: DuelResultReasonTagsInsertInput;
  onConflict?: InputMaybe<DuelResultReasonTagsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelResultReasonsArgs = {
  objects: Array<DuelResultReasonsInsertInput>;
  onConflict?: InputMaybe<DuelResultReasonsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelResultReasonsOneArgs = {
  object: DuelResultReasonsInsertInput;
  onConflict?: InputMaybe<DuelResultReasonsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelResultTypeArgs = {
  objects: Array<DuelResultTypeInsertInput>;
  onConflict?: InputMaybe<DuelResultTypeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDuelResultTypeOneArgs = {
  object: DuelResultTypeInsertInput;
  onConflict?: InputMaybe<DuelResultTypeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertMemosArgs = {
  objects: Array<MemosInsertInput>;
  onConflict?: InputMaybe<MemosOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertMemosOneArgs = {
  object: MemosInsertInput;
  onConflict?: InputMaybe<MemosOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSeasonsArgs = {
  objects: Array<SeasonsInsertInput>;
  onConflict?: InputMaybe<SeasonsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSeasonsOneArgs = {
  object: SeasonsInsertInput;
  onConflict?: InputMaybe<SeasonsOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdateDeckThemesArgs = {
  _inc?: InputMaybe<DeckThemesIncInput>;
  _set?: InputMaybe<DeckThemesSetInput>;
  where: DeckThemesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDeckThemesByPkArgs = {
  _inc?: InputMaybe<DeckThemesIncInput>;
  _set?: InputMaybe<DeckThemesSetInput>;
  pk_columns: DeckThemesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDecksArgs = {
  _inc?: InputMaybe<DecksIncInput>;
  _set?: InputMaybe<DecksSetInput>;
  where: DecksBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDecksByPkArgs = {
  _inc?: InputMaybe<DecksIncInput>;
  _set?: InputMaybe<DecksSetInput>;
  pk_columns: DecksPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDuelRecordsArgs = {
  _inc?: InputMaybe<DuelRecordsIncInput>;
  _set?: InputMaybe<DuelRecordsSetInput>;
  where: DuelRecordsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDuelRecordsByPkArgs = {
  _inc?: InputMaybe<DuelRecordsIncInput>;
  _set?: InputMaybe<DuelRecordsSetInput>;
  pk_columns: DuelRecordsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDuelResultReasonTagsArgs = {
  _inc?: InputMaybe<DuelResultReasonTagsIncInput>;
  _set?: InputMaybe<DuelResultReasonTagsSetInput>;
  where: DuelResultReasonTagsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDuelResultReasonTagsByPkArgs = {
  _inc?: InputMaybe<DuelResultReasonTagsIncInput>;
  _set?: InputMaybe<DuelResultReasonTagsSetInput>;
  pk_columns: DuelResultReasonTagsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDuelResultReasonsArgs = {
  _inc?: InputMaybe<DuelResultReasonsIncInput>;
  _set?: InputMaybe<DuelResultReasonsSetInput>;
  where: DuelResultReasonsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDuelResultReasonsByPkArgs = {
  _inc?: InputMaybe<DuelResultReasonsIncInput>;
  _set?: InputMaybe<DuelResultReasonsSetInput>;
  pk_columns: DuelResultReasonsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDuelResultTypeArgs = {
  _set?: InputMaybe<DuelResultTypeSetInput>;
  where: DuelResultTypeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDuelResultTypeByPkArgs = {
  _set?: InputMaybe<DuelResultTypeSetInput>;
  pk_columns: DuelResultTypePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateMemosArgs = {
  _set?: InputMaybe<MemosSetInput>;
  where: MemosBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateMemosByPkArgs = {
  _set?: InputMaybe<MemosSetInput>;
  pk_columns: MemosPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateSeasonsArgs = {
  _inc?: InputMaybe<SeasonsIncInput>;
  _set?: InputMaybe<SeasonsSetInput>;
  where: SeasonsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateSeasonsByPkArgs = {
  _inc?: InputMaybe<SeasonsIncInput>;
  _set?: InputMaybe<SeasonsSetInput>;
  pk_columns: SeasonsPkColumnsInput;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ascNullsFirst',
  /** in ascending order, nulls last */
  AscNullsLast = 'ascNullsLast',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'descNullsFirst',
  /** in descending order, nulls last */
  DescNullsLast = 'descNullsLast',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "deck_themes" */
  deckThemes: Array<DeckThemes>;
  /** fetch aggregated fields from the table: "deck_themes" */
  deckThemesAggregate: DeckThemesAggregate;
  /** fetch data from the table: "deck_themes" using primary key columns */
  deckThemesByPk?: Maybe<DeckThemes>;
  /** An array relationship */
  decks: Array<Decks>;
  /** An aggregate relationship */
  decksAggregate: DecksAggregate;
  /** fetch data from the table: "decks" using primary key columns */
  decksByPk?: Maybe<Decks>;
  /** An array relationship */
  duelRecords: Array<DuelRecords>;
  /** An aggregate relationship */
  duelRecordsAggregate: DuelRecordsAggregate;
  /** fetch data from the table: "duel_records" using primary key columns */
  duelRecordsByPk?: Maybe<DuelRecords>;
  /** fetch data from the table: "duel_result_reason_tags" */
  duelResultReasonTags: Array<DuelResultReasonTags>;
  /** An aggregate relationship */
  duelResultReasonTagsAggregate: DuelResultReasonTagsAggregate;
  /** fetch data from the table: "duel_result_reason_tags" using primary key columns */
  duelResultReasonTagsByPk?: Maybe<DuelResultReasonTags>;
  /** An array relationship */
  duelResultReasons: Array<DuelResultReasons>;
  /** An aggregate relationship */
  duelResultReasonsAggregate: DuelResultReasonsAggregate;
  /** fetch data from the table: "duel_result_reasons" using primary key columns */
  duelResultReasonsByPk?: Maybe<DuelResultReasons>;
  /** fetch data from the table: "duel_result_type" */
  duelResultType: Array<DuelResultType>;
  /** fetch aggregated fields from the table: "duel_result_type" */
  duelResultTypeAggregate: DuelResultTypeAggregate;
  /** fetch data from the table: "duel_result_type" using primary key columns */
  duelResultTypeByPk?: Maybe<DuelResultType>;
  /** fetch data from the table: "memos" */
  memos: Array<Memos>;
  /** fetch aggregated fields from the table: "memos" */
  memosAggregate: MemosAggregate;
  /** fetch data from the table: "memos" using primary key columns */
  memosByPk?: Maybe<Memos>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasonsAggregate: SeasonsAggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasonsByPk?: Maybe<Seasons>;
};

export type Query_RootDeckThemesArgs = {
  distinctOn?: InputMaybe<Array<DeckThemesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeckThemesOrderBy>>;
  where?: InputMaybe<DeckThemesBoolExp>;
};

export type Query_RootDeckThemesAggregateArgs = {
  distinctOn?: InputMaybe<Array<DeckThemesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeckThemesOrderBy>>;
  where?: InputMaybe<DeckThemesBoolExp>;
};

export type Query_RootDeckThemesByPkArgs = {
  id: Scalars['Int'];
};

export type Query_RootDecksArgs = {
  distinctOn?: InputMaybe<Array<DecksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DecksOrderBy>>;
  where?: InputMaybe<DecksBoolExp>;
};

export type Query_RootDecksAggregateArgs = {
  distinctOn?: InputMaybe<Array<DecksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DecksOrderBy>>;
  where?: InputMaybe<DecksBoolExp>;
};

export type Query_RootDecksByPkArgs = {
  id: Scalars['Int'];
};

export type Query_RootDuelRecordsArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

export type Query_RootDuelRecordsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

export type Query_RootDuelRecordsByPkArgs = {
  id: Scalars['Int'];
};

export type Query_RootDuelResultReasonTagsArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonTagsOrderBy>>;
  where?: InputMaybe<DuelResultReasonTagsBoolExp>;
};

export type Query_RootDuelResultReasonTagsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonTagsOrderBy>>;
  where?: InputMaybe<DuelResultReasonTagsBoolExp>;
};

export type Query_RootDuelResultReasonTagsByPkArgs = {
  id: Scalars['Int'];
};

export type Query_RootDuelResultReasonsArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

export type Query_RootDuelResultReasonsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

export type Query_RootDuelResultReasonsByPkArgs = {
  id: Scalars['Int'];
};

export type Query_RootDuelResultTypeArgs = {
  distinctOn?: InputMaybe<Array<DuelResultTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultTypeOrderBy>>;
  where?: InputMaybe<DuelResultTypeBoolExp>;
};

export type Query_RootDuelResultTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultTypeOrderBy>>;
  where?: InputMaybe<DuelResultTypeBoolExp>;
};

export type Query_RootDuelResultTypeByPkArgs = {
  value: Scalars['String'];
};

export type Query_RootMemosArgs = {
  distinctOn?: InputMaybe<Array<MemosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MemosOrderBy>>;
  where?: InputMaybe<MemosBoolExp>;
};

export type Query_RootMemosAggregateArgs = {
  distinctOn?: InputMaybe<Array<MemosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MemosOrderBy>>;
  where?: InputMaybe<MemosBoolExp>;
};

export type Query_RootMemosByPkArgs = {
  memo: Scalars['String'];
};

export type Query_RootSeasonsArgs = {
  distinctOn?: InputMaybe<Array<SeasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SeasonsOrderBy>>;
  where?: InputMaybe<SeasonsBoolExp>;
};

export type Query_RootSeasonsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SeasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SeasonsOrderBy>>;
  where?: InputMaybe<SeasonsBoolExp>;
};

export type Query_RootSeasonsByPkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "deck_themes" */
  deckThemes: Array<DeckThemes>;
  /** fetch aggregated fields from the table: "deck_themes" */
  deckThemesAggregate: DeckThemesAggregate;
  /** fetch data from the table: "deck_themes" using primary key columns */
  deckThemesByPk?: Maybe<DeckThemes>;
  /** An array relationship */
  decks: Array<Decks>;
  /** An aggregate relationship */
  decksAggregate: DecksAggregate;
  /** fetch data from the table: "decks" using primary key columns */
  decksByPk?: Maybe<Decks>;
  /** An array relationship */
  duelRecords: Array<DuelRecords>;
  /** An aggregate relationship */
  duelRecordsAggregate: DuelRecordsAggregate;
  /** fetch data from the table: "duel_records" using primary key columns */
  duelRecordsByPk?: Maybe<DuelRecords>;
  /** fetch data from the table: "duel_result_reason_tags" */
  duelResultReasonTags: Array<DuelResultReasonTags>;
  /** An aggregate relationship */
  duelResultReasonTagsAggregate: DuelResultReasonTagsAggregate;
  /** fetch data from the table: "duel_result_reason_tags" using primary key columns */
  duelResultReasonTagsByPk?: Maybe<DuelResultReasonTags>;
  /** An array relationship */
  duelResultReasons: Array<DuelResultReasons>;
  /** An aggregate relationship */
  duelResultReasonsAggregate: DuelResultReasonsAggregate;
  /** fetch data from the table: "duel_result_reasons" using primary key columns */
  duelResultReasonsByPk?: Maybe<DuelResultReasons>;
  /** fetch data from the table: "duel_result_type" */
  duelResultType: Array<DuelResultType>;
  /** fetch aggregated fields from the table: "duel_result_type" */
  duelResultTypeAggregate: DuelResultTypeAggregate;
  /** fetch data from the table: "duel_result_type" using primary key columns */
  duelResultTypeByPk?: Maybe<DuelResultType>;
  /** fetch data from the table: "memos" */
  memos: Array<Memos>;
  /** fetch aggregated fields from the table: "memos" */
  memosAggregate: MemosAggregate;
  /** fetch data from the table: "memos" using primary key columns */
  memosByPk?: Maybe<Memos>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasonsAggregate: SeasonsAggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasonsByPk?: Maybe<Seasons>;
};

export type Subscription_RootDeckThemesArgs = {
  distinctOn?: InputMaybe<Array<DeckThemesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeckThemesOrderBy>>;
  where?: InputMaybe<DeckThemesBoolExp>;
};

export type Subscription_RootDeckThemesAggregateArgs = {
  distinctOn?: InputMaybe<Array<DeckThemesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeckThemesOrderBy>>;
  where?: InputMaybe<DeckThemesBoolExp>;
};

export type Subscription_RootDeckThemesByPkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootDecksArgs = {
  distinctOn?: InputMaybe<Array<DecksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DecksOrderBy>>;
  where?: InputMaybe<DecksBoolExp>;
};

export type Subscription_RootDecksAggregateArgs = {
  distinctOn?: InputMaybe<Array<DecksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DecksOrderBy>>;
  where?: InputMaybe<DecksBoolExp>;
};

export type Subscription_RootDecksByPkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootDuelRecordsArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

export type Subscription_RootDuelRecordsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelRecordsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelRecordsOrderBy>>;
  where?: InputMaybe<DuelRecordsBoolExp>;
};

export type Subscription_RootDuelRecordsByPkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootDuelResultReasonTagsArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonTagsOrderBy>>;
  where?: InputMaybe<DuelResultReasonTagsBoolExp>;
};

export type Subscription_RootDuelResultReasonTagsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonTagsOrderBy>>;
  where?: InputMaybe<DuelResultReasonTagsBoolExp>;
};

export type Subscription_RootDuelResultReasonTagsByPkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootDuelResultReasonsArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

export type Subscription_RootDuelResultReasonsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultReasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultReasonsOrderBy>>;
  where?: InputMaybe<DuelResultReasonsBoolExp>;
};

export type Subscription_RootDuelResultReasonsByPkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootDuelResultTypeArgs = {
  distinctOn?: InputMaybe<Array<DuelResultTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultTypeOrderBy>>;
  where?: InputMaybe<DuelResultTypeBoolExp>;
};

export type Subscription_RootDuelResultTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<DuelResultTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DuelResultTypeOrderBy>>;
  where?: InputMaybe<DuelResultTypeBoolExp>;
};

export type Subscription_RootDuelResultTypeByPkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootMemosArgs = {
  distinctOn?: InputMaybe<Array<MemosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MemosOrderBy>>;
  where?: InputMaybe<MemosBoolExp>;
};

export type Subscription_RootMemosAggregateArgs = {
  distinctOn?: InputMaybe<Array<MemosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MemosOrderBy>>;
  where?: InputMaybe<MemosBoolExp>;
};

export type Subscription_RootMemosByPkArgs = {
  memo: Scalars['String'];
};

export type Subscription_RootSeasonsArgs = {
  distinctOn?: InputMaybe<Array<SeasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SeasonsOrderBy>>;
  where?: InputMaybe<SeasonsBoolExp>;
};

export type Subscription_RootSeasonsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SeasonsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SeasonsOrderBy>>;
  where?: InputMaybe<SeasonsBoolExp>;
};

export type Subscription_RootSeasonsByPkArgs = {
  id: Scalars['Int'];
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<StringComparisonExp>;
};

export type DecksByUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;

export type DecksByUserQuery = {
  __typename?: 'query_root';
  decks: Array<{
    __typename?: 'Decks';
    id: number;
    name: string;
    memo: string;
    deckTheme: { __typename?: 'DeckThemes'; mainImgUrl?: string | null; themeName: string };
  }>;
};

export type DuelRecordsByUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;

export type DuelRecordsByUserQuery = {
  __typename?: 'query_root';
  duelRecords: Array<{
    __typename?: 'DuelRecords';
    isFirstTurn: boolean;
    memo: string;
    duelDateTime: any;
    myDeck: { __typename?: 'Decks'; myDeckName: string };
    compDeckTheme: { __typename?: 'DeckThemes'; compDeckThemeName: string };
  }>;
};

export type DeckByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeckByIdQuery = {
  __typename?: 'query_root';
  decksByPk?: {
    __typename?: 'Decks';
    name: string;
    themeId: number;
    memo: string;
    deckTheme: { __typename?: 'DeckThemes'; themeName: string };
  } | null;
};

export type AllDeckThemesQueryVariables = Exact<{ [key: string]: never }>;

export type AllDeckThemesQuery = {
  __typename?: 'query_root';
  deckThemes: Array<{ __typename?: 'DeckThemes'; id: number; name: string; nameKana: string }>;
};

export const DecksByUserDocument = gql`
  query decksByUser($userId: String) {
    decks(where: { userId: { _eq: $userId } }) {
      id
      name
      deckTheme {
        themeName: name
        mainImgUrl
      }
      memo
    }
  }
`;

export function useDecksByUserQuery(
  options?: Omit<Urql.UseQueryArgs<DecksByUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<DecksByUserQuery>({ query: DecksByUserDocument, ...options });
}
export const DuelRecordsByUserDocument = gql`
  query duelRecordsByUser($userId: String) {
    duelRecords(where: { userId: { _eq: $userId } }) {
      myDeck {
        myDeckName: name
      }
      compDeckTheme {
        compDeckThemeName: name
      }
      isFirstTurn
      memo
      duelDateTime
    }
  }
`;

export function useDuelRecordsByUserQuery(
  options?: Omit<Urql.UseQueryArgs<DuelRecordsByUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<DuelRecordsByUserQuery>({ query: DuelRecordsByUserDocument, ...options });
}
export const DeckByIdDocument = gql`
  query deckById($id: Int!) {
    decksByPk(id: $id) {
      name
      themeId
      deckTheme {
        themeName: name
      }
      memo
    }
  }
`;

export function useDeckByIdQuery(
  options: Omit<Urql.UseQueryArgs<DeckByIdQueryVariables>, 'query'>
) {
  return Urql.useQuery<DeckByIdQuery>({ query: DeckByIdDocument, ...options });
}
export const AllDeckThemesDocument = gql`
  query allDeckThemes {
    deckThemes {
      id
      name
      nameKana
    }
  }
`;

export function useAllDeckThemesQuery(
  options?: Omit<Urql.UseQueryArgs<AllDeckThemesQueryVariables>, 'query'>
) {
  return Urql.useQuery<AllDeckThemesQuery>({ query: AllDeckThemesDocument, ...options });
}
