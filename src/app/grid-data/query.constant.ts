export class QueryConstant {
  static readonly Query = `
  query Repos($owner: String!, $cursor: String) {
        repositoryOwner(login: $owner) {
          repositories(
            first: 100
            ownerAffiliations: OWNER
            privacy: PUBLIC
            isFork: false
            isLocked: false
            orderBy: { field: NAME, direction: ASC }
            after: $cursor
          ) {
            totalCount
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              id
              name
              description
              stargazerCount
              url
              createdAt
            }
          }
        }
      }
      `;
}

