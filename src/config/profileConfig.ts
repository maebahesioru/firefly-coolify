import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "assets/images/avatar.png",

	// 名字
	name: "十字架_mania",

	// 个人签名
	bio: "ヒカマーです",

	links: [
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:pikomaeba@gmail.com",
			showName: true,
		},
		{
			name: "X",
			icon: "fa7-brands:x-twitter",
			url: "https://x.com/maebahesioru2",
			showName: true,
		},
		{
			name: "X (sub)",
			icon: "fa7-brands:x-twitter",
			url: "https://x.com/okubahesioru",
			showName: true,
		},
		{
			name: "X (ふくあか)",
			icon: "fa7-brands:x-twitter",
			url: "https://x.com/hikain_lib",
			showName: true,
		},
		{
			name: "YouTube",
			icon: "fa7-brands:youtube",
			url: "https://www.youtube.com/@maebahesioru",
			showName: true,
		},
		{
			name: "YouTube切り抜き",
			icon: "fa7-brands:youtube",
			url: "https://www.youtube.com/@%E3%83%92%E3%82%AB%E3%83%9E%E3%83%BC%E7%95%8C%E9%9A%88%E3%81%AE%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E5%88%87%E3%82%8A%E6%8A%9C%E3%81%8D",
			showName: true,
		},
		{
			name: "YouTube保管庫",
			icon: "fa7-brands:youtube",
			url: "https://www.youtube.com/@%E3%83%92%E3%82%AB%E3%83%9E%E3%83%BC%E3%82%BA%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E4%BF%9D%E7%AE%A1%E5%BA%AB",
			showName: true,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/maebahesioru",
			showName: true,
		},
		{
			name: "Bluesky",
			icon: "fa7-brands:bluesky",
			url: "https://bsky.app/profile/maebahesioru.bsky.social",
			showName: true,
		},
		{
			name: "Pixiv",
			icon: "simple-icons:pixiv",
			url: "https://www.pixiv.net/users/98487652",
			showName: true,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: true,
		},
	],
};
