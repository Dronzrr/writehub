import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
  <Link to={`/post/${$id}`} className="group block">
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-purple-500/10">

      {featuredImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5">
        <h2 className="line-clamp-2 text-xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-purple-400">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Read article →
        </p>
      </div>

    </article>
  </Link>
)
}

export default PostCard