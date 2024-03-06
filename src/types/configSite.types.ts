// Generated by https://quicktype.io

export interface ConfigInterface {
  siteName: string;
  site: string;
  sofwareName: string;
  logo: string;
  icons: Icons;
  menu: Menu[];
  leftMenu: LeftMenu[];
  themes: Themes;
}

export interface Icons {
  help: string;
  close: string;
  open: string;
}

export interface LeftMenu {
  id: number;
  name: string;
  active: boolean;
  url: string;
  icon: string;
}

export interface Menu {
  id: number;
  name: string;
  url: string;
  active: boolean;
}

export interface Themes {
  default: Themevalues;
}

export interface Themevalues {
  color: string;
  backgroundColor: string;
  headerBackground: string;
  headerColor: string;
  leftMenuBackground: string;
  leftMenuColor: string;
  buttonInfoColor: string;
  buttonInfoBackground: string;
  oneFractionElementBackground: string;
  towFractionElementBackground: string;
  towFractionElementBorder: string;
  tableBackground: string;
  active?: string;
}
