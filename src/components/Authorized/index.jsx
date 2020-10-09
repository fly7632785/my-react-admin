import Authorized from './Authorized';
import Secured from './Secured';
import check from './CheckPermissions';
import renderAuthorize from './renderAuthorize';
//暂未用到
Authorized.Secured = Secured;
//BasicLayout里面用到 核心 检查权限的参数
Authorized.check = check;
//传入Authorized renderAuthorize 还是返回Authorized（不过换了名字为RenderAuthorize）
//RenderAuthorize 还可以传一个参数为：currentAuthority  后面会有 getAuthority()传入 本地化的 currentAuthority
const RenderAuthorize = renderAuthorize(Authorized);
export default RenderAuthorize;
