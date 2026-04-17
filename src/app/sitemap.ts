import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gemintangsf.vercel.app'

    const routes = [
        '',
        '/services',
        '/projects',
        '/about-me',
        '/about/gemintang-sangkaji-furqon',
        '/faqs',
        '/contact',
        '/game24',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))
}