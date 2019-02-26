import Types from "./types"

export const schema = new GqlSchema({
  query: new GqlObject({
    name: `Query`,
    description: `The root query for implementing GraphQL queries.`,
    fields: () =>
      Object.assign(
        {},
        // eslint-disable-next-line compat/compat
        ...Object.values(Types)
          .filter(type => !!type.Queries)
          .map(type => type.Queries)
      )
  })
})
