const Activity = require('../models/activity-key.model');

exports.activityKey = async(req, res) => {
    const activity = await Activity.activityKey(req.params.key)

    return res.send(activity)
}