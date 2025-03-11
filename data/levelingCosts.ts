export interface DemonGodLevelingCost {
  level: number;
  nextLevel: number | string;
  demonGods: number;
  souls: number;
}

export interface RelicLevelingCost {
  level: number;
  nextLevel: number | string;
  shards: number;
  silver: number;
}

export const demonGodLevelingCosts: DemonGodLevelingCost[] = [
  { level: 1, nextLevel: 2, demonGods: 30, souls: 1000 },
  { level: 2, nextLevel: 3, demonGods: 70, souls: 2000 },
  { level: 3, nextLevel: 4, demonGods: 130, souls: 4000 },
  { level: 4, nextLevel: 5, demonGods: 210, souls: 6000 },
  { level: 5, nextLevel: 6, demonGods: 320, souls: 10000 },
  { level: 6, nextLevel: 7, demonGods: 460, souls: 14000 },
  { level: 7, nextLevel: 8, demonGods: 620, souls: 20000 },
  { level: 8, nextLevel: 9, demonGods: 800, souls: 26000 },
  { level: 9, nextLevel: 10, demonGods: 1000, souls: 34000 },
  { level: 10, nextLevel: 11, demonGods: 1230, souls: 42000 },
  { level: 11, nextLevel: 12, demonGods: 1500, souls: 52000 },
  { level: 12, nextLevel: 13, demonGods: 1800, souls: 62000 },
  { level: 13, nextLevel: 14, demonGods: 2130, souls: 72000 },
  { level: 14, nextLevel: 15, demonGods: 2490, souls: 86000 },
  { level: 15, nextLevel: 16, demonGods: 2880, souls: 100000 },
  { level: 16, nextLevel: 17, demonGods: 3300, souls: 120000 },
  { level: 17, nextLevel: 18, demonGods: 3750, souls: 140000 },
  { level: 18, nextLevel: 19, demonGods: 4230, souls: 160000 },
  { level: 19, nextLevel: 20, demonGods: 4740, souls: 180000 },
  { level: 20, nextLevel: "Max", demonGods: 5280, souls: 200000 }
];

export const relicLevelingCosts: RelicLevelingCost[] = [
  { level: 1, nextLevel: 2, shards: 2, silver: 100 },
  { level: 2, nextLevel: 3, shards: 3, silver: 200 },
  { level: 3, nextLevel: 4, shards: 6, silver: 400 },
  { level: 4, nextLevel: 5, shards: 10, silver: 600 },
  { level: 5, nextLevel: 6, shards: 15, silver: 1000 },
  { level: 6, nextLevel: 7, shards: 20, silver: 1400 },
  { level: 7, nextLevel: 8, shards: 30, silver: 2000 },
  { level: 8, nextLevel: 9, shards: 40, silver: 2600 },
  { level: 9, nextLevel: 10, shards: 50, silver: 3400 },
  { level: 10, nextLevel: "Max", shards: 65, silver: 4200 }
]; 