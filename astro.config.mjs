import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ygojson.github.io',
	integrations: [
		starlight({
			title: 'YGOJSON',
			logo: {
				src: './src/assets/logo.svg'
			},
			favicon: '/favicon.svg',
			editLink: {
				baseUrl: 'https://github.com/ygojson/ygojson.github.io/edit/main/'
			},
			social: {
				github: 'https://github.com/ygojson',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides'}
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
