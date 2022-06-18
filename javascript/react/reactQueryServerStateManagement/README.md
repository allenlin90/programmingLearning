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
    import { QueryClient, QueryClientProvider } from "react-query";
    import { ReactQueryDevtools } from "react-query/devtools";

    import { Posts } from "./Posts";
    import "./App.css";

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
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0")

      return response.json();
    };

    const { data } = useQuery('posts', fetchPosts)

    if(!data) return null;

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
    import { useState } from "react";
    import { useQuery } from "react-query";

    import { PostDetail } from "./PostDetail";
    const maxPostPage = 10;

    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
      );
      return response.json();
    }

    export function Posts() {
      const [currentPage, setCurrentPage] = useState(0);
      const [selectedPost, setSelectedPost] = useState(null);

      // replace with useQuery
      const { data, isError, error, isLoading } = useQuery("posts", fetchPosts);

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
    import { QueryClient, QueryClientProvider } from "react-query";
    import { ReactQueryDevtools } from "react-query/devtools";

    import { Posts } from "./Posts";
    import "./App.css";

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
