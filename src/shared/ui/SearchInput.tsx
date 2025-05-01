import { Search } from "lucide-react"
import { Input } from "@/shared/ui"

interface SearchInputProps {
  placeholder: string
  value: string
  ariaLabel: string
  onChange: (query: string) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchInput = (props: SearchInputProps) => {
  const { placeholder, value, ariaLabel, onChange, onKeyPress } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    onChange(query)
  }

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        aria-label={ariaLabel}
        placeholder={placeholder}
        className="pl-8"
        value={value}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

export default SearchInput
