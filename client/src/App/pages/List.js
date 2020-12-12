// List.js will only be used for testing purposes
// for connecting to api/server.js
import React, { useState, useEffect }from 'react';
import { CenterContainer } from "../styles/centeredContainer";
import { Title } from '../styles/title';
import axios from 'axios';

function List() {
  const [list, setList] = useState({listArr: []});

  // this is to get the list from the server. 
  useEffect(async () => {
    const result = await axios(
      'http://localhost:8000/api/getList'
    );
    setList(result.data);
  })



  return(
    <div className="App">
      <Title>List of Items</Title>
      {/** Check to see if any items are found */}
      {/** TODO: i think the problem is here */}
      {list.listArr.length ? (
        <CenterContainer>
          {/** Render the list of items */}
          {list.listArr.map((item) => {
              <div>
                {item}
              </div>
          })}
        </CenterContainer>
      ) : (
        <CenterContainer>
          <h2>No List Items Found</h2>
        </CenterContainer>
      )
    }
    </div>
  );
}

export default List;