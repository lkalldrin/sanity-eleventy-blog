export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '624b82eb1a97314d5a909b06',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-p532a91h',
                  apiId: '78a23286-3563-46de-97c0-64a1476e710b'
                },
                {
                  buildHookId: '624b82ecb0a43b4c473368e8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-b6wq7hr7',
                  apiId: 'ca8f0874-9e91-4036-a51c-a2d6987430c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lkalldrin/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-b6wq7hr7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
