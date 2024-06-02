'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'

export function SearchBoxForm() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [phrase, setPhrase] = useState(searchParams.get('phrase') || '')

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  }

  const handleSearchPhraseChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhrase(e.target.value)
  }

  const handleFormSubmit = () => {
    if (phrase) {
      const queryString = createQueryString('phrase', phrase)
      router.push(`${pathname}?${queryString}`)
    } else {
      router.push(pathname)
    }
  }

  return (
    <div>
      <Input
        className="mb-4"
        value={phrase}
        onChange={handleSearchPhraseChange}
      />
      <Button variant="secondary" onClick={handleFormSubmit}>
        Search
      </Button>
    </div>
  )
}
