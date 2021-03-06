function getUserId(token: any | null | undefined) {
  const userId = token.userId;
  if (!userId) {
    throw new Error('Not Authorized!!');
  }
  return token;
}

export { getUserId };
