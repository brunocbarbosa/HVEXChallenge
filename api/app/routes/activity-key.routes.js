module.exports = app => {
    const activityController = require('../controllers/activity-key.controller')

    app.route('/activity-key/:key')
        .get(activityController.activityKey);
}