export default {
  widgets: [
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
                  buildHookId: '60b6301a98de69828f790ca8',
                  title: 'Sanity Studio',
                  name: 'sanity-testing-studio',
                  apiId: '23d6823b-25a4-49b0-a4ce-96cccc052ab0'
                },
                {
                  buildHookId: '60b6301aef2afdbf86a9b8cc',
                  title: 'Blog Website',
                  name: 'sanity-testing',
                  apiId: '16adf202-f120-4db8-ba25-97a17298fb13'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/twoarmslarry1/sanity-testing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-testing.netlify.app', category: 'apps'}
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
