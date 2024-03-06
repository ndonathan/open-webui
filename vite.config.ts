import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		https: {
            		key: fs.readFileSync(`/etc/ssl/certs/private.key`),
            		cert: fs.readFileSync(`/etc/ssl/certs/public.crt`),
		}
    	},
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	}
});
