/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/no-mutable-exports */
let CURRENT = 'NULL';

/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 *
 * 传入Authorized返回Authorized
 * 主要是通过判断Authorized来判定CURRENT
 * 然后export CURRENT
 *
 * 类似 柯里化函数
 * 第一个是Authorized 第二个是当前currentAuthority
 * 第一个参看  const RenderAuthorize = renderAuthorize(Authorized);   src/components/Authorized/index.jsx
 * RenderAuthorize 实际上还是Authorized
 * 第二个参看 let Authorized = RenderAuthorize(getAuthority());   src/utils/Authorized.js
 * getAuthority()就是获取本地的，返回currentAuthority
 *
 */
const renderAuthorize = (Authorized) => (currentAuthority) => {
  if (currentAuthority) {
    if (typeof currentAuthority === 'function') {
      CURRENT = currentAuthority();
    }

    if (
      Object.prototype.toString.call(currentAuthority) === '[object String]' ||
      Array.isArray(currentAuthority)
    ) {
      CURRENT = currentAuthority;
    }
  } else {
    CURRENT = 'NULL';
  }
  //还是返回它
  return Authorized;
};

export { CURRENT };
export default (Authorized) => renderAuthorize(Authorized);
