module.exports = function myWebpackLoader (content) {
    // console.log('loader 동작함');
    return content.replace('console.log(','alert(');
}