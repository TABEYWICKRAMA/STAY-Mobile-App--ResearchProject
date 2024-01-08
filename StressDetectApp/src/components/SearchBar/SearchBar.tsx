import React from 'react';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ISearchBar {
  onPress?: () => void;
  searchPhrase?: string;
  icon?: any;
}

const SearchBar = ({searchPhrase, onPress, icon}: ISearchBar) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <Searchbar
      placeholder={searchPhrase}
      onChangeText={onChangeSearch}
      onChange={onPress}
      value={searchQuery}
      icon={icon}
    />
  );
};

export default SearchBar;
