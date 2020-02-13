module.exports = app => {
    const activityController = require('../controllers/activity-key.controller')

    app.route('/api/activity-key/:key')
        .get(activityController.activityKey);
}