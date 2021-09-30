const { connect } = require('mongoose');
const debug = require('debug')('server:DB');

connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  },
)
  .then(() => debug('Connected to Database'));
