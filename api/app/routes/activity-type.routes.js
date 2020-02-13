module.exports = app => {
    const activityController = require('../controllers/activity-type.controller')

    app.route('/api/activity-type/:type')
        .get(activityController.activityType);
}