import React from 'react'
import MainLayout from '../../components/MainLayout'
import CommentsContainer from '../../components/comments/CommentsContainer'
import PostContainer from './container/PostContainer'

const ForumPostPage = () => {
  return (
    <MainLayout>
      <section className=''>
        <PostContainer />
        <CommentsContainer className='mt-10' loggedInUserId="a"/>
      </section>
    </MainLayout>
  )
}

export default ForumPostPage