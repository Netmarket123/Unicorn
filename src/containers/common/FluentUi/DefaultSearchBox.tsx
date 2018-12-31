import * as React from 'react';
import { SearchBox, ISearchBoxStyles } from 'office-ui-fabric-react/lib/SearchBox';


const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 143 } };

/* eslint-disable react/jsx-no-bind */
export const DefaultSearchBox = () => (
  <SearchBox
    styles={searchBoxStyles}
    placeholder="Membership #"
    onEscape={ev => {
      console.log('Custom onEscape Called');
    }}
    onClear={ev => {
      console.log('Custom onClear Called');
    }}
    onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
    onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
  />
);
