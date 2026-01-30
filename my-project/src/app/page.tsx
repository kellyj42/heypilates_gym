import { client } from '@/sanity/lib/client'
import { homeQuery } from '@/sanity/lib/queries'

export default async function HomePage() {
  const data = await client.fetch(homeQuery)

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">
        {data?.introText || "No content yet"}
      </h1>

      <p className="text-lg">
        {data?.conceptText}
      </p>

      <button className="bg-black text-white px-6 py-3 rounded">
        {data?.ctaText}
      </button>
    </main>
  )
}
