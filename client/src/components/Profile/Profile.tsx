import React from 'react';
import { userName } from '../../apollo/cache';
import Content from '../../containers/Content/Content';

function Profile() {
  return (
    <>
      <Content profile={userName()} />
    </>
  );
}

export default Profile;
