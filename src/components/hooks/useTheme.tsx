import data from '../../../config.json';
import { Clear } from '../../types/configSite.types';
export function useTheme() {
	const { themes } = data;
	const defaultTheme = themes.default;
	const themeActive = Object.values(themes).filter(
		(theme: Clear) => theme?.active
	)[0];
	themeActive;
	const setTheme = themeActive ?? defaultTheme;
	return {
		...setTheme,
	};
}
