import { updateUrl } from '../../../constants';

const updateUser = (user) => fetch(updateUrl, {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${user.token}`,
  },
})
  .then((res) => res.json())
  .then((res) => {
    const currentUser = { ...JSON.parse(sessionStorage.getItem('user')) };
    currentUser.materials = res.materials;
    currentUser.balance = res.balance;
    currentUser.orders = res.orders;
    sessionStorage.setItem('user', JSON.stringify(currentUser));
  })
  .catch((err) => {
    throw new Error('Token auth failed');
  });

export default updateUser;
