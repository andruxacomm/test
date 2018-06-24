'use strict';

import polyfills from './libraries/polyfills';
import hero from 'components/hero/hero';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
    hero();
});
