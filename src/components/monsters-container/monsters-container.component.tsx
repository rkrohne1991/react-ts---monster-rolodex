import { useEffect, useState } from "react";

import SearchBox from "../search-box/search-box.component";
import CardList from "../card-list/card-list.component";

import { Monster } from "../../state/monster";
import { getData } from "../../utils/data.utils";

const MonstersContainer: React.FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLocaleLowerCase();
    setSearchField(inputValue);
  };

  return (
    <>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </>
  );
};

export default MonstersContainer;
