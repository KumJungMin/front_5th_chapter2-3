interface TagListProps {
  tags: string[]
  selectedTag: string
  onClick: (tag: string) => void
}

export const TagList = ({ tags, selectedTag, onClick }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
            tag === selectedTag
              ? "text-white bg-blue-500 hover:bg-blue-600"
              : "text-blue-800 bg-blue-100 hover:bg-blue-200"
          }`}
          onClick={() => onClick(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
