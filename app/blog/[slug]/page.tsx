
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getPostBySlug, getPosts } from '@/lib/supabase-server';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { marked } from 'marked';

async function parseMarkdown(content: string) {
    return marked(content);
}

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | Scottsdale Injectors Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://scottsdaleinjectors.com';

    // Calculate read time (approx)
    const wordCount = post.content.split(/\s+/g).length;
    const readTime = Math.ceil(wordCount / 200);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: baseUrl },
                    { name: 'Blog', url: `${baseUrl}/blog` },
                    { name: post.title, url: `${baseUrl}/blog/${post.slug}` },
                ]}
            />
            <Header />

            <main className="flex-grow">
                <article>
                    {/* Header */}
                    <div className="bg-slate-50 border-b border-slate-100 py-16">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-sm text-slate-500 hover:text-rose-600 mb-8 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-1" />
                                Back to Blog
                            </Link>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                                <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200">
                                    <Calendar className="w-4 h-4 text-rose-500" />
                                    {new Date(post.published_at).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200">
                                    <Clock className="w-4 h-4 text-rose-500" />
                                    {readTime} min read
                                </div>
                                <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200">
                                    <User className="w-4 h-4 text-rose-500" />
                                    {post.author_name}
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                                {post.title}
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.cover_image && (
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
                            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={post.cover_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
                        <div
                            className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:leading-tight
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-rose-600 hover:prose-a:text-rose-700 prose-a:font-medium
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                prose-li:text-slate-700
                prose-strong:text-slate-900 prose-strong:font-bold"
                            dangerouslySetInnerHTML={{ __html: await parseMarkdown(post.content) }}
                        />
                    </div>
                </article>

                {/* CTA */}
                <section className="bg-rose-50 text-slate-900 py-20 border-t border-rose-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Enhance Your Beauty?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Find the best aesthetic nurse injectors in Scottsdale for your specific needs
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all font-semibold text-lg hover:scale-105 shadow-xl"
                        >
                            Find an Injector
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
