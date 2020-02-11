module.exports = app => {
    const randomController = require('../controllers/random-activity.controller');

    app.route('/random-activity')
        .get(randomController.randomActivity)
}
