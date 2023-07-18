
module.exports = {

    //使用的环境。
    env: 'dev',


    //运行 `webpart watch` 命令后要输出的一些信息的路径。
    //如果不指定，则不输出。
    //在同目录的 server.js 配置中用到。
    file: './output/watch.json',

    babel: {
        dir: 'babel/',  //进行 babel 转换后的输出目录（相对于 website.htdocs），最终结果如 `htdocs/babel/`.
        comment: true,  //是否在输出的内容顶部生成注释。
    },

    /**
    * 通用部分。
    */
    '': {
        masters: {
            minify: false,
        },
    },

    /**
    * 针对分布式打包。
    */
    '.pack': {
        packages: {
            minify: false,
            name: '{name}',
            query: {
                md5: 4,
            },
        },
    },

};