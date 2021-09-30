import {
  MONEY_INCREMENT,
  STANDARD_INCREMENT,
  MONEYPLUS_INCREMENT,
  NULL_INCREMENT,
} from './constants';

export default function updatePoints(task, completeUser) {
  const isWorkTask = task === 'work';
  const isHealthTask = task === 'health';
  const isLeisureTask = task === 'leisure';
  const isMindTask = ['study', 'house', 'leisure'].includes(task);
  const isHealthyTask = ['study', 'house', 'health'].includes(task);
  const isWorkStudyTask = ['study', 'work'].includes(task);
  const { stats, tendencies } = completeUser?.little || {};

  return {
    little: {
      stats: {
        money: stats?.money + (isWorkTask ? MONEYPLUS_INCREMENT : MONEY_INCREMENT),
        hunger: stats?.hunger + STANDARD_INCREMENT,
        hygiene: stats?.hygiene + (isHealthTask ? STANDARD_INCREMENT : NULL_INCREMENT),
        mind: stats?.mind + (isMindTask ? STANDARD_INCREMENT : NULL_INCREMENT),

      },
      tendencies: {
        studies: tendencies?.studies + (isWorkStudyTask ? STANDARD_INCREMENT : NULL_INCREMENT),
        healthiness: tendencies?.healthiness + isHealthyTask ? STANDARD_INCREMENT : NULL_INCREMENT,
        leisure: tendencies?.leisure + (isLeisureTask ? STANDARD_INCREMENT : NULL_INCREMENT),
      },
    },
  };
}
