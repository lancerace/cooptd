export interface DemonGod {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  currentPower: number;
  maxPower: number;
  imageUrl: string;
  description?: string;
  rarity?: string;
  abilities?: string[];
}

export interface LevelingCost {
  level: string;
  demonGods: number;
  souls: number;
}

export interface RelicLevelingCost {
  level: string;
  shards: number;
  souls: number;
} 