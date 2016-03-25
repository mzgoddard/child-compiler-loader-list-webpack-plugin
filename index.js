module.exports = ChildCompilerLoaderListWebpackPlugin;

function ChildCompilerLoaderListWebpackPlugin(options) {
  this.options = options;
}

ChildCompilerLoaderListWebpackPlugin.prototype.apply = function(compiler) {
  var _this = this;
  compiler.plugin('compilation', function(compilation, params) {
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
  });
}
