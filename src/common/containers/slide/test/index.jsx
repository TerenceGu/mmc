/**
 * Created by fed on 16/4/11.
 */
import React from 'react';
import { render } from 'react-dom';

import Component from '../index.jsx';

const props = {
  width: 960,
  height: 555
};

const list = ['http://img.makemechic.com/images/makemechic.com/1460426412651850371.jpg',
  'http://img.makemechic.com/images/makemechic.com/1460426206764472139.jpg'
];

render(<Component {...props}>
  {list.map(name => <img width={props.width} src={name} />)}
</Component>
  , document.getElementById('root'));
