// List.js will only be used for testing purposes
// for connecting to api/server.js
import React, { useState, useEffect }from 'react';
import { CenterContainer } from "../styles/centeredContainer";
import { Title } from '../styles/title';
import { useFetch } from '../utils/hooks';
import { NextLine } from '../styles/nextLine';
import axios from 'axios';

function List() {

  const [data, loading] = useFetch(
    "http://localhost:8000/api/getList"
  );

  // console.log("from List.js - data: " +data)

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
            {/* {console.log("from list.js - data: " + data)} */}
        })}

      </div>
    </CenterContainer>
  );
}

export default List;