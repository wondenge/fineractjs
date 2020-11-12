

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetEntityDatatableChecksResponse model module.
 * @module model/GetEntityDatatableChecksResponse
 * @version 1.0
 */
class GetEntityDatatableChecksResponse {
    /**
     * Constructs a new <code>GetEntityDatatableChecksResponse</code>.
     * GetEntityDatatableChecksResponse
     * @alias module:model/GetEntityDatatableChecksResponse
     */
    constructor() { 
        
        GetEntityDatatableChecksResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEntityDatatableChecksResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEntityDatatableChecksResponse} obj Optional instance to populate.
     * @return {module:model/GetEntityDatatableChecksResponse} The populated <code>GetEntityDatatableChecksResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEntityDatatableChecksResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = EnumOptionData.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('datatableName')) {
                obj['datatableName'] = ApiClient.convertToType(data['datatableName'], 'String');
            }
            if (data.hasOwnProperty('systemDefined')) {
                obj['systemDefined'] = ApiClient.convertToType(data['systemDefined'], 'Boolean');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetEntityDatatableChecksResponse.prototype['id'] = undefined;

/**
 * @member {String} entity
 */
GetEntityDatatableChecksResponse.prototype['entity'] = undefined;

/**
 * @member {module:model/EnumOptionData} status
 */
GetEntityDatatableChecksResponse.prototype['status'] = undefined;

/**
 * @member {String} datatableName
 */
GetEntityDatatableChecksResponse.prototype['datatableName'] = undefined;

/**
 * @member {Boolean} systemDefined
 */
GetEntityDatatableChecksResponse.prototype['systemDefined'] = undefined;

/**
 * @member {Number} order
 */
GetEntityDatatableChecksResponse.prototype['order'] = undefined;

/**
 * @member {Number} productId
 */
GetEntityDatatableChecksResponse.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetEntityDatatableChecksResponse.prototype['productName'] = undefined;






export default GetEntityDatatableChecksResponse;

