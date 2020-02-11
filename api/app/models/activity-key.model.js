const axios  = require('axios')
      url = require('../../config/environment')

    
exports.activityKey = (key) => {
    return axios.get(`${url}/activity?key=${key}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}