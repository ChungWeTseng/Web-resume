const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/ChungWeTseng/tsewe.github.io.git',
    user: {
      name: process.env.GITHUB_ACTOR,
      email: process.env.GITHUB_ACTOR + '@users.noreply.github.com'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
