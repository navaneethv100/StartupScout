import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';

async function page({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });
  console.log(JSON.stringify(posts, null, 2));


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
            posts.map((post: StartupTypeCard) => {
              return (
                <StartupCard key={post._id} post={post} />
              )
            })
          ) : (
            <p className='text-20-regular'>No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}

export default page