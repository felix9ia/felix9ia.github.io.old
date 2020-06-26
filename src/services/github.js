import { request } from '@/utils/request';
import { CONFIG } from '@/config';

const label_url = `/repos/${CONFIG.owner}/${CONFIG.repo}/labels`;
const issue_url = `/repos/${CONFIG.owner}/${CONFIG.repo}/issues`;
/**
 * 获取 label
 * https://developer.github.com/v3/issues/labels/#list-labels-for-a-repository
 */
export async function getLabels() {
  return await request.get(label_url, {
    params: {},
  });
}

export async function getIssueDetailByNumber(id) {
  const issueUrlWithId = `${issue_url}/${id}`;
  console.log('ss');
  return await request.get(issueUrlWithId, {
    params: {},
  });
}

/**
 * 通过 label 获取 issues
 * https://developer.github.com/v3/issues/#list-issues-assigned-to-the-authenticated-user
 * @returns {Promise<*>}
 */
export async function getIssuesByLabel(labelName) {
  return await request.get(issue_url, {
    params: {
      labels: labelName,
    },
  });
}
