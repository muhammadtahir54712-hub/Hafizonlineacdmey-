import React, { useState } from 'react';
import { Palette, Check, Sparkles, X, Sliders } from 'lucide-react';
import { useTheme, THEME_PALETTES } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, setCustomPrimaryColor, isCustomColor, customHex } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Theme Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-lg border border-white/60 bg-white/95 text-[#173B35] hover:scale-105 transition-all text-xs font-semibold backdrop-blur-md cursor-pointer"
          title="Change Color Theme"
          aria-label="Change Color Theme"
        >
          <div
            className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
            style={{ backgroundColor: currentTheme.primary }}
          />
          <span className="hidden sm:inline">Color Theme</span>
          <Palette className="w-3.5 h-3.5 text-[#5E6D68]" />
        </button>
      </div>

      {/* Theme Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#E3EDE7] max-w-md w-full overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#E3EDE7] flex items-center justify-between" style={{ backgroundColor: currentTheme.primarySoft }}>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#173B35]">
                    Select Academy Color Theme
                  </h3>
                  <p className="text-[11px] text-[#5E6D68]">
                    Live real-time preview across all pages
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-[#5E6D68] hover:text-[#173B35] hover:bg-black/5"
                aria-label="Close color panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Presets List */}
            <div className="p-5 space-y-2.5 max-h-[60vh] overflow-y-auto">
              <div className="text-xs font-semibold text-[#5E6D68] uppercase tracking-wider mb-2">
                Curated Islamic Educational Palettes:
              </div>

              {THEME_PALETTES.map((palette) => {
                const isSelected = !isCustomColor && currentTheme.id === palette.id;
                return (
                  <button
                    key={palette.id}
                    onClick={() => {
                      setTheme(palette.id);
                    }}
                    type="button"
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-2 shadow-sm font-semibold'
                        : 'border-[#E3EDE7] hover:border-gray-300 hover:bg-gray-50/80'
                    }`}
                    style={{
                      borderColor: isSelected ? palette.primary : undefined,
                      backgroundColor: isSelected ? palette.primarySoft : undefined,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Preview Swatch */}
                      <div className="flex items-center -space-x-1">
                        <div
                          className="w-6 h-6 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: palette.primary }}
                        />
                        <div
                          className="w-5 h-5 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: palette.accent }}
                        />
                        <div
                          className="w-4 h-4 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: palette.primaryBorder }}
                        />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-[#173B35]">
                          {palette.name}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: palette.primary }}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}

              {/* Custom Color Selector */}
              <div className="pt-4 border-t border-[#E3EDE7]">
                <div className="text-xs font-semibold text-[#5E6D68] uppercase tracking-wider mb-2">
                  Or Pick Any Custom Color:
                </div>
                <div className="flex items-center gap-3 bg-[#FBF8F1] p-3 rounded-xl border border-[#E3EDE7]">
                  <input
                    type="color"
                    value={customHex}
                    onChange={(e) => setCustomPrimaryColor(e.target.value)}
                    className="w-9 h-9 rounded-lg border-0 cursor-pointer p-0 bg-transparent"
                    title="Click to choose custom hex color"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#173B35]">
                      Custom Primary Color
                    </div>
                    <div className="text-[11px] text-[#5E6D68] font-mono">
                      {customHex.toUpperCase()}
                    </div>
                  </div>
                  <button
                    onClick={() => setCustomPrimaryColor(customHex)}
                    type="button"
                    className="px-3 py-1.5 text-xs font-medium bg-white border border-[#E3EDE7] rounded-lg hover:bg-gray-50 shadow-xs"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t border-[#E3EDE7] flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="px-5 py-2 text-xs font-semibold text-white rounded-xl shadow-xs cursor-pointer"
                style={{ backgroundColor: currentTheme.primary }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
