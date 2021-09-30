export const getInitialUser = () => ({
  little: {
    stats: {
      money: 0,
      hunger: 0,
      hygiene: 0,
      mind: 0,
    },
    tendencies: {
      studies: 0,
      healthiness: 0,
      leisure: 0,
    },
  },
});

export const updatedNullUser = {
  little: {
    stats: {
      money: 10,
      hunger: 1,
      hygiene: 0,
      mind: 0,
    },
    tendencies: {
      studies: 0,
      healthiness: 0,
      leisure: 0,
    },
  },
};
export const updatedWorkUser = {
  little: {
    stats: {
      money: 20,
      hunger: 1,
      hygiene: 0,
      mind: 0,
    },
    tendencies: {
      studies: 1,
      healthiness: 0,
      leisure: 0,
    },
  },
};
export const updatedHealthUser = {
  little: {
    stats: {
      money: 10,
      hunger: 1,
      hygiene: 1,
      mind: 0,
    },
    tendencies: {
      studies: 0,
      healthiness: 1,
      leisure: 0,
    },
  },
};
export const updatedLeisureUser = {
  little: {
    stats: {
      money: 10,
      hunger: 1,
      hygiene: 0,
      mind: 1,
    },
    tendencies: {
      studies: 0,
      healthiness: 0,
      leisure: 1,
    },
  },
};
export const updatedHouseUser = {
  little: {
    stats: {
      money: 10,
      hunger: 1,
      hygiene: 0,
      mind: 1,
    },
    tendencies: {
      studies: 0,
      healthiness: 1,
      leisure: 0,
    },
  },
};
export const updatedStudyUser = {
  little: {
    stats: {
      money: 10,
      hunger: 1,
      hygiene: 0,
      mind: 1,
    },
    tendencies: {
      studies: 1,
      healthiness: 1,
      leisure: 0,
    },
  },
};

export const withoutCompleteUser = {
  little: {
    stats: {
      hunger: NaN, hygiene: NaN, mind: NaN, money: NaN,
    },
    tendencies: { healthiness: 0, leisure: NaN, studies: NaN },
  },
};
