import React from 'react'

interface YoutubeProps {
  id: string
}
export const YouTube = ({ id }: YoutubeProps) => {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded youtube video"
      />
    </div>
  )
}
