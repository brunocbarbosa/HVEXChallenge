const Random = require('../models/random-activity.model');

exports.randomActivity = async(req, res) => {
    const random = await Random.randomActivity();

    return res.send(random);
}