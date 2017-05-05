import abstract from './abstract';

export default Object.assign(
  abstract(),
  {
    create(user) {
      return this.post('/users', user);
    },
    fetchAll() {
      return this.get('/users');
    },
  },
);
