import {Results} from '../../services/results-service/model/results';
import {getFetchResultsState, getResults} from './results.selector';
import {CategoryResult} from '../../services/results-service/model/category-result';

describe('ResultsSelector', () => {
  const stubAwards: Array<CategoryResult> = [
    {
      categoryName: 'CategoryOne',
      winnerName: 'PlayerOne',
      nominations: ['PlayerOne', 'PlayerTwo']
    }
  ];

  const stubResults: Results = {
    awards: stubAwards
  };

  describe('getFetchResultsState', () => {
    it('should select status', () => {
      const expectedStatus = 'SUCCESS';
      expect(getFetchResultsState({ results: {status: expectedStatus, results: stubResults} })).toEqual(expectedStatus);
    });
  });

  describe('getResults', () => {
    it('should select results', () => {
      expect(getResults({ results: {status: 'SUCCESS', results: stubResults} })).toEqual(stubResults);
    });
  });

});
