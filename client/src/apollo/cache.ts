import { InMemoryCache, makeVar } from '@apollo/client';

export const token = makeVar('');
export const userName = makeVar('');
export const name = makeVar('');

const cache: InMemoryCache = new InMemoryCache();

export default cache;
