import { InMemoryCache, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache();

export const token = makeVar('');
export const userName = makeVar('');
export const name = makeVar('');
