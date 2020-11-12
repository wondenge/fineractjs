

import ApiClient from '../ApiClient';
import Event from './Event';
import Field from './Field';

/**
 * The PutHookResponseChangesSwagger model module.
 * @module model/PutHookResponseChangesSwagger
 * @version 1.0
 */
class PutHookResponseChangesSwagger {
    /**
     * Constructs a new <code>PutHookResponseChangesSwagger</code>.
     * @alias module:model/PutHookResponseChangesSwagger
     */
    constructor() { 
        
        PutHookResponseChangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutHookResponseChangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutHookResponseChangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutHookResponseChangesSwagger} The populated <code>PutHookResponseChangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutHookResponseChangesSwagger();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [Event]);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], [Field]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} displayName
 */
PutHookResponseChangesSwagger.prototype['displayName'] = undefined;

/**
 * @member {Array.<module:model/Event>} events
 */
PutHookResponseChangesSwagger.prototype['events'] = undefined;

/**
 * @member {Array.<module:model/Field>} config
 */
PutHookResponseChangesSwagger.prototype['config'] = undefined;






export default PutHookResponseChangesSwagger;

