
module.exports = {

    //如果指定，则输出最终版的 config 对象到文件中。
    file: './output/webpart.config.json',

    console: {
        //如果指定则输出日出文件。 
        dir: './output/console/',
    },

    parse: {
        file: './output/website.json',
    },

    master: require('./config/master'),
    compile: require('./config/watch'), //它用的是 watch 的配置。
    watch: require('./config/watch'),
    build: require('./config/build'),
    stat: require('./config/stat'),
    server: require('./config/server'),


};