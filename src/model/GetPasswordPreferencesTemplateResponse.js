

import ApiClient from '../ApiClient';

/**
 * The GetPasswordPreferencesTemplateResponse model module.
 * @module model/GetPasswordPreferencesTemplateResponse
 * @version 1.0
 */
class GetPasswordPreferencesTemplateResponse {
    /**
     * Constructs a new <code>GetPasswordPreferencesTemplateResponse</code>.
     * GetPasswordPreferencesTemplateResponse
     * @alias module:model/GetPasswordPreferencesTemplateResponse
     */
    constructor() { 
        
        GetPasswordPreferencesTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPasswordPreferencesTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPasswordPreferencesTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetPasswordPreferencesTemplateResponse} The populated <code>GetPasswordPreferencesTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPasswordPreferencesTemplateResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetPasswordPreferencesTemplateResponse.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetPasswordPreferencesTemplateResponse.prototype['description'] = undefined;

/**
 * @member {Boolean} active
 */
GetPasswordPreferencesTemplateResponse.prototype['active'] = undefined;

/**
 * @member {String} key
 */
GetPasswordPreferencesTemplateResponse.prototype['key'] = undefined;






export default GetPasswordPreferencesTemplateResponse;

