import RenderAuthorize from '@/components/Authorized';
import { getAuthority } from './authority';
/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/no-mutable-exports */

let Authorized = RenderAuthorize(getAuthority()); // Reload the rights component

const reloadAuthorized = () => {
  Authorized = RenderAuthorize(getAuthority());
};
/**
 * hard code
 * block need it。
 */
//方法绑定到 window上，方便使用
window.reloadAuthorized = reloadAuthorized;
export { reloadAuthorized };
export default Authorized;
