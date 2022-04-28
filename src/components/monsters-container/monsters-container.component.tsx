import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

import SearchBox from "../search-box/search-box.component";
import CardList from "../card-list/card-list.component";

import { Monster } from "../../state/monster";
import Spinner from "../spinner/spinner.component";

const MonstersContainer: React.FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);
  const [monstersLoading, setMonstersLoading] = useState<boolean>(true);
  const handleError = useErrorHandler();

  useEffect(() => {
    setMonstersLoading(true);
    setTimeout(() => {
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
      setMonstersLoading(false);
    }, 2000);
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
      {monstersLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <SearchBox
            onSearchChange={onSearchChange}
            placeholder="Search monsters"
          />{" "}
          <CardList monsters={filteredMonsters} />
        </>
      )}
    </>
  );
};

export default MonstersContainer;
