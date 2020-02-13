const fs = require('fs')


exports.save = (data) => {
    // console.log(data)
    let contentJson = ['begin']

    const file = fs.readFileSync('favorite.json');
    contentJson = JSON.parse(file);

    contentJson.push(data)

    console.log('teste',contentJson.length)

    const dataString = JSON.stringify(contentJson, null, 2);
    return fs.writeFileSync('favorite.json', dataString);
}

exports.load = () => {
    const file = fs.readFileSync('favorite.json');
    const contentJson = JSON.parse(file);

    return contentJson;
}