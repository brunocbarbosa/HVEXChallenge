module.exports = app => {
    const randomController = require('../controllers/random-activity.controller');

    app.route('/api/random-activity')
        .get(randomController.randomActivity)
}
