import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Create an Object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// commenting above both lines of code since we created static method
// search csv STATIC

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load(); 
// above code is commented because static method is created under MatchReader class
// search csv STATIC
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load(); 


// search STATIC
// below code works fine but we are creating instance of so many classes here
// to improve readibility we are using static method which is written below
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()  
// );

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);