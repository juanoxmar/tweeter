import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer/reducer';
import Content from '../../containers/Content/Content';

function Profile() {
  const { userName } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Content profile={userName} />
    </>
  );
}

export default Profile;
