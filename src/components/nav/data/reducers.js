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
    OUTERWEAR: {
      link: '#',
      children: {
        Coats: '#',
        Jackets: '#',
        Blazers: '#',
        Vests: '#'
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
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'NAV_INIT':
      return Object.assign({}, state, action.value);
    case 'NAV_SET_LOWER_FIX':
      return Object.assign({}, state, {
        lowerFix: action.flag
      });
    default:
      return state;
  }
};
