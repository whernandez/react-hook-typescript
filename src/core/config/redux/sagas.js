/**
 * Import all actions sagas
 */

import saga from '../../../contact/saga';

/**
 * Create array saga
 * @type {*[]}
 */
const sagas = [saga];

/**
 * Combine all sagas in one to export to store
 * @param sagaMiddleware
 */
export const combinedSagas = (sagaMiddleware) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
