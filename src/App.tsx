import { useEffect, useState } from "react";
import "./App.scss";

import CardList from "./components/card-list/card-list.component";
import { Monster } from "./state/monster";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

const App: React.FC = () => {
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
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
