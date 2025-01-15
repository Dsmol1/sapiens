import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: 'index.html', // Main page
				buttons: 'buttons.html', // Buttons page
			},
		},
	},
});
