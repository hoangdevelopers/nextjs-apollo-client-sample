import { gql, useQuery } from "@apollo/client";

export const ALL_BOOKS_QUERY = gql`
  query {
    books {
      title
      author
    }
  }
`;


export default function BookList() {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);


  console.log(data);

  return (
    <div>
      {
        data?.books.map(book => (
          <div key={book.title}>
            {book.title}
          </div>
        ))
      }
    </div>
  );
}
