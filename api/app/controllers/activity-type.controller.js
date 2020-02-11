const Activity = require('../models/activity-type.model');

exports.activityType = async(req, res) => {
    const activity = await Activity.activityType(req.params.type)

    return res.send(activity)
}