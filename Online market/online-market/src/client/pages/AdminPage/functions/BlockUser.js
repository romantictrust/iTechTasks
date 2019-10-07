const BlockUser = (id, status) => {
  if (status) alert(`User with id ${id} has been blocked`);
  else alert(`User with id ${id} has been unblocked`);
};

export default BlockUser;
