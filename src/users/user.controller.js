const users = [
  {
    id: 1,
    name: 'Vital',
    email: 'hhhf@gmail.com',
    password: '1123',
  },
  {
    id: 2,
    name: 'Vital 2',
    email: 'hhhf@gmail.com',
    password: '1123',
  },
];

exports.getUsers = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: { users },
  });
};

exports.addUsers = async (req, res, next) => {
  const newUser = { ...req.body, id: Date.now().toString() };
  users.push(newUser);

  res.status(200).json({
    status: 'success',
    data: users,
  });
};

const findUserById = id => {
  const parseId = parseInt(id);
  const indexUser = users.findIndex(user => Number(user.id) === parseId);
  console.log(indexUser, 'indexUser');
  console.log(parseId, 'parseId');

  if (indexUser === -1) {
    res.status(404).json({
      status: 'error',
      data: 'Dont find user',
    });
  }

  return indexUser;
};

exports.upDateUsers = async (req, res, next) => {
  const indexUser = findUserById(req.params.id);
  users[indexUser] = { ...users[indexUser], ...req.body };
 
  res.status(200).json({
    status: 'success',
    data: users[indexUser],
  });
};

exports.deleteUsers = async (req, res, next) => {
  const indexUser = findUserById(req.params.id);
  if (indexUser === undefined) {
    return;
  }
  users.splice(indexUser, 1);
  console.log(users, 'users');

  res.status(200).json({
    status: 'success',
    data: { users },
  });
};
