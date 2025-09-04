// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tcpg.salvadorkarakachoff.com',
	integrations: [
		starlight({
			title: {
				'en-US': 'The Competitive Programming Guide',
				'es-AR': 'La Guía de Programación Competitiva',
			},

			logo: {
                light: '/public/logo-no-bg.svg',
                dark: '/public/logo-no-bg.svg',
				replacesTitle: true, // Si el logo reemplaza el título en la barra de navegación
            },

			// Establece el inglés como el idioma predeterminado para este sitio.
			// https://starlight.astro.build/es/guides/i18n/
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en-US',
				},
				es: {
					label: 'Español',
					lang: 'es-AR',
				},
			},

			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/salvaKaraka/guia-programacion-competitiva' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/salva-karaka/' },
			],

			sidebar: [
				{
					label: 'Introduction',
					translations: {
						'es-AR': 'Introducción',
					},
					autogenerate: { directory: 'introduction' },
				},
			],
		}),
	],
});
