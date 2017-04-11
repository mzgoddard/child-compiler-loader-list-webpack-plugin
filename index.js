var RuleSet;
try {
  // webpack 2
  RuleSet = require('webpack/lib/RuleSet');
}
catch (e) {}

module.exports = ChildCompilerLoaderListWebpackPlugin;

function ChildCompilerLoaderListWebpackPlugin(options) {
  this.options = options;
}

ChildCompilerLoaderListWebpackPlugin.prototype.apply = function(compiler) {
  var _this = this;
  compiler.plugin('compilation', function(compilation, params) {
    // webpack 2
    if (params.normalModuleFactory.ruleSet) {
      if (_this.options.test.test(compilation.name)) {
        if (_this.options.rules) {
          params.normalModuleFactory.ruleSet = new RuleSet(_this.options.rules);
        }
      }
    }
    // webpack 1
    else {
      if (_this.options.test.test(compilation.name)) {
        if (_this.options.preLoaders) {
          params.normalModuleFactory.preLoaders.list = _this.options.preLoaders;
        }
        if (_this.options.loaders) {
          params.normalModuleFactory.loaders.list = _this.options.loaders;
        }
        if (_this.options.postLoaders) {
          params.normalModuleFactory.postLoaders.list = _this.options.postLoaders;
        }
      }
    }
  });
}
