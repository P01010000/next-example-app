module.exports = {
    reactStrictMode: true,
    webpack: (config, options) => {
        const { ModuleFederationPlugin } = options.webpack.container;

        config.plugins.push(
            new ModuleFederationPlugin({
                name: "host",
                shared: {
                    react: {
                        eager: true,
                        singleton: true,
                        requiredVersion: require('./package.json').dependencies.react,
                    },
                    "react-dom": {
                        eager: true,
                        singleton: true,
                        requiredVersion: require('./package.json').dependencies['react-dom'],
                    },
                },
            })
        );

        return config;
    }
}
