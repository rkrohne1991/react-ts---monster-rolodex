export interface Monster {
  id: string;
  name: string;
}

export interface MonsterSearchProps {
  monsters: Monster[];
  searchField: string;
}
