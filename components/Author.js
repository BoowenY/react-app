import { Avatar, Divider } from "antd";
import "../static/style/components/author.css";

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        {" "}
        <Avatar
          size={100}
          src="https://pic4.zhimg.com/v2-7ac56fc534acd52142130d061c209f21_xl.jpg"
          className="photo"
        />
      </div>
      <div className="author-introduction">
        Only The Best Or Go Without
        <Divider className="social">社交账号</Divider>
        <a href="https://github.com/An-Ger">
          <Avatar
            src="https://wx2.sinaimg.cn/mw690/006Eayugly1gfxa0vasj9j30dw0dwglo.jpg"
            size={28}
            className="account-git"
          />
        </a>
        <a href="https://www.zhihu.com/people/An_Ger">
          <Avatar
            src="https://wx1.sinaimg.cn/mw690/006Eayugly1gfx9zvxwf5j30dw0dw0sw.jpg"
            size={28}
            className="account-zh"
          />
        </a>
        <a href="https://wx3.sinaimg.cn/mw690/006Eayugly1gfx9zwiczgj30im0jvta0.jpg">
          <Avatar
            src="https://wx4.sinaimg.cn/mw690/006Eayugly1gfx9zx06p3j30dw0dwmxd.jpg"
            size={28}
            className="account-wx"
          />
        </a>
      </div>
    </div>
  );
};

export default Author;
