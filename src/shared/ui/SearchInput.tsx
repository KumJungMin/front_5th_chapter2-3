import { Search } from "lucide-react"
import { Input } from "@/shared/ui"

interface SearchInputProps {
  placeholder: string
  value: string
  onChange: (query: string) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchInput = (props: SearchInputProps) => {
  const { placeholder, value, onChange, onKeyPress } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    onChange(query)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyPress(e)
  }

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        className="pl-8"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

export default SearchInput
