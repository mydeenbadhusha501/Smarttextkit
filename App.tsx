/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Notepad from './pages/Notepad';
import WordCounter from './pages/WordCounter';
import CharacterCounter from './pages/CharacterCounter';
import CaseConverter from './pages/CaseConverter';
import SentenceCounter from './pages/SentenceCounter';
import ParagraphCounter from './pages/ParagraphCounter';
import TextReverser from './pages/TextReverser';
import AlphabeticalSorter from './pages/AlphabeticalSorter';
import RandomNumberGenerator from './pages/RandomNumberGenerator';
import RandomPasswordGenerator from './pages/RandomPasswordGenerator';
import CapitalizeFirstLetter from './pages/CapitalizeFirstLetter';
import DiffChecker from './pages/DiffChecker';
import BulletPointGenerator from './pages/BulletPointGenerator';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Sitemap from './pages/Sitemap';
import ReadingTimeCalculator from './pages/ReadingTimeCalculator';
import ImageCompressor from './pages/ImageCompressor';
import SimpleCalculator from './pages/SimpleCalculator';
import PercentageCalculator from './pages/PercentageCalculator';
import AgeCalculator from './pages/AgeCalculator';
import DiscountCalculator from './pages/DiscountCalculator';
import SquareRootCalculator from './pages/SquareRootCalculator';
import AspectRatioCalculator from './pages/AspectRatioCalculator';
import FaviconGenerator from './pages/FaviconGenerator';
import ImageConverter from './pages/ImageConverter';
import ImageUpscaler from './pages/ImageUpscaler';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="online-notepad" element={<Notepad />} />
          <Route path="word-counter" element={<WordCounter />} />
          <Route path="character-counter" element={<CharacterCounter />} />
          <Route path="case-converter" element={<CaseConverter />} />
          
          <Route path="sentence-counter" element={<SentenceCounter />} />
          <Route path="paragraph-counter" element={<ParagraphCounter />} />
          <Route path="text-reverser" element={<TextReverser />} />
          <Route path="alphabetical-sorter" element={<AlphabeticalSorter />} />
          <Route path="number-generator" element={<RandomNumberGenerator />} />
          <Route path="password-generator" element={<RandomPasswordGenerator />} />
          
          <Route path="capitalize-first-letter" element={<CapitalizeFirstLetter />} />
          <Route path="diff-checker" element={<DiffChecker />} />
          <Route path="reading-time-calculator" element={<ReadingTimeCalculator />} />
          <Route path="image-compressor" element={<ImageCompressor />} />
          <Route path="aspect-ratio-calculator" element={<AspectRatioCalculator />} />
          <Route path="favicon-generator-tool" element={<FaviconGenerator />} />
          <Route path="image-format-converter" element={<ImageConverter />} />
          <Route path="image-upscale-tool" element={<ImageUpscaler />} />
          <Route path="simple-calculator" element={<SimpleCalculator />} />
          <Route path="percentage-calculator" element={<PercentageCalculator />} />
          <Route path="online-age-calculator" element={<AgeCalculator />} />
          <Route path="discount-calculator" element={<DiscountCalculator />} />
          <Route path="square-root-calculator" element={<SquareRootCalculator />} />
          <Route path="bullet-point-generator" element={<BulletPointGenerator />} />
          
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms-of-service" element={<Terms />} />
          <Route path="cookies" element={<CookiePolicy />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
