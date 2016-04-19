/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  lowerFix: false,
  categories: {
    'JUST IN': {
      link: '#',
      children: {
        Dresses: '#',
        Top: '#',
        'Hoodies & Sweatshirts': '#',
        Sweaters: '#',
        Outerwear: '#',
        Kimono: '#',
        'Jumpsuits & Rompers': '#',
        'Co-ordinates': '#',
        Shoes: '#',
        Accessories: '#',
        Bottoms: '#',
        Swimwear: '#'
      }
    },
    CLOTHING: {
      link: '#',
      children: {
        list1: {
          DRESSES: {
            link: '#',
            isheader: true
          },
          'Boho Dresses': { link: '#' },
          'Casual Dresses': { link: '#' },
          'Floral Dresses': { link: '#' },
          'Maxl Dresses': { link: '#' },
          'Party Dresses': { link: '#' },
          'Bodycon Dresses': { link: '#' },
          'Lace Dresses': { link: '#' },
          'Backless Dresses': { link: '#' },
          'MIDI Dresses': { link: '#' },
          'CutOut Dresses': { link: '#' },
          'Skater Dresses': { link: '#' }
        },
        list2: {
          OUTERWEAR: {
            link: '#',
            isheader: true
          },
          Coats: { link: '#' },
          Jackets: { link: '#' },
          Blazers: { link: '#' },
          Vests: { link: '#' },
          TOPS: {
            link: '#',
            isheader: true
          },
          'T-shirts': { link: '#' },
          'Tank Top': { link: '#' },
          Bodysuits: { link: '#' },
          'Blouses & Shirts': { link: '#' },
          Bralettes: { link: '#' }
        },
        list3: {
          Sweaters: {
            link: '#',
            isheader: true
          },
          Jumpers: { link: '#' },
          Cardigans: { link: '#' },
          Vests: { link: '#' },
          Bottoms: {
            link: '#',
            isheader: true
          },
          Pants: { link: '#' },
          Skirts: { link: '#' },
          Shorts: { link: '#' },
          Leggins: { link: '#' },
          'JUMPSUITS & ROMPERS': {
            link: '#',
            isheader: true
          },
          'Hoodies & Sweatshirts': {
            link: '#',
            isheader: true
          },
          SWIMWEAR: {
            link: '#',
            isheader: true
          },
          KIMONOS: {
            link: '#',
            isheader: true
          },
          'CO-ORDINATES': {
            link: '#',
            isheader: true
          }
        }
      }
    },
    DRESSES: {
      link: '#',
      children: {
        'Boho Dresses': '#',
        'Casual Dresses': '#',
        'Floral Dresses': '#',
        'Maxl Dresses': '#',
        'Party Dresses': '#',
        'Bodycon Dresses': '#',
        'Lace Dresses': '#',
        'Backless Dresses': '#',
        'MIDI Dresses': '#',
        'CutOut Dresses': '#',
        'Skater Dresses': '#'
      }
    },
    SHOES: {
      link: '#',
      children: {
        'High Heels': '#',
        Sandals: '#',
        Boots: '#',
        Wedges: '#',
        Flats: '#'
      }
    },
    TOPS: {
      link: '#',
      children: {
        'T-shirts': '#',
        'Tank Top': '#',
        Bodysuits: '#',
        'Blouses & Shirts': '#',
        Bralettes: '#'
      }
    },
    ACCESSORIES: {
      link: '#',
      children: {
        Handbags: '#',
        Necklace: '#',
        'Earrings & Sweatshirts': '#',
        Bracelets: '#',
        Rings: '#',
        Scaves: '#',
        Hats: '#',
        Belts: '#',
        Sunglasses: '#'
      }
    },
    SALE: {
      link: '#',
      children: {
        Dresses: '#',
        Top: '#',
        'Hoodies & Sweatshirts': '#',
        Sweaters: '#',
        Outerwear: '#',
        Kimono: '#',
        'Jumpsuits & Rompers': '#',
        'Co-ordinates': '#',
        Shoes: '#',
        Accessories: '#',
        Bottoms: '#',
        Swimwear: '#'
      }
    }
  },
  showPrompt: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'NAV_INIT':
      return Object.assign({}, state, action.value);
    case 'NAV_SET_LOWER_FIX':
      return Object.assign({}, state, {
        lowerFix: action.flag
      });
    case 'NAV_SHOW_PROMPT':
      return Object.assign({}, state, {
        show
      });
    default:
      return state;
  }
};
