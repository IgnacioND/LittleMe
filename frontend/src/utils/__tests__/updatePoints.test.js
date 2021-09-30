import updatePoints from '../updatePoints';
import {
  getInitialUser,
  updatedHealthUser,
  updatedHouseUser,
  updatedLeisureUser,
  updatedNullUser,
  updatedStudyUser,
  updatedWorkUser,
  withoutCompleteUser,
} from '../fixtures/updatePoints.fixture';

describe('Given an updatePoints file', () => {
  let completeUser;

  beforeEach(() => {
    completeUser = getInitialUser();
  });

  describe('When is called with no task', () => {
    test('Should Change Values expected', () => {
      expect(updatePoints(null, completeUser)).toEqual(updatedNullUser);
    });
  });

  describe('When is called with no completeUser', () => {
    test('Should Change Values expected', () => {
      expect(updatePoints('study', null)).toEqual(withoutCompleteUser);
    });
  });

  describe('When is called with work task', () => {
    test('Should Change Values expected', () => {
      expect(updatePoints('work', completeUser)).toEqual(updatedWorkUser);
    });
  });

  describe('When is called with health task', () => {
    test('Should Change Values expected', () => {
      expect(updatePoints('health', completeUser)).toEqual(updatedHealthUser);
    });
  });

  describe('When is called with house task', () => {
    test('Should Change Values expected', () => {
      expect(updatePoints('house', completeUser)).toEqual(updatedHouseUser);
    });
  });

  describe('When is called with leisure task', () => {
    test('Should Change Values expected', () => {
      expect(updatePoints('leisure', completeUser)).toEqual(updatedLeisureUser);
    });
  });

  describe('When is called with study task', () => {
    test('Should Change Values expected', () => {
      expect(updatePoints('study', completeUser)).toEqual(updatedStudyUser);
    });
  });
});
