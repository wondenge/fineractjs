

import ApiClient from '../ApiClient';

/**
 * The GetEntityTypeEntityIdDocumentsResponse model module.
 * @module model/GetEntityTypeEntityIdDocumentsResponse
 * @version 1.0
 */
class GetEntityTypeEntityIdDocumentsResponse {
    /**
     * Constructs a new <code>GetEntityTypeEntityIdDocumentsResponse</code>.
     * GetEntityTypeEntityIdDocumentsResponse
     * @alias module:model/GetEntityTypeEntityIdDocumentsResponse
     */
    constructor() { 
        
        GetEntityTypeEntityIdDocumentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEntityTypeEntityIdDocumentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEntityTypeEntityIdDocumentsResponse} obj Optional instance to populate.
     * @return {module:model/GetEntityTypeEntityIdDocumentsResponse} The populated <code>GetEntityTypeEntityIdDocumentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEntityTypeEntityIdDocumentsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parentEntityType')) {
                obj['parentEntityType'] = ApiClient.convertToType(data['parentEntityType'], 'String');
            }
            if (data.hasOwnProperty('parentEntityId')) {
                obj['parentEntityId'] = ApiClient.convertToType(data['parentEntityId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = ApiClient.convertToType(data['storageType'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['id'] = undefined;

/**
 * @member {String} parentEntityType
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['parentEntityType'] = undefined;

/**
 * @member {Number} parentEntityId
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['parentEntityId'] = undefined;

/**
 * @member {String} name
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['name'] = undefined;

/**
 * @member {String} fileName
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['fileName'] = undefined;

/**
 * @member {Number} size
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['size'] = undefined;

/**
 * @member {String} type
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['type'] = undefined;

/**
 * @member {String} description
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['description'] = undefined;

/**
 * @member {String} location
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['location'] = undefined;

/**
 * @member {Number} storageType
 */
GetEntityTypeEntityIdDocumentsResponse.prototype['storageType'] = undefined;






export default GetEntityTypeEntityIdDocumentsResponse;

