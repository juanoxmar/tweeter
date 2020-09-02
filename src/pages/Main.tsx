import React from 'react';

type Props = {
  children: React.ReactNode;
};

function main(props: Props) {
  const { children } = props;
  return <main>{children}</main>;
}

export default main;
