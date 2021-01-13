import BookList, { ALL_BOOKS_QUERY } from "../components/bookList";
import { initializeApollo } from "../lib/apolloClient";

const IndexPage = () => {
  return (
    <div>
      <BookList />
    </div>
  )
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_BOOKS_QUERY,
  });


  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
