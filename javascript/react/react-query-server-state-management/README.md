- [1. Creating Queries and Loading/Error States](#1-creating-queries-and-loadingerror-states)
  - [1.1. First project: Blog-em Ipsum](#11-first-project-blog-em-ipsum)
  - [1.2. Creating queries with useQuery](#12-creating-queries-with-usequery)
  - [1.3. Handling Loading and Error states](#13-handling-loading-and-error-states)
    - [1.3.1. `isFetching` vs `isLoading`](#131-isfetching-vs-isloading)
  - [1.4. React Query Dev Tools](#14-react-query-dev-tools)
  - [1.5. staleTime vs cacheTime](#15-staletime-vs-cachetime)
    - [1.5.1. Stale Data](#151-stale-data)
    - [1.5.2. staleTime vs cacheTime](#152-staletime-vs-cachetime)
- [2. Pagination, Pre-fetching and Mutations](#2-pagination-pre-fetching-and-mutations)
  - [2.1. Code Quiz! Create Query for Blog Comments](#21-code-quiz-create-query-for-blog-comments)
  - [2.2. Query Keys](#22-query-keys)
  - [2.3. Pagination](#23-pagination)
  - [2.4. Pre-fetching Data](#24-pre-fetching-data)
  - [2.5. isLoading vs isFetching](#25-isloading-vs-isfetching)
  - [2.6. Mutations](#26-mutations)
  - [Summary](#summary)

# 1. Creating Queries and Loading/Error States

## 1.1. First project: Blog-em Ipsum

1. Get data from [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
2. React Query concepts
   1. Fetching data
   2. Loading / error states
   3. React Query dev tools
   4. Pagination
   5. Prefetching
   6. Mutations

## 1.2. Creating queries with useQuery

1. In `App.jsx`, we import and create an instance of `queryClient1` and share it with the `QueryClientProvider` as the context to the whole app.

   ```jsx
   import { QueryClient, QueryClientProvider } from 'react-query';
   import { ReactQueryDevtools } from 'react-query/devtools';

   import { Posts } from './Posts';
   import './App.css';

   const queryClient = new QueryClient();

   function App() {
     return (
       // provide React Query client to App
       <QueryClientProvider client={queryClient}>
         <div className="App">
           <h1>Blog Posts</h1>
           <Posts />
           <ReactQueryDevtools />
         </div>
       </QueryClientProvider>
     );
   }

   export default App;
   ```

2. In each component, we can use `useQuery` to by giving a "key" and callback function to do queries.

   ```js
   // src/Posts.jsx
   const fetchPosts = async () => {
     const response = await fetch(
       'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
     );

     return response.json();
   };

   const { data } = useQuery('posts', fetchPosts);

   if (!data) return null;

   // return actual components when data is fetched
   // return // ...
   ```

3. However, since fetch request is an async function, we'd handle the condition when `data` is still empty or on processing.

## 1.3. Handling Loading and Error states

1. From `useQuery`, multiple properties are provided to check the states of the process.
2. For example, we can check on
   1. `isLoading` to check if the process is still ongoing.
   2. `isError` to check if the process is error.
   3. `error` to show the issue with the query request.

### 1.3.1. `isFetching` vs `isLoading`

4. `isFetching` means the async query function hasn't yet resolved
5. `isLoading` is the subset of `isFetching` and means there's no cached data and the fetching process is still ongoing.
6. In simple cases and scenarios, there's no big difference between the 2.

   ```jsx
   // src/Posts.jsx
   import { useState } from 'react';
   import { useQuery } from 'react-query';

   import { PostDetail } from './PostDetail';
   const maxPostPage = 10;

   async function fetchPosts() {
     const response = await fetch(
       'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
     );
     return response.json();
   }

   export function Posts() {
     const [currentPage, setCurrentPage] = useState(0);
     const [selectedPost, setSelectedPost] = useState(null);

     // replace with useQuery
     const { data, isError, error, isLoading } = useQuery('posts', fetchPosts);

     if (isLoading) return <h3>Loading...</h3>;
     if (isError)
       return (
         <>
           <h3>Oops, something went wrong</h3>
           <p>{error.toString()}</p>
         </>
       );

     return (
       <>
         <ul>
           {data.map((post) => (
             <li
               key={post.id}
               className="post-title"
               onClick={() => setSelectedPost(post)}
             >
               {post.title}
             </li>
           ))}
         </ul>
         <div className="pages">
           <button disabled onClick={() => {}}>
             Previous page
           </button>
           <span>Page {currentPage + 1}</span>
           <button disabled onClick={() => {}}>
             Next page
           </button>
         </div>
         <hr />
         {selectedPost && <PostDetail post={selectedPost} />}
       </>
     );
   }
   ```

## 1.4. React Query Dev Tools

1. Shows queries (by key)
   1. Status of queries
   2. last updated timestamp
2. Data explorer
3. Query explorer
4. [https://react-query.tanstack.com/devtools](https://react-query.tanstack.com/devtools)
5. To use the feature, we simply import `ReactQueryDevtools` and use as a component in `App.js`.

   ```jsx
   import { QueryClient, QueryClientProvider } from 'react-query';
   import { ReactQueryDevtools } from 'react-query/devtools';

   import { Posts } from './Posts';
   import './App.css';

   const queryClient = new QueryClient();

   function App() {
     return (
       // provide React Query client to App
       <QueryClientProvider client={queryClient}>
         <div className="App">
           <h1>Blog Posts</h1>
           <Posts />
           <ReactQueryDevtools />
         </div>
       </QueryClientProvider>
     );
   }

   export default App;
   ```

## 1.5. staleTime vs cacheTime

### 1.5.1. Stale Data

1. Data refetch only triggers for stale data
   1. For example, component remount, window refocus
   2. `staleTime` translates to "max age"
   3. How to tolerate data potentially being out of date
2. When using `useQuery`, we can give a 3rd argument as the "options".
3. The default `staleTime` is set to `0` by default.

### 1.5.2. staleTime vs cacheTime

1. `staleTime` is for re-fetching
2. Cache is for data that might be re-used later
   1. query goes into "cold storage" if there's no active `useQuery`
   2. cache data expires after `cacheTime` (default: five minutes)
      1. how long it's been since the last active `useQuery`
   3. After the cache expires, the data is garbage collected
3. Cache is backup data to display while fetching

# 2. Pagination, Pre-fetching and Mutations

## 2.1. Code Quiz! Create Query for Blog Comments

1. `/src/PostDetails.js`
2. Run `useQuery`
3. Account for error, loading and results
4. Be sure to choose a different query key
   1. React Query uses the key for cache / stale time
5. query function needs `postId` parameter - `() => fetchComments(post.id)`. We can't pass the query function with ID directly as it will become the returned value.
6. Warning: commnets won't refresh when the user clicks on different posts.
   1. This issue will be fix in the follwing lecture.

## 2.2. Query Keys

1. The comments from the last lecture shows that the data isn't refreshed though the user has changed the "post".
2. Every query uses the same key as "comments"
3. Data for queries with known keys only refetched upon trigger
   1. component remount
   2. window refocus
   3. running refetch function
   4. automated refetch
   5. query invalidation after a mutation
4. Solution
   1. Option: remove programmatically for every new title
   2. No reason to remove data from the cache
   3. Query includes post ID
      1. Cache on a per-query basis
      2. don't share cache for any "comments" query regardless of post ID
   4. What we really want: label the query for each post separately
5. Array as Query Key
   1. Pass array for the query key, not just a string
   2. Treat the query key as a dependency array
      1. When the key changes, create a new query
   3. Query function values should be part of the key
6. Though we can use template literal to create unique keys for queries, we can onbtain more benefits when the id or params are much more complicated for the queries.
7. For example, we can pass not only the string value but an object with the params passing to the query.
8. [https://react-query.tanstack.com/guides/query-keys#array-keys](https://react-query.tanstack.com/guides/query-keys#array-keys)

## 2.3. Pagination

1. Track current page in component state
2. Use query keys that include the page number. For example, `["pages", currentPage]`
3. User clicks "next page" or "previous page" button
   1. update `currentPage` state
   2. fire off new query

```jsx
// src/Posts.jsx
import { useState } from 'react';
import { useQuery } from 'react-query';

import { PostDetail } from './PostDetail';
const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery(
    ['posts', currentPage],
    () => fetchPosts(currentPage)
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((val) => val - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => setCurrentPage((val) => val + 1)}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
```

## 2.4. Pre-fetching Data

1. In regular cases, the query to fetch posts only triggers when the user clicks on the "previous" or "next" page button.
2. To enhance user experience, we can pre-fetch the data before the user needs it.
3. Pre-fetch
   1. Adds data to cache
   2. Automatically stale (configurable)
   3. shows while re-fetching
      1. as long as cache hasn't expired
4. Pre-fetching can be used for any anticipated data needs, not just pagination. [More details](https://react-query.tanstack.com/reference/QueryClient#queryclientprefetchquery)
5. In this case, we put `useQueryClient` in `useEffect` hook that the app only trigger queries when the `currentPage` state changes.

```jsx
// src/Posts.jsx
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { PostDetail } from './PostDetail';
const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['posts', nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);

  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery(
    ['posts', currentPage],
    () => fetchPosts(currentPage),
    { staleTime: 2000, keepPreviousData: true }
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((val) => val - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => setCurrentPage((val) => val + 1)}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
```

## 2.5. isLoading vs isFetching

1. `isFetching` - the async query function hasn't been resolved
2. `isLoading` - no cached data, plus `isFetching`
3. `isLoading` is a **subset** of `isFetching`
4. Therefore, in the posts cases, if we change the UI to check from `isLoading` to `isFetching`, the page will always show the loading indicator UI though there's cached data to show users.
5. The main point to use `isLoading` is to do silent refresh that performs background update and smooth user experience.

## 2.6. Mutations

1. Mutation is to make a network call that changes data on the server
   1. "jsonplaceholder" API doesn't change server
   2. go through the mechanics of making the change
2. Day Spa app will demonstrate showing changes to user
   1. Optimistic updates (assume change will happen)
   2. Update React Query cache with data returned from the server
   3. Trigger re-fetch of relevant data (invalidation)
3. In this case, we can use `useMutation`
   1. returns `mutate` function
   2. doesn't need query key
   3. `isLoading` but no `isFetching`
   4. by default, it has not retires (configurable)
   5. [More details](https://react-query.tanstack.com/guides/mutations)

```jsx
// src/PostDetail.jsx
import { useQuery, useMutation } from 'react-query';

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: 'DELETE' }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: 'PATCH', data: { title: 'REACT QUERY FOREVER!!!!' } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  const { data, isLoading, isError, error } = useQuery(
    ['comments', post.id],
    () => fetchComments(post.id)
  );

  const deleteMutation = useMutation((postId) => deletePost(postId));

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>{error.toString()}</h1>;

  if (!data) return null;

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>
        Delete
      </button> <button>Update title</button>
      {deleteMutation.isError && (
        <p style={{ color: 'red' }}>Error deleting the post</p>
      )}
      {deleteMutation.isLoading && (
        <p style={{ color: 'purple' }}>Deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: 'green' }}>Post has (not) been deleted</p>
      )}
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
```

## Summary

1. Install `reacgt-query` package and create "QueryClient" and "QueryProvider".
2. `useQuery` for data - return object also includes `isLoading` / `isFetching` and `error`.
3. `staleTime` for whether or not to re-fetch (on trigger).
4. `cacheTime` for how long to hold on to the data after inactivity.
5. query keys as dependency arrays.
6. pagination and pre-fetching.
7. `useMutation` for server-side effects.
