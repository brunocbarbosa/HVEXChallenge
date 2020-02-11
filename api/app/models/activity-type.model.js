const axios  = require('axios')
      url = require('../../config/environment')

    
exports.activityType = (type) => {
    return axios.get(`${url}/activity?type=${type}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}