import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api.js';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchClick = async () => {
    setLoading(true);
    setError('');
    setPost(null);

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching the post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleFetchClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get post'}
      </button>

      <div className="content">
        {loading && <p>Querying database for post 1...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && post && (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        )}
      </div>
    </div>
  );
}
