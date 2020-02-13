const Activity = require('../models/favorite-activity.model');

exports.save = async(req, res) => {
    console.log(req.body)
    const activity = await Activity.save(req.body)

    return res.send('Save successful!!')
}

exports.load = async(req, res) => {
    const activity = await Activity.load()

    return res.send(activity)
}