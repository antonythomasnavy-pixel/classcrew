import { useEffect, useState } from 'react';
import { X, Send, Trash2, BookOpen, MessageCircle } from 'lucide-react';
import { supabase, Post, Reply } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { formatDistanceToNow } from '../utils/dateUtils';

type PostModalProps = {
  post: Post;
  onClose: () => void;
  onUpdate: () => void;
  isAdmin: boolean;
};

export default function PostModal({ post, onClose, onUpdate, isAdmin }: PostModalProps) {
  const { user, profile } = useAuth();
  const [replies, setReplies] = useState<Reply[]>([]);
  const [newReply, setNewReply] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadReplies();
  }, [post.id]);

  const loadReplies = async () => {
    const { data, error } = await supabase
      .from('replies')
      .select('*, profiles(*)')
      .eq('post_id', post.id)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setReplies(data);
    }
  };

  const handleSubmitReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newReply.trim()) return;

    setLoading(true);

    const { error } = await supabase.from('replies').insert({
      post_id: post.id,
      user_id: user.id,
      content: newReply,
    });

    if (!error) {
      setNewReply('');
      await loadReplies();
      onUpdate();
    }

    setLoading(false);
  };

  const handleDeleteReply = async (replyId: string) => {
    if (!confirm('Are you sure you want to delete this reply?')) return;

    const { error } = await supabase.from('replies').delete().eq('id', replyId);

    if (!error) {
      await loadReplies();
      onUpdate();
    }
  };

  const isDoubt = post.post_type === 'doubt';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                {isDoubt ? (
                  <MessageCircle className="w-6 h-6" />
                ) : (
                  <BookOpen className="w-6 h-6" />
                )}
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                    {isDoubt ? 'Doubt' : 'Note'}
                  </span>
                  <span className="font-semibold px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                    {post.subject}
                  </span>
                </div>
                <h2 className="text-2xl font-bold">{post.title}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center space-x-4 text-sm opacity-90">
            <span>by {post.profiles?.display_name}</span>
            <span>•</span>
            <span>{formatDistanceToNow(post.created_at)}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {isDoubt ? 'Solutions' : 'Replies'} ({replies.length})
            </h3>

            {replies.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-xl">
                <p className="text-gray-500">
                  {isDoubt
                    ? 'No solutions yet. Be the first to help!'
                    : 'No replies yet. Start the discussion!'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          {reply.profiles?.display_name?.[0]?.toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {reply.profiles?.display_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatDistanceToNow(reply.created_at)}
                          </div>
                        </div>
                      </div>

                      {(isAdmin || user?.id === reply.user_id) && (
                        <button
                          onClick={() => handleDeleteReply(reply.id)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <p className="text-gray-700 whitespace-pre-wrap">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <form onSubmit={handleSubmitReply} className="flex space-x-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder={isDoubt ? 'Share your solution...' : 'Add a reply...'}
              rows={3}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <button
              type="submit"
              disabled={loading || !newReply.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
