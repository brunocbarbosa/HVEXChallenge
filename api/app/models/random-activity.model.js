const axios = require('axios'),
      url = require('../../config/environment')

exports.randomActivity = () => {
    return axios.get(`${url}/activity/`)
            .then(response => response.data)
            .catch(error => console.log(error))
}