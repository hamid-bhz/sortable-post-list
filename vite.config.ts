import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/components',
			'@constants': '/src/constants',
			'@service': '/src/service',
			'@types': '/src/types',
			'@hooks': '/src/hooks',
			'@icons': '/src/icons'
		}
	},
	server: {
		port: 3004
	},
	preview: {
		port: 3000
	}
})
