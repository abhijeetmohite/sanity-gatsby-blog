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
                  buildHookId: '5fd99ef20bf0a25fb86cb3f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k5ypeh5g',
                  apiId: '2c101301-a639-4b2a-91f4-ee11befee27a'
                },
                {
                  buildHookId: '5fd99ef3f09e845aadb13cd5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f1uz2hp3',
                  apiId: 'a75a9944-6842-4b2b-8687-638a20300851'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abhijeetmohite/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f1uz2hp3.netlify.app', category: 'apps' }
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
