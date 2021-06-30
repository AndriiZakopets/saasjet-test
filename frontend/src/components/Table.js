import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import useRequest from '../hooks/useRequest';
import s from './Table.module.scss';

function Table({ JQL, statuses }) {
  const [issuesCnt, setIssuesCnt] = useState({});
  const issues = useRequest(
    `/rest/api/3/search?jql=${JQL}&fields=status,assignee&maxResults=100`,
    (el) => el.issues,
  );

  useEffect(() => {
    if (issues instanceof Object) {
      const table = {};
      issues.forEach((issue) => {
        const statusId = issue.fields.status.statusCategory.id;
        const assigneeName = issue.fields.assignee?.displayName ?? 'Unassigned';

        if (!(table[assigneeName] instanceof Object)) {
          table[assigneeName] = {};
        }

        if (statusId in table[assigneeName]) {
          table[assigneeName][statusId] += 1;
        } else {
          table[assigneeName][statusId] = 1;
        }
      });

      setIssuesCnt(table);
    }
  }, [issues]);

  return (
    issues && (
      <table>
        <tr>
          <th>\</th>
          {statuses.map((status) => (
            <th>{status.name}</th>
          ))}
        </tr>
        {Object.keys(issuesCnt).map((assigneeName) => {
          return (
            <tr>
              <th>{assigneeName}</th>
              {statuses.map((status) => {
                const count = issuesCnt?.[assigneeName]?.[status.id] ?? 0;

                return (
                  <td className={cn({ [s.empty]: count === 0 })}>{count}</td>
                );
              })}
            </tr>
          );
        })}
      </table>
    )
  );
}

export default Table;
