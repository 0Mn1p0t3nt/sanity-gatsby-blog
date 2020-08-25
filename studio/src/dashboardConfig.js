export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4517ec84a7316969c5dd92',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-afdyo91z',
                  apiId: 'bcc77a7a-6759-4e7b-abae-8f9a42e5d2c2'
                },
                {
                  buildHookId: '5f4517ec05afac72c8f450d1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5f1g4w68',
                  apiId: '9b2d676a-eb20-4d96-b0f1-3245b2e6ab0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/0Mn1p0t3nt/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5f1g4w68.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
