import abstract from './abstract';

export default Object.assign(
  abstract(),
  {
    create(score) {
      return this.post('/scores', score);
    },
    fetchAll() {
      return this.get('/scores');
    },
  },
);
