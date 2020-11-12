

import ApiClient from '../ApiClient';
import Event from './Event';
import Field from './Field';

/**
 * The PostHookRequest model module.
 * @module model/PostHookRequest
 * @version 1.0
 */
class PostHookRequest {
    /**
     * Constructs a new <code>PostHookRequest</code>.
     * PostHookRequest
     * @alias module:model/PostHookRequest
     */
    constructor() { 
        
        PostHookRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostHookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostHookRequest} obj Optional instance to populate.
     * @return {module:model/PostHookRequest} The populated <code>PostHookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostHookRequest();

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
PostHookRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} isActive
 */
PostHookRequest.prototype['isActive'] = undefined;

/**
 * @member {String} displayName
 */
PostHookRequest.prototype['displayName'] = undefined;

/**
 * @member {Number} templateId
 */
PostHookRequest.prototype['templateId'] = undefined;

/**
 * @member {Array.<module:model/Event>} events
 */
PostHookRequest.prototype['events'] = undefined;

/**
 * @member {Array.<module:model/Field>} config
 */
PostHookRequest.prototype['config'] = undefined;






export default PostHookRequest;

