

import ApiClient from '../ApiClient';
import Event from './Event';
import Field from './Field';

/**
 * The GetHookResponse model module.
 * @module model/GetHookResponse
 * @version 1.0
 */
class GetHookResponse {
    /**
     * Constructs a new <code>GetHookResponse</code>.
     * GetHookResponse
     * @alias module:model/GetHookResponse
     */
    constructor() { 
        
        GetHookResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetHookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHookResponse} obj Optional instance to populate.
     * @return {module:model/GetHookResponse} The populated <code>GetHookResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetHookResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
            }
            if (data.hasOwnProperty('templateName')) {
                obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
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
 * @member {Number} id
 */
GetHookResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetHookResponse.prototype['name'] = undefined;

/**
 * @member {String} displayName
 */
GetHookResponse.prototype['displayName'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetHookResponse.prototype['isActive'] = undefined;

/**
 * @member {Date} createdAt
 */
GetHookResponse.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
GetHookResponse.prototype['updatedAt'] = undefined;

/**
 * @member {Number} templateId
 */
GetHookResponse.prototype['templateId'] = undefined;

/**
 * @member {String} templateName
 */
GetHookResponse.prototype['templateName'] = undefined;

/**
 * @member {Array.<module:model/Event>} events
 */
GetHookResponse.prototype['events'] = undefined;

/**
 * @member {Array.<module:model/Field>} config
 */
GetHookResponse.prototype['config'] = undefined;






export default GetHookResponse;

