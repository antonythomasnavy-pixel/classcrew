import { MessageCircle, BookOpen, Trash2, Edit } from 'lucide-react';
import { Post, Reply } from '../lib/supabase';
import { formatDistanceToNow } from '../utils/dateUtils';

type PostCardProps = {
  post: Post & { replies?: Reply[] };
  replyCount: number;
  isAdmin: boolean;
  onDelete?: (postId: string) => void;
  onClick: () => void;
};

export default function PostCard({ post, replyCount, isAdmin, onDelete, onClick }: PostCardProps) {
  const isDoubt = post.post_type === 'doubt';
  const isUnanswered = isDoubt && replyCount === 0;

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div
            className={`p-2 rounded-lg ${
              isDoubt ? 'bg-yellow-100' : 'bg-blue-100'
            }`}
          >
            {isDoubt ? (
              <MessageCircle className="w-5 h-5 text-yellow-600" />
            ) : (
              <BookOpen className="w-5 h-5 text-blue-600" />
            )}
          </div>
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              isDoubt
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {isDoubt ? 'Doubt' : 'Note'}
          </span>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
            {post.subject}
          </span>
        </div>

        {isAdmin && onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(post.id);
            }}
            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">
            by <span className="font-medium text-gray-700">{post.profiles?.display_name}</span>
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{formatDistanceToNow(post.created_at)}</span>
        </div>

        <div className="flex items-center space-x-2">
          {isUnanswered && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-red-100 text-red-700">
              Unanswered
            </span>
          )}
          <div className="flex items-center space-x-1 text-gray-500">
            <MessageCircle className="w-4 h-4" />
            <span>{replyCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
