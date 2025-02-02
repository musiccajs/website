import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'main',
	name: 'Main library',
	global: 'Musicca',
	repo: 'musiccajs/musicca',
	defaultTag: 'main',
	branchFilter: (branch: string) =>
		!branchBlacklist.has(branch) && !branch.startsWith('dependabot/') && !branch.startsWith('renovate/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/^v/, ''), '2.0.0'),
});
