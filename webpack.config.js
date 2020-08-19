const webpack = require("webpack");
const path = require("path");

const buildPath = path.resolve(__dirname, "dist");

const server = {
    entry: "./src/server/server.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json",
                },
            },
        ],
    },
    plugins: [new webpack.DefinePlugin({ "global.GENTLY": false })],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "server.js",
        path: buildPath,
    },
    target: "node",
};

const client = {
    entry: "./src/client/client.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.scripts.json",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "client.js",
        path: buildPath,
    },
};

module.exports = [server, client];
