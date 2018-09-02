/**
 * Created by xiaoY on 3/9/18.
 */
process.env.NODE_ENV = 'production'
var reactScriptsConfig = require('react-scripts/config/webpack.config.prod')
module.exports = Object.assign({}, reactScriptsConfig, {
	output: Object.assign({}, reactScriptsConfig.output, {
		path: './docs'
	})
})