import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

import SearchBox from "../search-box/search-box.component";
import CardList from "../card-list/card-list.component";

import { Monster } from "../../state/monster";
import Spinner from "../spinner/spinner.component";
import { useGetUsersQuery } from "../../store/reducers/userReducer";

type userApiDataType = {
  [key: string]: any;
};

type userApiErrorType = {
  status: number | undefined;
  data: userApiDataType;
};

const MonstersContainer: React.FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);
  const [monstersLoading, setMonstersLoading] = useState<boolean>(true);
  const handleError = useErrorHandler();
  const response = useGetUsersQuery();

  useEffect(() => {
    const { isError, isLoading, data, error, isSuccess } = response;
    const errorType = error as userApiErrorType;

    if (isLoading) {
      setMonstersLoading(true);
    } else {
      setMonstersLoading(false);
    }

    if (isError) {
      setMonstersLoading(false);
      handleError(errorType && errorType.status);
      throw new Error(`Something went wrong: ${errorType.status}`);
    }

    if (isSuccess) {
      setMonsters(data);
    }
  }, [response, handleError]);

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
          <SearchBox
            onSearchChange={onSearchChange}
            placeholder="Search monsters"
          />
          <CardList monsters={filteredMonsters} />
        </>
      )}
    </>
  );
};

export default MonstersContainer;
