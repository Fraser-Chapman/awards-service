import {Results} from '../../../services/results-service/model/results';

export interface ResultsReducerModel {
  status: string;
  results: Results;
}
