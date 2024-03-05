import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
        https: {
            key: fs.readFileSync(`${__dirname}/cert/key.pem`),
            cert: fs.readFileSync(`${__dirname}/cert/cert.pem`)
		}
    	}
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	}
});
