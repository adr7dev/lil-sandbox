import { SearchBox } from '@/components/features/search/SearchBox/SearchBox'

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const fakeData = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('kek')
    }, 5000)
  })

  console.log(fakeData)

  return (
    <>
      <SearchBox />
      <div className="flex w-full justify-center py-4">
        <div className="w-full max-w-screen-lg px-4 text-primary lg:px-0">
          {searchParams?.phrase || 'Hello!'}
        </div>
      </div>
    </>
  )
}
