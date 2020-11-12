  

import ApiClient from '../ApiClient';
import GetFloatingRatesRatePeriods from './GetFloatingRatesRatePeriods';

/**
 * The GetFloatingRatesFloatingRateIdResponse model module.
 * @module model/GetFloatingRatesFloatingRateIdResponse
 * @version 1.0
 */
class GetFloatingRatesFloatingRateIdResponse {
    /**
     * Constructs a new <code>GetFloatingRatesFloatingRateIdResponse</code>.
     * GetFloatingRatesFloatingRateIdResponse
     * @alias module:model/GetFloatingRatesFloatingRateIdResponse
     */
    constructor() { 
        
        GetFloatingRatesFloatingRateIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFloatingRatesFloatingRateIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFloatingRatesFloatingRateIdResponse} obj Optional instance to populate.
     * @return {module:model/GetFloatingRatesFloatingRateIdResponse} The populated <code>GetFloatingRatesFloatingRateIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFloatingRatesFloatingRateIdResponse();

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
            if (data.hasOwnProperty('ratePeriods')) {
                obj['ratePeriods'] = ApiClient.convertToType(data['ratePeriods'], [GetFloatingRatesRatePeriods]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFloatingRatesFloatingRateIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFloatingRatesFloatingRateIdResponse.prototype['name'] = undefined;

/**
 * @member {Boolean} isBaseLendingRate
 */
GetFloatingRatesFloatingRateIdResponse.prototype['isBaseLendingRate'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetFloatingRatesFloatingRateIdResponse.prototype['isActive'] = undefined;

/**
 * @member {String} createdBy
 */
GetFloatingRatesFloatingRateIdResponse.prototype['createdBy'] = undefined;

/**
 * @member {String} createdOn
 */
GetFloatingRatesFloatingRateIdResponse.prototype['createdOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
GetFloatingRatesFloatingRateIdResponse.prototype['modifiedBy'] = undefined;

/**
 * @member {String} modifiedOn
 */
GetFloatingRatesFloatingRateIdResponse.prototype['modifiedOn'] = undefined;

/**
 * @member {Array.<module:model/GetFloatingRatesRatePeriods>} ratePeriods
 */
GetFloatingRatesFloatingRateIdResponse.prototype['ratePeriods'] = undefined;






export default GetFloatingRatesFloatingRateIdResponse;

