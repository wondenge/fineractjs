

import ApiClient from '../ApiClient';

/**
 * The GetFieldConfigurationEntityResponse model module.
 * @module model/GetFieldConfigurationEntityResponse
 * @version 1.0
 */
class GetFieldConfigurationEntityResponse {
    /**
     * Constructs a new <code>GetFieldConfigurationEntityResponse</code>.
     * GetFieldConfigurationEntityResponse
     * @alias module:model/GetFieldConfigurationEntityResponse
     */
    constructor() { 
        
        GetFieldConfigurationEntityResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFieldConfigurationEntityResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFieldConfigurationEntityResponse} obj Optional instance to populate.
     * @return {module:model/GetFieldConfigurationEntityResponse} The populated <code>GetFieldConfigurationEntityResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFieldConfigurationEntityResponse();

            if (data.hasOwnProperty('fieldConfigurationId')) {
                obj['fieldConfigurationId'] = ApiClient.convertToType(data['fieldConfigurationId'], 'Number');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('subentity')) {
                obj['subentity'] = ApiClient.convertToType(data['subentity'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('is_enabled')) {
                obj['is_enabled'] = ApiClient.convertToType(data['is_enabled'], 'String');
            }
            if (data.hasOwnProperty('is_mandatory')) {
                obj['is_mandatory'] = ApiClient.convertToType(data['is_mandatory'], 'String');
            }
            if (data.hasOwnProperty('validation_regex')) {
                obj['validation_regex'] = ApiClient.convertToType(data['validation_regex'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} fieldConfigurationId
 */
GetFieldConfigurationEntityResponse.prototype['fieldConfigurationId'] = undefined;

/**
 * @member {String} entity
 */
GetFieldConfigurationEntityResponse.prototype['entity'] = undefined;

/**
 * @member {String} subentity
 */
GetFieldConfigurationEntityResponse.prototype['subentity'] = undefined;

/**
 * @member {String} field
 */
GetFieldConfigurationEntityResponse.prototype['field'] = undefined;

/**
 * @member {String} is_enabled
 */
GetFieldConfigurationEntityResponse.prototype['is_enabled'] = undefined;

/**
 * @member {String} is_mandatory
 */
GetFieldConfigurationEntityResponse.prototype['is_mandatory'] = undefined;

/**
 * @member {String} validation_regex
 */
GetFieldConfigurationEntityResponse.prototype['validation_regex'] = undefined;






export default GetFieldConfigurationEntityResponse;

