

import ApiClient from '../ApiClient';
import Event from './Event';
import Field from './Field';

/**
 * The PutHookRequest model module.
 * @module model/PutHookRequest
 * @version 1.0
 */
class PutHookRequest {
    /**
     * Constructs a new <code>PutHookRequest</code>.
     * PutHookRequest
     * @alias module:model/PutHookRequest
     */
    constructor() { 
        
        PutHookRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutHookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutHookRequest} obj Optional instance to populate.
     * @return {module:model/PutHookRequest} The populated <code>PutHookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutHookRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
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
 * @member {String} name
 */
PutHookRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} isActive
 */
PutHookRequest.prototype['isActive'] = undefined;

/**
 * @member {String} displayName
 */
PutHookRequest.prototype['displayName'] = undefined;

/**
 * @member {Number} templateId
 */
PutHookRequest.prototype['templateId'] = undefined;

/**
 * @member {Array.<module:model/Event>} events
 */
PutHookRequest.prototype['events'] = undefined;

/**
 * @member {Array.<module:model/Field>} config
 */
PutHookRequest.prototype['config'] = undefined;






export default PutHookRequest;

