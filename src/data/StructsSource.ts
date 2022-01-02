import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'structs',
	name: 'Structs',
	global: 'Structs',
	repo: 'musiccajs/structs',
	defaultTag: 'main',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/^v/, ''), '2.0.0'),
});
