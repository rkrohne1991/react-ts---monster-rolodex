import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

import SearchBox from "../search-box/search-box.component";
import CardList from "../card-list/card-list.component";

import { Monster } from "../../state/monster";

const MonstersContainer: React.FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);
  const handleError = useErrorHandler();

  useEffect(() => {
    const fetchUsers = async () =>
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Something went wrong: ${response.status}`);
        })
        .then((responseJson) => setMonsters(responseJson))
        .catch((error) => handleError(error));

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster: any) => {
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
