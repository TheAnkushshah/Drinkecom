import React, { useState, useMemo, useEffect } from 'react';
import { MOCK_WINES } from '../constants';
import WineCard from '../components/WineCard';
import QuickViewModal from '../components/QuickViewModal';
import { Filter, ChevronDown, SlidersHorizontal, LayoutGrid, List, X, Star, Award, Leaf, Search, Heart, Eye, Trophy } from 'lucide-react';
import { Wine, WineType, DrinkCategory } from '../types';

interface ShopProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (wine: Wine) => void;
  initialFilters?: { type?: WineType; search?: string };
  wishlist: Wine[];
  onToggleWishlist: (wine: Wine) => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate, onAddToCart, initialFilters, wishlist, onToggleWishlist }) => {
  const [selectedType, setSelectedType] = useState<WineType | 'All'>(initialFilters?.type || 'All');
  const [selectedDrinkCategories, setSelectedDrinkCategories] = useState<DrinkCategory[]>([]);
  const [sortBy, setSortBy] = useState<'Featured' | 'PriceLow' | 'PriceHigh' | 'Rating' | 'Newest' | 'BestSeller'>('Featured');
  const [priceRange, setPriceRange] = useState<number>(500);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedVintages, setSelectedVintages] = useState<any[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [isAwardWinningOnly, setIsAwardWinningOnly] = useState(false);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [showAllDrinkTypes, setShowAllDrinkTypes] = useState(false);
  const [showAllRegions, setShowAllRegions] = useState(false);
  
  // Quick View state
  const [quickViewWine, setQuickViewWine] = useState<Wine | null>(null);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState(initialFilters?.search || '');

  // Update search query when initialFilters changes (e.g. from Header search)
  useEffect(() => {
    if (initialFilters?.search !== undefined) {
      setSearchQuery(initialFilters.search);
    }
  }, [initialFilters?.search]);

  const drinkTypeOptions: DrinkCategory[] = [
    'Scotch Whisky',
    'Irish Whiskey',
    'World Whiskies',
    'Cognac & Brandy',
    'Vodka',
    'Gin',
    'Liqueur & Bitters',
    'Rum',
    'Champagne',
    'Tequila & Mezcal',
    'Aperitif',
    'Wine'
  ];

  const visibleDrinkTypes = showAllDrinkTypes ? drinkTypeOptions : drinkTypeOptions.slice(0, 6);
  const regions = useMemo(() => Array.from(new Set(MOCK_WINES.map(w => w.region))), []);
  const visibleRegions = showAllRegions ? regions : regions.slice(0, 6);
  const vintages = useMemo(() => Array.from(new Set(MOCK_WINES.map(w => w.vintage))).sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') return b - a;
    return String(b).localeCompare(String(a));
  }), []);
  const certifications = useMemo(() => Array.from(new Set(MOCK_WINES.flatMap(w => w.certifications || []))), []);

  const toggleFilter = (list: any[], item: any, setter: React.Dispatch<React.SetStateAction<any[]>>) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  const filteredWines = useMemo(() => {
    let result = [...MOCK_WINES];

    // Search Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(w => 
        w.name.toLowerCase().includes(query) ||
        w.drinkCategory.toLowerCase().includes(query) ||
        w.varietal.toLowerCase().includes(query) ||
        w.region.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query) ||
        String(w.vintage).toLowerCase().includes(query)
      );
    }

    if (selectedDrinkCategories.length > 0) {
      result = result.filter(w => selectedDrinkCategories.includes(w.drinkCategory));
    }

    if (selectedType !== 'All') {
      result = result.filter(w => w.type === selectedType);
    }
    result = result.filter(w => w.price <= priceRange);

    if (selectedRegions.length > 0) {
      result = result.filter(w => selectedRegions.includes(w.region));
    }

    if (selectedVintages.length > 0) {
      result = result.filter(w => selectedVintages.includes(w.vintage));
    }

    if (minRating > 0) {
      result = result.filter(w => w.rating >= minRating);
    }

    if (selectedCerts.length > 0) {
      result = result.filter(w => w.certifications?.some(c => selectedCerts.includes(c)));
    }

    if (isAwardWinningOnly) {
      result = result.filter(w => w.awards && w.awards.length > 0);
    }

    switch (sortBy) {
      case 'PriceLow': result.sort((a, b) => a.price - b.price); break;
      case 'PriceHigh': result.sort((a, b) => b.price - a.price); break;
      case 'Rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'BestSeller': 
        // Best Seller Proxy: Higher rating combined with lower stock (high turnover)
        result.sort((a, b) => (b.rating - a.rating) || (a.stock - b.stock)); 
        break;
      case 'Newest': 
        result.sort((a, b) => {
          const vA = typeof a.vintage === 'number' ? a.vintage : 0;
          const vB = typeof b.vintage === 'number' ? b.vintage : 0;
          return vB - vA;
        }); 
        break;
      default: break; 
    }
    return result;
  }, [selectedType, selectedDrinkCategories, sortBy, priceRange, selectedRegions, selectedVintages, minRating, selectedCerts, isAwardWinningOnly, searchQuery]);

  // Added optional children to satisfy TypeScript when children are provided via JSX syntax
  const FilterSection = ({ title, children, noDivider }: { title: string; children?: React.ReactNode; noDivider?: boolean }) => (
    <div className={`${noDivider ? '' : 'border-b border-dashed border-gray-300'} -mx-4 px-4 py-6`}>
      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#722f3f] font-bold mb-4">{title}</h4>
      {children}
    </div>
  );

  const FiltersContent = () => (
    <div className="space-y-2">
      {/* Inline Shop Search */}
      <FilterSection title="Search Collection">
        <div className="relative flex items-center bg-white border border-[#e8e6e1] rounded-full px-4 py-2 focus-within:border-[#722f3f] transition-all">
          <Search size={14} className="text-gray-400 mr-2" />
          <input 
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs font-lora italic outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="ml-2 text-gray-400 hover:text-black">
              <X size={14} />
            </button>
          )}
        </div>
      </FilterSection>

      <FilterSection title="Drink Type">
        <div className="space-y-2">
          {visibleDrinkTypes.map(cat => (
            <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox"
                checked={selectedDrinkCategories.includes(cat)}
                onChange={() => toggleFilter(selectedDrinkCategories, cat, setSelectedDrinkCategories)}
                className="accent-[#722f3f] w-4 h-4 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-500 group-hover:text-black transition-colors">{cat}</span>
            </label>
          ))}
          {drinkTypeOptions.length > 6 && (
            <button
              onClick={() => setShowAllDrinkTypes(!showAllDrinkTypes)}
              className="text-[10px] uppercase tracking-widest font-bold text-[#722f3f] hover:text-[#5a2532] transition-colors"
            >
              {showAllDrinkTypes ? 'Show Less' : `Show ${drinkTypeOptions.length - 6} More`}
            </button>
          )}
        </div>
      </FilterSection>

      <FilterSection title="Recognitions">
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input 
            type="checkbox"
            checked={isAwardWinningOnly}
            onChange={() => setIsAwardWinningOnly(!isAwardWinningOnly)}
            className="accent-[#722f3f] w-4 h-4 rounded cursor-pointer"
          />
          <div className="flex items-center space-x-2">
            <Trophy size={14} className="text-[#d4af37]" />
            <span className="text-sm text-gray-500 group-hover:text-black transition-colors">Award Winning Only</span>
          </div>
        </label>
      </FilterSection>

      <FilterSection title="Wine Type">
        <div className="grid grid-cols-1 gap-2">
          {['All', 'Red', 'White', 'Rosé', 'Sparkling'].map(type => (
            <label key={type} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="radio" 
                name="type" 
                checked={selectedType === type}
                onChange={() => setSelectedType(type as any)}
                className="accent-[#722f3f] w-4 h-4 cursor-pointer"
              />
              <span className={`text-sm tracking-wide transition-colors ${selectedType === type ? 'text-[#722f3f] font-bold' : 'text-gray-500 group-hover:text-black'}`}>
                {type}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title={`Price Range (Up to $${priceRange})`}>
        <input 
          type="range" 
          min="30" 
          max="500" 
          step="10" 
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-[#722f3f] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-400 mt-2">
          <span>$30</span>
          <span>$500+</span>
        </div>
      </FilterSection>

      <FilterSection title="Region">
        <div className="space-y-2">
          {visibleRegions.map(region => (
            <label key={region} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox"
                checked={selectedRegions.includes(region)}
                onChange={() => toggleFilter(selectedRegions, region, setSelectedRegions)}
                className="accent-[#722f3f] w-4 h-4 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-500 group-hover:text-black transition-colors">{region}</span>
            </label>
          ))}
          {regions.length > 6 && (
            <button
              onClick={() => setShowAllRegions(!showAllRegions)}
              className="text-[10px] uppercase tracking-widest font-bold text-[#722f3f] hover:text-[#5a2532] transition-colors"
            >
              {showAllRegions ? 'Show Less' : `Show ${regions.length - 6} More`}
            </button>
          )}
        </div>
      </FilterSection>

      <FilterSection title="Vintage / Age">
        <div className="flex flex-wrap gap-2">
          {vintages.map(v => (
            <button
              key={v}
              onClick={() => toggleFilter(selectedVintages, v, setSelectedVintages)}
              className={`px-3 py-1 text-xs border transition-all ${selectedVintages.includes(v) ? 'bg-[#722f3f] text-white border-[#722f3f]' : 'bg-white text-gray-500 border-[#e8e6e1] hover:border-black'}`}
            >
              {v}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Min. Rating">
        <div className="flex items-center space-x-2">
          {[90, 92, 94, 96].map(r => (
            <button
              key={r}
              onClick={() => setMinRating(minRating === r ? 0 : r)}
              className={`flex-grow py-1 text-[10px] border font-bold transition-all ${minRating === r ? 'bg-[#d4af37] text-white border-[#d4af37]' : 'bg-white text-gray-500 border-[#e8e6e1]'}`}
            >
              {r}+
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Certifications" noDivider>
        <div className="space-y-2">
          {certifications.map(cert => (
            <label key={cert} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox"
                checked={selectedCerts.includes(cert)}
                onChange={() => toggleFilter(selectedCerts, cert, setSelectedCerts)}
                className="accent-[#722f3f] w-4 h-4 cursor-pointer"
              />
              <div className="flex items-center space-x-2">
                {cert === 'Organic' && <Leaf size={14} className="text-green-600" />}
                <span className="text-sm text-gray-500 group-hover:text-black transition-colors">{cert}</span>
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      <button 
        onClick={() => {
          setSelectedType('All');
          setSelectedDrinkCategories([]);
          setPriceRange(500);
          setSelectedRegions([]);
          setSelectedVintages([]);
          setMinRating(0);
          setSelectedCerts([]);
          setIsAwardWinningOnly(false);
          setSearchQuery('');
        }}
        className="w-full mt-6 py-3 border border-dashed border-gray-300 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#722f3f] hover:border-[#722f3f] transition-all"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in fade-in duration-700">
      <div className="mb-16 text-center">
        <h4 className="text-[#d4af37] uppercase tracking-[0.4em] font-bold text-xs mb-4">Cellar Direct</h4>
        <h1 className="text-5xl font-serif text-[#2a2a2a] mb-4">The Collection</h1>
        <p className="text-gray-500 font-lora italic max-w-2xl mx-auto">
          Meticulously curated world-class wines and spirits from the heart of our valley to your doorstep.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Trigger */}
        <button 
          onClick={() => setIsMobileFiltersOpen(true)}
          className="lg:hidden flex items-center justify-center space-x-2 bg-[#722f3f] text-white py-4 rounded-sm uppercase tracking-widest text-xs font-bold sticky top-24 z-40 shadow-xl"
        >
          <Filter size={18} />
          <span>Filters & Search</span>
        </button>

        {/* Filters Sidebar - Desktop */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-32 h-fit p-4 border border-dashed border-gray-300">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm uppercase tracking-widest font-bold flex items-center">
              <SlidersHorizontal size={16} className="mr-2" /> Refine By
            </h3>
          </div>
          <FiltersContent />
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Top Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 p-4 border border border-gray-300 gap-6">
            <div className="flex items-center space-x-4">
              <p className="text-xs text-gray-400 tracking-widest uppercase">
                Showing <span className="text-[#2a2a2a] font-bold">{filteredWines.length}</span> Masterpieces
              </p>
              {searchQuery && (
                <span className="text-[10px] uppercase font-bold tracking-widest bg-[#722f3f]/10 text-[#722f3f] px-3 py-1 rounded-full flex items-center">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="ml-2 hover:text-black">
                    <X size={10} />
                  </button>
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-8">
              {/* Layout Toggle */}
              <div className="hidden sm:flex items-center space-x-2 border-r border-[#e8e6e1] pr-8">
                <button 
                  onClick={() => setLayout('grid')}
                  className={`p-2 transition-colors ${layout === 'grid' ? 'text-[#722f3f]' : 'text-gray-300 hover:text-black'}`}
                >
                  <LayoutGrid size={20} />
                </button>
                <button 
                  onClick={() => setLayout('list')}
                  className={`p-2 transition-colors ${layout === 'list' ? 'text-[#722f3f]' : 'text-gray-300 hover:text-black'}`}
                >
                  <List size={20} />
                </button>
              </div>

              {/* Sorting */}
              <div className="flex items-center space-x-4">
                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Sort By:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs uppercase tracking-widest font-bold outline-none cursor-pointer text-[#722f3f] border-b border-transparent focus:border-[#722f3f] py-1"
                >
                  <option value="Featured">Featured</option>
                  <option value="BestSeller">Best Seller</option>
                  <option value="PriceLow">Price: Low to High</option>
                  <option value="PriceHigh">Price: High to Low</option>
                  <option value="Rating">Top Rated</option>
                  <option value="Newest">Newest Arrival</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid/List Rendering */}
          {layout === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredWines.map(wine => (
                <WineCard 
                  key={wine.id} 
                  wine={wine} 
                  onClick={() => onNavigate('product', { id: wine.id })}
                  onAddToCart={(e) => { e.stopPropagation(); onAddToCart(wine); }}
                  onQuickView={(e) => { e.stopPropagation(); setQuickViewWine(wine); }}
                  onToggleWishlist={() => onToggleWishlist(wine)}
                  isInWishlist={wishlist.some(item => item.id === wine.id)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredWines.map(wine => (
                <div 
                  key={wine.id}
                  onClick={() => onNavigate('product', { id: wine.id })}
                  className="flex flex-col sm:flex-row bg-white border border-[#e8e6e1] rounded-sm overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-full sm:w-48 aspect-[3/4] sm:aspect-auto overflow-hidden bg-gray-50 relative">
                    <img src={wine.imageUrl} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={wine.name} />
                    
                    {/* Floating Icons in List View */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(wine);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition-all z-10 ${wishlist.some(item => item.id === wine.id) ? 'bg-[#722f3f] text-white shadow-lg' : 'bg-white/50 text-gray-800 hover:bg-white'}`}
                      >
                        <Heart size={16} className={wishlist.some(item => item.id === wine.id) ? 'fill-white' : ''} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewWine(wine);
                        }}
                        className="p-2 bg-white/50 backdrop-blur-md text-gray-800 rounded-full hover:bg-white transition-all shadow-sm"
                      >
                        <Eye size={16} />
                      </button>
                    </div>

                  </div>
                  <div className="flex-grow p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] uppercase tracking-widest text-[#722f3f] font-bold">{wine.drinkCategory} - {wine.varietal}</span>
                        <div className="flex items-center text-[#d4af37] font-bold text-xs">
                          <Star size={12} fill="#d4af37" className="mr-1" /> {wine.rating}
                        </div>
                      </div>
                      <h3 className="text-2xl font-serif mb-1 group-hover:text-[#722f3f] transition-colors">{wine.name} {typeof wine.vintage === 'number' ? wine.vintage : ''}</h3>
                      <p className="text-sm text-gray-500 font-lora italic mb-4">{wine.region}</p>
                      <p className="text-sm text-gray-600 font-lora line-clamp-2">{wine.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-6 mt-4 border-t border-[#faf8f5]">
                      <span className="text-xl font-medium">${wine.price}</span>
                      <div className="flex items-center space-x-3">
                         <button 
                          onClick={(e) => { e.stopPropagation(); setQuickViewWine(wine); }}
                          className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-[#722f3f] transition-colors"
                        >
                          Quick View
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); onAddToCart(wine); }}
                          className="bg-[#722f3f] text-white px-6 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-[#5a2532] transition-colors"
                        >
                          Quick Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {filteredWines.length === 0 && (
            <div className="py-40 text-center bg-[#faf8f5] rounded-sm border-2 border-dashed border-[#e8e6e1]">
              <div className="max-w-sm mx-auto space-y-4">
                <Search size={48} className="mx-auto text-gray-200 mb-6" />
                <h3 className="text-2xl font-serif">No Items Found</h3>
                <p className="text-gray-400 font-lora italic leading-relaxed">
                  We couldn't find any items matching "{searchQuery}" or your specific criteria. Try broadening your price range or exploring different categories.
                </p>
                <button 
                  onClick={() => {
                    setSelectedType('All');
                    setSelectedDrinkCategories([]);
                    setPriceRange(500);
                    setSelectedRegions([]);
                    setSelectedVintages([]);
                    setMinRating(0);
                    setSelectedCerts([]);
                    setIsAwardWinningOnly(false);
                    setSearchQuery('');
                  }}
                  className="mt-6 text-[#722f3f] font-bold uppercase tracking-widest text-[10px] border-b-2 border-[#722f3f] pb-1"
                >
                  Reset all filters
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Quick View Modal */}
      {quickViewWine && (
        <QuickViewModal 
          wine={quickViewWine}
          isOpen={!!quickViewWine}
          onClose={() => setQuickViewWine(null)}
          onAddToCart={(wine) => {
            onAddToCart(wine);
            setQuickViewWine(null);
          }}
          onNavigateToProduct={(id) => onNavigate('product', { id })}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={wishlist.some(w => w.id === quickViewWine?.id)}
        />
      )}

      {/* Mobile Filter Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm lg:hidden transition-opacity">
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="p-6 border-b border-[#e8e6e1] flex items-center justify-between bg-[#faf8f5]">
              <h3 className="text-lg font-serif">Filters & Search</h3>
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 space-y-2">
              <FiltersContent />
            </div>

            <div className="p-6 border-t border-[#e8e6e1] bg-[#faf8f5]">
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full bg-[#722f3f] text-white py-4 uppercase tracking-[0.2em] font-bold text-xs hover:bg-[#5a2532] transition-all"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
