###Basic Wepback Example showing the use of 

* html-webpack-plugin
* templates with webpack 
* extract text plugin
* other webpack related techniques


####Extracting CSS
If we want to extract all the css and put it into a style.css file to be embedded into our index.html, in our webpack.config.js, we wrap the css block in ```ExtractTextPlugin```


```
module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        include: PATHS.app
      }
    ]
  },
  ```
  
  Then in the plugins block of webpack.config.js, we call new ExtractTextPlugin(), passing either just a name ```style.css``` or ```style-[hash].css```, if we want Webpack to automatically fingerprint the file with a unique hash:

```
plugins: [
    new ExtractTextPlugin("style-[hash].css", {
      allChunks: true
    }),
```
If fingerprinting, it would be a good idea to use 'clean-webpack-plugin' to clean the build directory, as these uniquely stamped fingerprinted files will accumulate.

####TODO: it would be useful to be able to pull in large svg files into a template or index.html at build time.