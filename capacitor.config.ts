import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.892cfe1c03114485952d0b4055b8425b',
  appName: 'ScientiaLink - Scientific Research Platform',
  webDir: 'dist',
  server: {
    url: 'https://892cfe1c-0311-4485-952d-0b4055b8425b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#15803d',
      androidSplashResourceName: 'splash',
      showSpinner: true,
      spinnerColor: '#ffffff'
    }
  }
};

export default config;