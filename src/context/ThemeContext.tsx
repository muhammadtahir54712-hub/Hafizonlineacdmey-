import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemePalette {
  id: string;
  name: string;
  primary: string;
  primaryDark: string;
  primarySoft: string;
  primaryBorder: string;
  accent: string;
  accentLight: string;
  canvas: string;
  surface: string;
  textMain: string;
  textMuted: string;
  borderSubtle: string;
}

export const THEME_PALETTES: ThemePalette[] = [
  {
    id: 'emerald',
    name: 'Royal Emerald & Gold',
    primary: '#0F5C4D',
    primaryDark: '#123F38',
    primarySoft: '#EEF7F2',
    primaryBorder: '#DDEDE5',
    accent: '#B99A5B',
    accentLight: '#DFCA9A',
    canvas: '#FBF8F1',
    surface: '#F5F0E7',
    textMain: '#173B35',
    textMuted: '#5E6D68',
    borderSubtle: '#E3EDE7',
  },
  {
    id: 'sapphire',
    name: 'Midnight Sapphire & Gold',
    primary: '#1B365D',
    primaryDark: '#0F223D',
    primarySoft: '#EEF4FA',
    primaryBorder: '#D5E2F0',
    accent: '#C29B38',
    accentLight: '#E5C16C',
    canvas: '#F8FAFC',
    surface: '#EEF2F6',
    textMain: '#0F223D',
    textMuted: '#566B82',
    borderSubtle: '#DCE4ED',
  },
  {
    id: 'maroon',
    name: 'Andalusian Maroon & Brass',
    primary: '#5C1D24',
    primaryDark: '#3D1016',
    primarySoft: '#FDF2F3',
    primaryBorder: '#F2D8DA',
    accent: '#C5A059',
    accentLight: '#E8CA8B',
    canvas: '#FCF9F6',
    surface: '#F7F0E8',
    textMain: '#331417',
    textMuted: '#6E5557',
    borderSubtle: '#EBDCDD',
  },
  {
    id: 'teal',
    name: 'Persian Teal & Warm Gold',
    primary: '#0E6666',
    primaryDark: '#094747',
    primarySoft: '#EDF7F7',
    primaryBorder: '#D1EAE9',
    accent: '#C49746',
    accentLight: '#E5BF77',
    canvas: '#FBF9F5',
    surface: '#F3EFE6',
    textMain: '#103636',
    textMuted: '#576E6E',
    borderSubtle: '#DCE7E6',
  },
  {
    id: 'indigo',
    name: 'Royal Indigo & Amber',
    primary: '#2B3A67',
    primaryDark: '#1B2442',
    primarySoft: '#EFF3FA',
    primaryBorder: '#D6E0F0',
    accent: '#D4AF37',
    accentLight: '#F3D267',
    canvas: '#FAFAFD',
    surface: '#F0F2F8',
    textMain: '#19233C',
    textMuted: '#5C677D',
    borderSubtle: '#DFE5F2',
  },
];

interface ThemeContextType {
  currentTheme: ThemePalette;
  setTheme: (themeId: string) => void;
  setCustomPrimaryColor: (color: string) => void;
  isCustomColor: boolean;
  customHex: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePalette>(() => {
    const saved = localStorage.getItem('hafiz_theme_id');
    const found = THEME_PALETTES.find((t) => t.id === saved);
    return found || THEME_PALETTES[0];
  });
  const [isCustom, setIsCustom] = useState(false);
  const [customHex, setCustomHex] = useState('#0F5C4D');

  const applyThemeToDOM = (t: ThemePalette) => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', t.primary);
    root.style.setProperty('--color-primary-dark', t.primaryDark);
    root.style.setProperty('--color-primary-soft', t.primarySoft);
    root.style.setProperty('--color-primary-border', t.primaryBorder);
    root.style.setProperty('--color-accent', t.accent);
    root.style.setProperty('--color-accent-light', t.accentLight);
    root.style.setProperty('--color-canvas', t.canvas);
    root.style.setProperty('--color-surface', t.surface);
    root.style.setProperty('--color-text-main', t.textMain);
    root.style.setProperty('--color-text-muted', t.textMuted);
    root.style.setProperty('--color-border-subtle', t.borderSubtle);

    // Also update body background and text color
    document.body.style.backgroundColor = t.canvas;
    document.body.style.color = t.textMain;
  };

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  const setTheme = (themeId: string) => {
    const selected = THEME_PALETTES.find((t) => t.id === themeId);
    if (selected) {
      setThemeState(selected);
      setIsCustom(false);
      localStorage.setItem('hafiz_theme_id', selected.id);
    }
  };

  // Helper to adjust color brightness
  const adjustBrightness = (hex: string, percent: number) => {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  };

  const setCustomPrimaryColor = (hex: string) => {
    setCustomHex(hex);
    setIsCustom(true);
    const customPalette: ThemePalette = {
      id: 'custom',
      name: 'Custom Brand Color',
      primary: hex,
      primaryDark: adjustBrightness(hex, -20),
      primarySoft: adjustBrightness(hex, 88),
      primaryBorder: adjustBrightness(hex, 75),
      accent: '#C5A059',
      accentLight: '#E8CA8B',
      canvas: '#FBF8F1',
      surface: '#F5F0E7',
      textMain: '#1A2E28',
      textMuted: '#586A63',
      borderSubtle: adjustBrightness(hex, 82),
    };
    setThemeState(customPalette);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        setTheme,
        setCustomPrimaryColor,
        isCustomColor: isCustom,
        customHex,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
