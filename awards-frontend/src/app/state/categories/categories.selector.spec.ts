import {getCategories, getCategoriesStatus} from './categories.selector';

describe('CategoriesSelector', () => {
  const stubCategories: string[] = ['category1', 'category2'];
  const stubStatus = 'stubStatus';

  describe('GetCategories', () => {

    it('should return array of categories from store', () => {
      expect(getCategories({categories: {categories: stubCategories}})).toEqual(stubCategories);
    });

  });

  describe('GetCategoriesStatus', () => {

    it('should return categories status from store', () => {
      expect(getCategoriesStatus({categories: {status: stubStatus}})).toEqual(stubStatus);
    });
  });
});
