import data from '../../../config.json';
export function useTheme() {
	const { themes } = data;
	const defaultTheme = themes.default;
	const themeActive = Object.values(themes).filter(
		(theme) => theme.active
	)[0];
	themeActive;
	const setTheme = themeActive ?? defaultTheme;
	return {
		...setTheme,
	};
}
