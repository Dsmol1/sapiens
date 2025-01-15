import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				home: '/index.html',
				buttons: '/buttons.html',
// Add more pages here
			},
		},
	},
});