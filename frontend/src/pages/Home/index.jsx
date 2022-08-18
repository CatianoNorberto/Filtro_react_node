import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import axios from "axios";

import { Input } from "@rocketseat/unform";

import Table from "../../Components/Table";

import * as styled from "./style";

export default function Home() {
    
  const [ name, setName] = useState("");
  const [ data, setData] = useState([]);

  useEffect(() =>{
    const fetchUsers = async() => {
      const res = await axios.get(`http://localhost:3333?q=${name}`);
      setData(res.data);
    }
    if(name.length === 0 || name.length > 2 ) fetchUsers();
  }, [name]);

  return (
    <styled.HomeContainer>
      <styled.HomeContent>
        <div className='inputsearch'>
          {/* <BsSearch/> */}
          <Input
            name="value"
            id="value"
            placeholder="Pesquisar"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='table'>
          <Table data= {data}/>
        </div>
      </styled.HomeContent>
    </styled.HomeContainer>
  );
}
