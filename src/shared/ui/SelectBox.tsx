import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui"

interface SelectBoxProps {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder: string
  options: Option[]
}

export type Option = {
  label: string
  value: string
}

const SelectBox = (props: SelectBoxProps) => {
  const { value, onChange, className, placeholder, options } = props

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`w-[180px] ${className || ""}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectBox
