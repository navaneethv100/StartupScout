import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard';
async function page({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  const posts = [{
      _created: new Date(),
      views: 100,
      author: { _id: 1, name: "Navaneeth" },
      _id: '123',
      description: 'This is a description',
      image: '/images/post-1.png',
      category: 'Technology',
      title: 'Test',
    }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Startup Scouting, <br /> Your Path to Tech Opportunity
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Piches, and Get Notified in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className='section_container'>
        <p className='text-30-semibold'>
           {query ?  `Search results for "${query}"` : 'Latest Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => {
              return (
                <StartupCard key={post._id} post={post} />
              )
            })
          ) : (
            <p className='text-20-regular'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default page