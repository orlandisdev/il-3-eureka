import styled from "styled-components";
import { ConfigInterface } from "../types/configSite.types";
import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { routerMenu } from "../routes/routes";
import { RoutesInterface } from "../interfaces/routes.interface";
interface Props {
  data: ConfigInterface;
}
interface IProps {
  collapse: boolean;
}

export const Menu = ({ data }: Props) => {
  const [collapse, setCollapse] = useState(false);

  const {
    icons: { help, close, open },
  } = data;
  const { leftMenuBackground, leftMenuColor } = useTheme();
  const Menu = styled.nav<IProps>`
    background-color: ${leftMenuBackground};
    color: ${leftMenuColor};
    height: 93.5vh;
    padding: 0 20px;
    li {
      width: 100%;
      height: 45px;
      text-align: center;
      margin: 15px 0;

      img {
        margin: 0 auto;
      }
    }
    .footerIcons {
      margin: 200px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      img {
        margin: 0 auto;
      }
      .helpContent {
        span {
          margin-bottom: 30px;
        }
      }
    }

    .closeLeftMenu {
      margin-top: 10px;
      padding: 15px;
    }
    .arrowsMenu {
      margin-top: 15px;
    }
  `;
  const show = {
    opacity: 1,
    transitionEnd: {
      display: "block",
    },
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };
  return (
    <Menu collapse={collapse}>
      <ul>
        {routerMenu.map((menu: RoutesInterface) => (
          <li key={menu.id}>
            <Link to={menu.path}>
              <img width="20" height="20" src={menu.icon} alt="" />
              <motion.div className="box" animate={!collapse ? show : hide}>
                {menu.name}
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="footerIcons">
        <button className="helpContent">
          <img width="32" height="32" src={help} alt="" />
          <motion.div className="box" animate={!collapse ? show : hide}>
            Ayuda
          </motion.div>
        </button>
        <div className="arrowsMenu">
          <button
            className="closeLeftMenu"
            onClick={() => setCollapse(!collapse)}
          >
            <img width="15" height="15" src={!collapse ? close : open} alt="" />
          </button>
        </div>
      </div>
    </Menu>
  );
};
