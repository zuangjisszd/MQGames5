---
title: Mutations
pageTitle: "Implementing Mutations with a Ruby GraphQL Server Tutorial"
description: "Learn best practices for implementing GraphQL mutations with Ruby and graphql-ruby. You can test your implementation in a GraphiQL Playground."
---

### Mutation for Creating Links

Setting up mutations is as easy as queries, following a very similar process.

All [GraphQL mutations](http://graphql.org/learn/queries/#mutations) start from a root type called **Mutation**.

This type is auto generated in the file `app/graphql/types/mutation_type.rb`:

```ruby(path=".../graphql-ruby/app/graphql/types/mutation_type.rb")
module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
```

This type is a placeholder for all GraphQL mutations.

To prevent any error when you first start your GraphQL project, it is generated with a dummy `testField` field.  
You will be able to remove it as soon as you add your own mutation below.

The mutation type is automatically exposed in your schema:

```ruby(path=".../graphql-ruby/app/graphql/graphql_tutorial_schema.rb")
class GraphqlTutorialSchema < GraphQL::Schema
  query Types::QueryType
  mutation Types::MutationType
end
```

### Resolvers with Arguments

Now add a resolver for `createLink`.

For this purpose, you'll use a [Mutation class](http://graphql-ruby.org/mutations/mutation_classes.html), as mentioned earlier.

<Instruction>

Create a new file - `app/graphql/mutations/create_link.rb`:

```ruby(path=".../graphql-ruby/app/graphql/mutations/create_link.rb")
module Mutations
  # `BaseMutation` was created from `rails generate graphql:install`
  class CreateLink < BaseMutation
    # arguments passed to the `resolved` method
    argument :description, String, required: true
    argument :url, String, required: true

    # return type from the mutation
    type Types::LinkType

    def resolve(description: nil, url: nil)
      Link.create!(
        description: description,
        url: url,
      )
  end
end
```

</Instruction>

<Instruction>

Then expose this mutation in `app/graphql/types/mutation_type.rb`:

```ruby(path=".../graphql-ruby/app/graphql/types/mutation_type.rb")
module Types
  class MutationType < BaseObject
    field :create_link, mutation: Mutations::CreateLink
  end
end```

</Instruction>

### Testing with Playground

To test, just restart the server again and use the new mutation with GraphiQL:

![](http://i.imgur.com/pHNRZlG.png)

### Testing with Unit Test

It's a good practice in Ruby to unit test your resolver objects.

Here is an example of `Resolvers::CreateLink` test:

```ruby(path=".../graphql-ruby/test/graphql/mutations/create_link_test.rb")
require 'test_helper'

class Mutations::CreateLinkTest < ActiveSupport::TestCase
  def perform(user: nil, **args)
    Mutations::CreateLink.new(object: nil, context: {}).resolve(args)
  end

  test 'create a new link' do
    user = create :user

    link = perform(
      url: 'http://example.com',
      description: 'description',
      user: user
    )

    assert link.persisted?
    assert_equal link.description, 'description'
    assert_equal link.url, 'http://example.com'
    assert_equal link.user, user
  end
end
```

