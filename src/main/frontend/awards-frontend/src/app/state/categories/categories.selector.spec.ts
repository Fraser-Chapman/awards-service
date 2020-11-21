import {getCategories} from './categories.selector';

describe('CategoriesSelector', () => {
  const stubCategories: string[] = ['category1', 'category2'];

  describe('GetCategories', () => {

    it('should return array of categories from store', () => {
      expect(getCategories({categories: {categories: stubCategories}})).toEqual(stubCategories);
    });

  });
});
