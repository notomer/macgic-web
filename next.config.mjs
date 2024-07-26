// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

export default {
  output: 'export',
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
};