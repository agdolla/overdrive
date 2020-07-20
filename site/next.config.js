const { join } = require('path');

const withTreat = require('next-treat')();
const withImages = require('next-images');

module.exports = withImages(
	withTreat({
		reactStrictMode: true,
		poweredByHeader: false,
		experimental: {
			scrollRestoration: true,
		},
		webpack(config, nextConfig) {
			const jsRule = config.module.rules[0];
			jsRule.include.unshift(join(__dirname, '../packages/'));
			jsRule.include.unshift(/@popperjs/);
			const oldExclude = jsRule.exclude;
			jsRule.exclude = (path) =>
				path.includes('overdrive') || path.includes('popperjs')
					? false
					: oldExclude(path);
			config.module.rules[0] = jsRule;
			config.resolve.modules.unshift(join(__dirname, '../packages/'));

			if (nextConfig.isServer) {
				const ext = config.externals[0];
				config.externals = [
					(context, request, callback) => {
						if (/@popperjs[\\/]/.test(request)) {
							return callback();
						}

						ext(context, request, callback);
					},
				];
			}

			return config;
		},
	}),
);
