import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: '@components',
				replacement: path.resolve(path.join(__dirname, './src/components'))
			}
		]
	}
})
