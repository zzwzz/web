import Mock from 'mockjs';

let usersListData = Mock.mock({
  'data|80-100': [
    {
      id: '@id',
      name: '@name',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      createTime: '@datetime',
      avatar() {
        return Mock.Random.image(
          '100x100',
          Mock.Random.color(),
          '#757575',
          'png',
          this.nickName.substr(0, 1),
        );
      },
    },
  ],
});

export default {
  '/api/users': ['a', 'b'],
  '/api/auth': usersListData,
  [`GET /api/login`](req, res) {
    const { query } = req;
    res.status(200).send({ message: 'Not Login', data: query });
  },
};
