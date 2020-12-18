// List.js will only be used for testing purposes
// for connecting to api/server.js
import React from 'react';
import { CenterContainer } from '../styles/centeredContainer';
import { Title } from '../styles/title';
import { useFetch } from '../utils/hooks';
import { NextLine } from '../styles/nextLine';

function List() {

  const [data] = useFetch(
    process.env.API_GETLIST_URL
  );

  return(
    <CenterContainer>
      <div>
      <Title>List from server{"\n"}</Title>
        {data.map((item) => {
          return (
            <NextLine>
              {item}
            </NextLine>
          )
        })}

      </div>
    </CenterContainer>
  );
}

export default List;
