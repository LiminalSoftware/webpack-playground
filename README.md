###Basic Wepback Example showing the use of 

* html-webpack-plugin
* templates with webpack 
* extract text plugin
* other webpack related techniques


####Extracting CSS
If we'd want to extract all the css instead of inlining it (say, because of a flash of unstyled content (FOUC))and have it placed into a style.css file to be embedded into our index.html, in our webpack.config.js, we'd wrap the css block in ```ExtractTextPlugin```


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
The general approach is not to use ExtractTextPlugin during development, as it will not work with Hot Module Replacement, but instead, use it during production.

If fingerprinting, it would be a good idea to use 'clean-webpack-plugin' to clean the build directory, as these uniquely stamped fingerprinted files will accumulate.

####TODO: it would be useful to be able to pull in large svg files into a template or index.html at build time.

####To run:

```
npm install

npm run build
```


in another terminal tab:  npm run start