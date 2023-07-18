const defaults = require('./build/defaults');


module.exports = {
    env: 'prd',

    /**
    * 通用部分。
    */
    '': defaults,

    /**
    * 针对分布式打包。
    */
    '.pack': {
        packages: {
            minify: true,
            name: '{md5}',
            begin: 'partial/begin.js',
            end: 'partial/end.js',
            query: {},
        },
    },

    /**
    * 针对兼容版。
    */
    '.compat': {
        //构建前要排除在外的文件或目录。
        excludes: [
            //js 分 babel 版本，但 css 的不区分，所以要保留。
            'f/definejs/definejs.debug.js',
            'f/definejs/definejs.min.js',
        ],
    },

    /**
    * 针对标准版。
    */
    '.normal': {
        //构建前要排除在外的文件或目录。
        excludes: [
            'f/**/*.babel.debug.js',
            'f/**/*.babel.min.js',
            'f/polyfill/',
        ],
    },

};