import React from 'react'
import MainLayout from '../../components/MainLayout'
import PostContainer from './container/PostContainer'

const ForumPostPage = () => {
  return (
    <MainLayout>
      <section className=''>
        <PostContainer />
      </section>
    </MainLayout>
  )
}

export default ForumPostPage