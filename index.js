

const fs = require('fs');
const path = require('path');
const $Object = require('@definejs/object');
const defaults = require('./defaults.js');


module.exports = exports = {
    file: 'webpart.config.js',

    defaults,

    use(opts, { console, master, }) {
        let file = opts.config || exports.file;
        let cwd = process.cwd();
        let dest = path.join(cwd, file);
        let config = {};

        if (fs.existsSync(dest)) {
            config = require(dest);
        }

        if (typeof config == 'function') {
            config = config({ opts, defaults, master, }); //此处可以扩展。 todo...
        }

        config = $Object.deepAssign({}, defaults, config);

        //命令中指定了使用独立打包的方式，则合并相应的配置。
        if (opts.pack) {
            $Object.deepAssign(config.master[''], config.master['.pack']);
            $Object.deepAssign(config.watch[''], config.watch['.pack']);
            $Object.deepAssign(config.build[''], config.build['.pack']);
        }


        //增加额外的 excludes，即构建前要排除在外的文件或目录。
        //compat: 兼容模式。 
        //normal: 标准模式。
        let mode = opts.compat ? 'compat' : 'normal';
        let excludes = config.build[`.${mode}`].excludes || [];

        config.build[''].excludes.push(...excludes);


        return config;
    },

    merge(config, moreConfig, keys) {
        config = config || {};
        keys = keys || Object.keys(moreConfig);

        keys.forEach((key) => {
            let value = moreConfig[key];

            if (value !== undefined) {
                config[key] = value;
            }
        });

        return config;
    },
};