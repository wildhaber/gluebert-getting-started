import { BODY_MODULE } from './modules/body/body.module';
import { CONTENT_MODULE } from './modules/content/content.module';
import { GRID_MODULE } from './modules/grid/grid.module';
import { JUMBO_MODULE } from './modules/jumbo/jumbo.module';
import { JUMBOLINO_MODULE } from './modules/jumbolino/jumbolino.module';
import { LAZY_IMG_MODULE } from './modules/lazy-img/lazy-img.module';
import { SLIDE_MODULE } from './modules/slide/slide.module';
import { TABLE_MODULE } from './modules/table/table.module';
import { PROCESS_ILLUSTRATION_MODULE } from './modules/process-illustration/process-illustration.module';

/**
 * List of registered Modules
 * @type {ModuleSignature[]}
 */
const MODULES = [
    BODY_MODULE,
    CONTENT_MODULE,
    GRID_MODULE,
    JUMBO_MODULE,
    JUMBOLINO_MODULE,
    LAZY_IMG_MODULE,
    SLIDE_MODULE,
    PROCESS_ILLUSTRATION_MODULE,
    TABLE_MODULE,
];

export {
    MODULES,
};