import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

// this is a tuple
// we create tuples when a function would return multiple types of data
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // below this 'as' is used is know as type assertion
      // we are telling ts that the values will be from MatchResult only
      row[5] as MatchResult,
      row[6]
    ];
  }

}