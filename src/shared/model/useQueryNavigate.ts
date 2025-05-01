import { useNavigate } from "react-router-dom"

interface QueryParams {
  skip?: number
  limit?: number
  search?: string
  sortBy?: string
  selectedTag?: string
  searchQuery?: string
  sortOrder?: "asc" | "desc" // !! 타입 가져오기
  tag?: string
}

export const useQueryNavigate = () => {
  const navigate = useNavigate()

  const updateURL = (params: QueryParams) => {
    const newParams = new URLSearchParams()

    if (params?.skip) newParams.set("skip", params.skip.toString())
    if (params?.limit) newParams.set("limit", params.limit.toString())
    if (params?.searchQuery) newParams.set("search", params.searchQuery)
    if (params?.sortBy) newParams.set("sortBy", params.sortBy)
    if (params?.sortOrder) newParams.set("sortOrder", params.sortOrder)
    if (params?.selectedTag) newParams.set("tag", params.selectedTag)

    navigate(`?${newParams.toString()}`)
  }

  return { updateURL }
}
