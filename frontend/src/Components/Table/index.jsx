import React from 'react';

import *as styled from './style';

export default function Table({ data }) {
  return (
    <styled.Container>
      <table>
        <tbody>
          <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>E-mail</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </styled.Container>

  );
}
