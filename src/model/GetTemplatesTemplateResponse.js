

import ApiClient from '../ApiClient';
import TemplateMapper from './TemplateMapper';

/**
 * The GetTemplatesTemplateResponse model module.
 * @module model/GetTemplatesTemplateResponse
 * @version 1.0
 */
class GetTemplatesTemplateResponse {
    /**
     * Constructs a new <code>GetTemplatesTemplateResponse</code>.
     * GetTemplatesTemplateResponse
     * @alias module:model/GetTemplatesTemplateResponse
     */
    constructor() { 
        
        GetTemplatesTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTemplatesTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTemplatesTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetTemplatesTemplateResponse} The populated <code>GetTemplatesTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTemplatesTemplateResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('mappers')) {
                obj['mappers'] = ApiClient.convertToType(data['mappers'], [TemplateMapper]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTemplatesTemplateResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetTemplatesTemplateResponse.prototype['name'] = undefined;

/**
 * @member {Number} entity
 */
GetTemplatesTemplateResponse.prototype['entity'] = undefined;

/**
 * @member {Number} type
 */
GetTemplatesTemplateResponse.prototype['type'] = undefined;

/**
 * @member {String} text
 */
GetTemplatesTemplateResponse.prototype['text'] = undefined;

/**
 * @member {Array.<module:model/TemplateMapper>} mappers
 */
GetTemplatesTemplateResponse.prototype['mappers'] = undefined;






export default GetTemplatesTemplateResponse;

