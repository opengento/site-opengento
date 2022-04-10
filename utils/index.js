/* eslint-disable no-useless-escape */
/* eslint-disable no-prototype-builtins */

// JSON Parse
export function parsesJSON (data = '') {
  return JSON.parse(JSON.stringify(data))
}
