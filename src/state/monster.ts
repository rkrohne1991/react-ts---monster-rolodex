export interface Monster {
  id: number;
  name: string;
  email: string;
}

export interface MonsterSearchProps {
  monsters: Monster[];
  searchField: string;
}
