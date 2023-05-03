import 'dotenv/config';

export default {
	expo: {
		name: 'Fag Drill',
		slug: 'FagDrill',
		version: '1.1.0',
		orientation: 'portrait',
		icon: './src/assets/images/icon.png',
		userInterfaceStyle: 'light',
		splash: {
			image: './src/assets/images/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
			bundleIdentifier: "FD.fag.drill",
			buildNumber: "2"
		},
		
		android: {
			package: "FD.fag.drill",
			adaptiveIcon: {
				foregroundImage: './src/assets/images/adaptive-icon.png',
				backgroundColor: '#FFFFFF',
			},
		},
		web: {
			favicon: './src/assets/images/favicon.png',
		},
		extra: {
			firebaseApiKey: process.env.FIREBASE_API_KEY,
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.FIREBASE_APP_ID,
			eas: {
				projectId: "2683e6a3-06cc-40ee-addc-d5099698bb8c",
			  },
		},
	},
};
