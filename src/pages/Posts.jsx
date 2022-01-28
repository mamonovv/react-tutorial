import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import Postfilter from '../components/PostFilter'
import Postform from '../components/Postform'
import Postlist from '../components/Postlist'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/Loader/Loader'
import MyModal from '../components/UI/MyModal/MyModal'
import Pagination from '../components/UI/pagination/pagination'
import Myselect from '../components/UI/select/MySelect'
import { useFetching } from '../hooks/useFetching'
import { useObserver } from '../hooks/useObserver'
import { usePosts } from '../hooks/usePosts'
import { getPageCount } from '../utils/pages'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  // @ts-ignore
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    }
  )

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    // @ts-ignore
    fetchPosts(limit, page)
  }, [page, limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MyModal>
      <Postfilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError} </h1>}
      <Myselect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      <Postlist
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Список постов'}
      />

      <div ref={lastElement} style={{ height: 20, background: 'red' }} />
      {isPostLoading && (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  )
}

export default Posts
