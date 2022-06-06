import { MatchResult } from './MatchResult';

// this is a tuple
// we create tuples when a function would return multiple types of data
export type MatchData = [
  Date, 
  string, 
  string, 
  number, 
  number, 
  MatchResult, 
  string
];