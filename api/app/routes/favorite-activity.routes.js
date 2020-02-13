module.exports = app => {
    const activityController = require('../controllers/favorite-activity.controller')

    app.route('/api/favorite-activity')
        .post(activityController.save)
        .get(activityController.load);
}