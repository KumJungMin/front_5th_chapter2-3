import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Button } from "@/shared/ui"
import { MessageSquare, Edit2, Trash2, ThumbsUp, ThumbsDown } from "lucide-react"

import { TagList } from "@/shared/ui/TagList"
import { HighlightText } from "@/shared/ui/HighlightText"
import { usePostTableLogic } from "../model/usePostTableLogic"

export const PostTable = () => {
  const {
    handleTagClick,
    handleOpenDetail,
    handleOpenEdit,
    handleDeletePost,
    handleOpenUser,
    search,
    posts,
    isLoading,
    selectedTag,
  } = usePostTableLogic()

  if (isLoading) return <p className="p-4 text-center">로딩…</p>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead className="w-[150px]">작성자</TableHead>
          <TableHead className="w-[150px]">반응</TableHead>
          <TableHead className="w-[150px]">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>
              <div className="space-y-1">
                <HighlightText text={post.title} highlight={search} />
                <TagList tags={post.tags} selectedTag={selectedTag} onClick={handleTagClick} />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-2" onClick={() => handleOpenUser(post.author)}>
                <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
                <span>{post.author?.username}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.reactions?.likes || 0}</span>
                <ThumbsDown className="w-4 h-4" />
                <span>{post.reactions?.dislikes || 0}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleOpenDetail(post)}>
                  <MessageSquare className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleOpenEdit(post)}>
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
