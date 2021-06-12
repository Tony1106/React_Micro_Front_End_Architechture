
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require('./package.json').dependencies;

const mkPublicPath = (env) => {
  return env.development ? "http://localhost:8080/": "http://federation-app2.s3-website-ap-southeast-2.amazonaws.com/" 
}
module.exports = env => ({
  entry: path.join(__dirname, "src", "app"),
  output: {  publicPath: mkPublicPath(env), path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: env.production ? 'production': "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"], extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  devServer: { contentBase: path.join(__dirname, "src"), port: 8080 },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new ModuleFederationPlugin({
      name: 'home',
      library: { type: 'var', name: 'home'},
      remotes: {
        'view-product': 'productList'
      },
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies.react },
        "react-dom": { singleton: true, requiredVersion: dependencies["react-dom"] },
        "react-router-dom": { singleton: true, requiredVersion: dependencies["react-router-dom"] },
        "shared_library": { singleton: true, requiredVersion: dependencies["shared_library"] },
        "zustand": { singleton: true, requiredVersion: dependencies["zustand"] }

      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
});
