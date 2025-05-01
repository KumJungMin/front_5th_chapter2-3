import SearchInput from "@/shared/ui/SearchInput"
import SelectBox, { Option } from "@/shared/ui/SelectBox"

import { useToolbarLogic } from "../model/useToolbarLogic"

const sortKeyOptions: Option[] = [
  { label: "없음", value: "none" },
  { label: "ID", value: "id" },
  { label: "제목", value: "title" },
  { label: "반응", value: "reactions" },
]

const sortOrderOptions: Option[] = [
  { label: "오름차순", value: "asc" },
  { label: "내림차순", value: "desc" },
]

// 비즈니스 로직은 model 폴더에 위치하고, ui폴더는 주입(props도 이왕이면 자제)만 받기
export const Toolbar = () => {
  const {
    search,
    tag,
    sortBy,
    sortOrder,
    tagOptions,
    handleSearchChange,
    handleTagChange,
    handleSortByChange,
    handleSortOrderChange,
    handleSearchSubmit,
  } = useToolbarLogic()

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <SearchInput
          placeholder="게시물 검색…"
          value={search}
          onChange={handleSearchChange}
          onKeyPress={handleSearchSubmit}
        />
      </div>

      <SelectBox value={tag} options={tagOptions} onChange={handleTagChange} placeholder="태그 선택" />
      <SelectBox value={sortBy} options={sortKeyOptions} onChange={handleSortByChange} placeholder="정렬 기준" />
      <SelectBox
        value={sortOrder}
        options={sortOrderOptions}
        onChange={handleSortOrderChange}
        placeholder="정렬 순서"
      />
    </div>
  )
}
