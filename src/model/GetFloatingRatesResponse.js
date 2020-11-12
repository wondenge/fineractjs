

import ApiClient from '../ApiClient';

/**
 * The GetFloatingRatesResponse model module.
 * @module model/GetFloatingRatesResponse
 * @version 1.0
 */
class GetFloatingRatesResponse {
    /**
     * Constructs a new <code>GetFloatingRatesResponse</code>.
     * GetFloatingRatesResponse
     * @alias module:model/GetFloatingRatesResponse
     */
    constructor() { 
        
        GetFloatingRatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFloatingRatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFloatingRatesResponse} obj Optional instance to populate.
     * @return {module:model/GetFloatingRatesResponse} The populated <code>GetFloatingRatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFloatingRatesResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('isBaseLendingRate')) {
                obj['isBaseLendingRate'] = ApiClient.convertToType(data['isBaseLendingRate'], 'Boolean');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFloatingRatesResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFloatingRatesResponse.prototype['name'] = undefined;

/**
 * @member {Boolean} isBaseLendingRate
 */
GetFloatingRatesResponse.prototype['isBaseLendingRate'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetFloatingRatesResponse.prototype['isActive'] = undefined;

/**
 * @member {String} createdBy
 */
GetFloatingRatesResponse.prototype['createdBy'] = undefined;

/**
 * @member {String} createdOn
 */
GetFloatingRatesResponse.prototype['createdOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
GetFloatingRatesResponse.prototype['modifiedBy'] = undefined;

/**
 * @member {String} modifiedOn
 */
GetFloatingRatesResponse.prototype['modifiedOn'] = undefined;






export default GetFloatingRatesResponse;

