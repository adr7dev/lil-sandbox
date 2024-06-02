import { SearchBoxForm } from './SearchBoxForm'

export function SearchBox() {
  return (
    <div className="flex w-full justify-center bg-gray-800 py-4">
      <div className="w-full max-w-screen-lg px-4 text-white lg:px-0">
        <h1 className="mb-4 text-xl">Lorem ipsum dolor sit amet</h1>
        <SearchBoxForm />
      </div>
    </div>
  )
}
